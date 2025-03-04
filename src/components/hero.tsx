"use client";

import React from "react";
import Link from "next/link";
import Typewriter from "@/fancy/components/text/typewriter";
import Socials from "./socials";
import CenterUnderline from "@/fancy/components/text/underline-center";

function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left mt-10">
        <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-mono mb-2 md:mb-2 text-theme uppercase tracking-widest opacity-55">
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

        <CenterUnderline
          label="full-stack web developer"
          className="mb-4 md:mb-6 text-highlight text-lg sm:text-lg md:text-xl capitalize opacity-55 font-bold"
        />

        <article className="mt-4 md:mt-8">
          <p className="text-sm sm:text-base md:text-sm text-theme max-w-md sm:max-w-lg md:max-w-2xl mx-auto md:mx-0 leading-6 sm:leading-7 md:leading-8 opacity-75">
            As a London-based web developer , I combine my
            <span className="font-bold text-highlight opacity-95">
              {" "}
              passion for business
            </span>{" "}
            with
            <span className="font-bold text-highlight opacity-95">
              {" "}
              hight-value
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

        <h3 className="uppercase tracking-wide mt-6 text-xs font-medium opacity-95">
          <Link href="/about">read more about me </Link>{" "}
          <span className="text-highlight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block animate-arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
              />
            </svg>
          </span>
        </h3>

        <div className="mt-8 md:mt-12">
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Hero;
