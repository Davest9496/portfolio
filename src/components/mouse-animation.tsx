// src/components/MouseAnimation.tsx
"use client"; // This ensures the component only runs on the client side

import React, { useState, useEffect } from "react";

const MouseAnimation: React.FC = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // State to track if the mouse is moving (for optional effects)
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    // Timer to track when mouse stops moving
    let moveTimer: NodeJS.Timeout;

    // Function to update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Set moving state to true
      setIsMoving(true);

      // Clear any existing timers
      clearTimeout(moveTimer);

      // Set a timer to mark mouse as stopped after 100ms of no movement
      moveTimer = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(moveTimer);
    };
  }, []); // Empty dependency array means this effect runs once on mount

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
