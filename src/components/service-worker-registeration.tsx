"use client";

import { useEffect, useState } from "react";

export default function ServiceWorkerRegistration() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  useEffect(() => {
    // Only register service worker in production
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      let refreshing = false;

      // Handle the case when the controlled page is refreshed
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      // Listen for messages from the service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "UPDATE_AVAILABLE") {
          console.log(
            `[Service Worker] Update available: ${event.data.version}`
          );
          setUpdateAvailable(true);
        }
      });

      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );

            // Check for updates
            registration.addEventListener("updatefound", () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener("statechange", () => {
                  if (
                    newWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    // New service worker is installed but waiting
                    console.log(
                      "[Service Worker] Update found and ready to be used"
                    );
                    setWaitingWorker(newWorker);
                    setUpdateAvailable(true);
                  }
                });
              }
            });

            // Check if there's already a waiting service worker
            if (registration.waiting && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
              setWaitingWorker(registration.waiting);
            }
          })
          .catch((err) => {
            console.error("ServiceWorker registration failed: ", err);
          });
      });
    }
  }, []);

  // Function to update the service worker when user clicks update button
  const updateServiceWorker = () => {
    if (waitingWorker) {
      // Send a message to the service worker to skip waiting
      waitingWorker.postMessage({ action: "skipWaiting" });
    } else {
      window.location.reload();
    }
    setUpdateAvailable(false);
  };

  // Render update notification if available
  if (updateAvailable) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-highlight text-white p-4 rounded shadow-lg">
        <p className="mb-2">A new version of this site is available!</p>
        <button
          onClick={updateServiceWorker}
          className="px-4 py-2 bg-white text-highlight font-bold rounded hover:bg-gray-100 transition-colors"
        >
          Update Now
        </button>
      </div>
    );
  }

  return null; // This component doesn't render anything until an update is available
}
