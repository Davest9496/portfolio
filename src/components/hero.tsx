// filepath: /Users/davest/Desktop/portfolio/src/components/hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import ScrambleIn, {
  ScrambleInHandle,
} from "@/fancy/components/text/scramble-in";
import BreathingText from "@/fancy/components/text/breathing-text";

function Hero() {

  const scrambleRef = useRef<ScrambleInHandle | null>(null);

  useEffect(() => {
    setTimeout(() => {
      scrambleRef.current?.start();
    }, 100); // Adjust the delay as needed
  }, []);

  return (
    <div className="flex flex-col absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <h1 className="text-4xl md:text-4xl font-mono mb-1 text-theme uppercase tracking-widest">
        I am{" "}
        <span className="">
          <BreathingText
            label="dave ejezie"
            staggerDuration={0.3}
            fromFontVariationSettings="'wght' 100, 'slnt' 0"
            toFontVariationSettings="'wght' 800, 'slnt' -10"
          />
        </span>
      </h1>

      <h3 className="mb-6 text-highlight">
        <ScrambleIn
          ref={scrambleRef}
          text="full-stack software developer"
          scrambleSpeed={50}
          scrambledLetterCount={1}
          autoStart={false}
          className="mb-6 capitalize text-xl"
        />
      </h3>

      <article>
        <p className="text-sm text-theme max-w-lg leading-7">
          As a London-based web developer, I combine my
          passion for business with technical expertise to create innovative
          digital solutions that help businesses thrive. I specialize in
          crafting and occasionally designing exceptional digital experiences
          using cutting-edge technologies and industry best practices. <br /> <br /> 
        </p>
      </article>
    </div>
  );
}

export default Hero;
