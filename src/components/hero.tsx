"use client";

import React from "react";
import BreathingText from "@/fancy/components/text/breathing-text";
import Typewriter from "@/fancy/components/text/typewriter";
import Socials from "./socials";

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-mono mb-2 md:mb-4 text-theme uppercase tracking-widest">
          <Typewriter
            className="tracking-widest"
            text="i am dave ejezie"
            speed={100}
            initialDelay={500}
            waitTime={2000}
            deleteSpeed={30}
            loop={true}
            showCursor={true}
            hideCursorOnType={false}
            cursorChar="_"
          />
        </h1>

        <h2 className="mb-4 md:mb-6 text-highlight text-lg sm:text-lg md:text-xl">
          <BreathingText
            label="full-stack software developer"
            staggerDuration={0.5}
            fromFontVariationSettings="'wght' 100, 'slnt' 0"
            toFontVariationSettings="'wght' 800, 'slnt' -10"
            className="capitalize"
          />
        </h2>

        <article className="mt-4 md:mt-8">
          <p className="text-sm sm:text-base md:text-sm text-theme max-w-md sm:max-w-lg md:max-w-2xl mx-auto md:mx-0 leading-6 sm:leading-7 md:leading-8">
            As a London-based web developer
            , I combine my
            <span className="font-semibold text-highlight">
              {" "}
              passion for business
            </span>{" "}
            with
            <span className="font-semibold"> technical expertise</span> to
            create
            <span className="font-semibold text-highlight">
              {" "}
              innovative digital solutions
            </span>{" "}
            that help businesses thrive. I specialize in crafting and
            occasionally designing
            <span className="font-semibold text-highlight">
              {" "}
              exceptional digital experiences
            </span>{" "}
            using
            <span className="font-semibold">
              {" "}
              cutting-edge technologies
            </span>{" "}
            and industry best practices.
          </p>
        </article>

        <div className="mt-8 md:mt-12">
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Hero;
