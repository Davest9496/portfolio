"use client";

import React from "react";
import Link from "next/link";
import Typewriter from "@/fancy/components/text/typewriter";
import Socials from "./socials";
import CenterUnderline from "@/fancy/components/text/underline-center";

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-12"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-left mt-6 sm:mt-8 md:mt-10">
        {/* Left-aligned header with reduced font size and weight for smaller screens */}
        <h1
          className="text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono mb-2 
                       font-bold xs:font-bold sm:font-extrabold md:font-extrabold text-theme 
                       uppercase tracking-wider xs:tracking-wider sm:tracking-widest opacity-55
                       whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <Typewriter
            className="tracking-wider sm:tracking-widest"
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

        {/* Job title with underline - no wrapping */}
        <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 whitespace-nowrap overflow-hidden">
          <CenterUnderline
            label="full-stack web developer"
            className="text-md xs:text-base sm:text-lg md:text-xl capitalize opacity-35 
                       font-semibold xs:font-semibold sm:font-bold tracking-wide xs:tracking-wide sm:tracking-wider
                       inline-block"
          />
        </div>

        {/* About me paragraph - left aligned for all screen sizes */}
        <article className="mt-3 sm:mt-4 md:mt-5">
          <p
            className="text-sm xs:text-sm sm:text-sm md:text-sm lg:text-base text-theme 
                       max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl 
                       leading-relaxed xs:leading-relaxed sm:leading-7 md:leading-7 lg:leading-8 opacity-75"
          >
            As a London-based web developer, I combine my
            <span className="font-bold text-highlight opacity-95">
              {" "}
              passion for business
            </span>{" "}
            with
            <span className="font-bold text-highlight opacity-95">
              {" "}
              high-value
            </span>{" "}
            technical expertise to create
            <span className="font-bold text-highlight opacity-95">
              {" "}
              innovative
            </span>{" "}
            digital solutions that help businesses thrive. I specialize in
            crafting and (occasionally designing)
            <span className="font-bold text-highlight opacity-95">
              {" "}
              exceptional
            </span>{" "}
            digital experiences using cutting-edge technologies and industry
            best practices.
          </p>
        </article>

        {/* Read more link - left aligned */}
        <h3 className="uppercase tracking-wide mt-4 sm:mt-5 md:mt-6 text-xs xs:text-xs sm:text-sm font-medium opacity-95">
          <Link
            href="/about"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>read more about me</span>
            <span className="text-highlight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block animate-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                />
              </svg>
            </span>
          </Link>
        </h3>

        {/* Social links with responsive spacing */}
        <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-12">
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Hero;
