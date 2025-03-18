const CACHE_VERSION = "v2.0";
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`;

// Add a list of URLs to cache when the service worker is installed
const urlsToCache = [
  "/",
  "/about",
  "/projects",
  "/contact",
  "/logo.svg",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  console.log(`[Service Worker] Installing new version: ${CACHE_VERSION}`);
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Caching app shell and content");
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Force this service worker to become the active service worker
        console.log("[Service Worker] Skip waiting for activation");
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log(`[Service Worker] Activating new version: ${CACHE_VERSION}`);

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        // Filter the caches and delete old versions
        return Promise.all(
          cacheNames
            .map((cacheName) => {
              if (
                cacheName.startsWith("portfolio-cache-") &&
                cacheName !== CACHE_NAME
              ) {
                console.log(
                  `[Service Worker] Deleting old cache: ${cacheName}`
                );
                return caches.delete(cacheName);
              }
            })
            .filter(Boolean)
        );
      })
      .then(() => {
        console.log("[Service Worker] Claiming clients");
        return self.clients.claim();
      })
      .then(() => {
        // Notify all clients that an update is available
        return self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: "UPDATE_AVAILABLE",
              version: CACHE_VERSION,
            });
          });
        });
      })
  );
});

// Strategy: Network-first with cache fallback for HTML and API requests
// Cache-first with network update for static assets
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Skip cross-origin requests
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  // Handle HTML pages (navigation requests)
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      // Try network first for HTML pages to ensure freshness
      fetch(event.request)
        .then((response) => {
          // If successful, clone and cache
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try the cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If not in cache, try to serve the offline page
            return caches.match("/offline.html").then((offlineResponse) => {
              return (
                offlineResponse ||
                new Response("You are offline and the page is not cached.", {
                  status: 503,
                  statusText: "Service Unavailable",
                  headers: new Headers({
                    "Content-Type": "text/plain",
                  }),
                })
              );
            });
          });
        })
    );
    return;
  }

  // For static assets, use cache-first strategy with network update
  if (
    event.request.method === "GET" &&
    (requestUrl.pathname.endsWith(".js") ||
      requestUrl.pathname.endsWith(".css") ||
      requestUrl.pathname.endsWith(".jpg") ||
      requestUrl.pathname.endsWith(".png") ||
      requestUrl.pathname.endsWith(".svg") ||
      requestUrl.pathname.endsWith(".webp") ||
      requestUrl.pathname.endsWith(".ico") ||
      requestUrl.pathname.includes("/icons/"))
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached response immediately if available
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update the cache with the new version in the background
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
          })
          .catch((error) => {
            console.error("Failed to fetch:", error);
            // Still return cached version if fetch fails
            return cachedResponse;
          });

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Default fetch behavior for everything else
  event.respondWith(
    fetch(event.request).catch(() => {
      // Check if we have it in cache
      return caches.match(event.request).then(
        (cachedResponse) =>
          cachedResponse ||
          new Response("Network request failed and no cache available", {
            status: 404,
            statusText: "Not Found",
            headers: new Headers({
              "Content-Type": "text/plain",
            }),
          })
      );
    })
  );
});

// Listen for messages from clients
self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
