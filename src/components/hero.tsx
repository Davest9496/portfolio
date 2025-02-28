import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import ThemeToggle from "./theme-toggle";

function Hero() {
  return (
    <div className="flex flex-col absolute transform -translate-x-1/2 -translate-y-1/2 top-2/5 left-1/2">
      <h1 className="text-4xl md:text-4xl font-mono mb-6 text-theme uppercase tracking-widest">
        I am <span className="text-highlight">dave ejezie</span>
      </h1>
      <p className="text-sm text-theme max-w-2xl">
        A software developer based in London specializing in building (and
        occasionally designing) exceptional digital experiences with Next.js,
        React, and TypeScript.
        <br /> <br />A software developer based in London specializing in building (and
        occasionally designing) exceptional digital experiences with Next.js,
        React, and TypeScript.
      </p>
    </div>
  );
}

export default Hero;
