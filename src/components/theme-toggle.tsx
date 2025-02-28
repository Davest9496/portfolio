"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  // Start with a neutral state to avoid hydration mismatch
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // Check for dark mode on component mount (client-side only)
  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));

    // Set up a mutation observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.body.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.contains("dark");

    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setIsDark(!isDarkMode);
  };

  // Don't render until we know the theme (client-side only)
  if (isDark === null) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        // Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
