"use client"; // This ensures the component only runs on the client side

import React, { useState, useEffect } from "react";

const MouseAnimation: React.FC = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // State to track if the mouse is moving (for optional effects)
  const [isMoving, setIsMoving] = useState(false);

  // State to track if device is likely a desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device is likely a desktop (has a mouse)
    const checkIsDesktop = () => {
      // A simple way to detect mobile devices is by checking screen width
      // and whether the device supports hover
      const width = window.innerWidth;
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      // Consider it a desktop if screen is wider than 768px and it has a fine pointer
      // or if it explicitly has a fine pointer (mouse/trackpad)
      return (width > 768 && !hasCoarsePointer) || hasFinePointer;
    };

    // Set the initial desktop status
    setIsDesktop(checkIsDesktop());

    // Update on resize (in case of orientation change or browser resize)
    const handleResize = () => {
      setIsDesktop(checkIsDesktop());
    };

    window.addEventListener("resize", handleResize);

    // If not a desktop device, don't set up mouse tracking
    if (!checkIsDesktop()) {
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    // Timer to track when mouse stops moving
    let moveTimer: NodeJS.Timeout;

    // Function to update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Set moving state to true
      setIsMoving(true);

      // Clear any existing timers
      clearTimeout(moveTimer);

      // Set a timer to mark mouse as stopped after 300ms of no movement
      moveTimer = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    // Add event listener for mouse movement only if desktop
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
      clearTimeout(moveTimer);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Don't render anything if not a desktop device
  if (!isDesktop) return null;

  // Calculate the dimensions
  const circleSizePx = isMoving ? 96 : 64; // Approximate pixel equivalent

  return (
    <div className="pointer-events-none fixed inset-0 z-300" aria-hidden="true">
      {/* Container div to position both elements together */}
      <div
        style={{
          position: "absolute",
          left: mousePosition.x - circleSizePx / 2,
          top: mousePosition.y - circleSizePx / 2,
          width: circleSizePx,
          height: circleSizePx,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Circle around mouse cursor */}
        <div
          className={`absolute rounded-full border-2 border-[#129137] transition-all duration-150 ease-out ${
            isMoving ? "h-24 w-24 opacity-50" : "h-16 w-16 opacity-20"
          }`}
        />

        {/* Small dot centered in the circle */}
        <div className="absolute h-2 w-2 rounded-full bg-[#129137] opacity-50" />
      </div>
    </div>
  );
};

export default MouseAnimation;
