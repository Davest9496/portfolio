"use client";

import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";
import DATA from "@/assets/project-data/data";
import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/socials";
import CenterUnderline from "@/fancy/components/text/underline-center";

// TypeScript interface for project data
interface ProjectData {
  id: number;
  title: string;
  image: string;
  details: string[];
  tools: string[];
}

function Page() {
  // State to track which project descriptions are expanded
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>(
    []
  );

  // Toggle description expansion
  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  // Function to truncate text and add "read more" if needed
  const truncateText = (text: string, projectId: number, maxLength = 150) => {
    if (text.length <= maxLength || expandedDescriptions.includes(projectId)) {
      return (
        <>
          {text}
          {text.length > maxLength && (
            <span
              className="text-highlight ml-1 cursor-pointer hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toggleDescription(projectId);
              }}
            >
              read less
            </span>
          )}
        </>
      );
    }

    return (
      <>
        {text.substring(0, maxLength)}...
        <span
          className="text-highlight ml-1 cursor-pointer hover:underline"
          onClick={(e) => {
            e.preventDefault();
            toggleDescription(projectId);
          }}
        >
          read more
        </span>
      </>
    );
  };

  // Add the fade-in animation styles when the component mounts
  useEffect(() => {
    // Check if the style element already exists
    if (!document.getElementById("fadeInAnimationStyle")) {
      const styleElement = document.createElement("style");
      styleElement.id = "fadeInAnimationStyle";
      styleElement.innerHTML = fadeInAnimation;
      document.head.appendChild(styleElement);
    }

    return () => {
      // Clean up the style element when the component unmounts
      const styleElement = document.getElementById("fadeInAnimationStyle");
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <main className="px-4 md:px-8 lg:px-16 xl:px-50 md:mt-16 lg:mt-35">
      <h1 className="capitalize text-theme text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 lg:mb-10 opacity-50">
        Featured Projects.
      </h1>

      {/* Map through the data and generate a section for each project */}
      {DATA.map((project: ProjectData, index: number) => (
        <div
          key={project.id}
          className={`mb-10 md:mb-24 lg:mb-20 ${
            index !== DATA.length - 1 ? "" : ""
          } transition-all duration-500 ease-in-out transform hover:scale-[1.05] rounded-lg p-4 animate-fadeIn max-w-full lg:max-h-[45vh]`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Mobile layout (stacked) */}
          <div className="block md:hidden">
            <div className="text-theme text-4xl font-extrabold opacity-50 mb-4">
              {String(project.id).padStart(2, "0")}
            </div>
            <div className="mb-4 relative w-full" style={{ height: "40%" }}>
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                className="object-cover rounded w-full"
                priority
              />
            </div>
            <div>
              <h3 className="mb-3 text-highlight text-xl font-semibold capitalize">
                {project.title}
              </h3>
              <p className="text-theme mb-4">
                {truncateText(project.details[0], project.id)}
              </p>

              {/* Tech stack buttons for mobile */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span
                    key={`${project.id}-mobile-tool-${i}`}
                    className="inline-block px-2 py-1 rounded-full text-highlight text-xs font-mono capitalize opacity-70 border border-[#129137]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Link href={`/projects/${project.id}`} className=" inline-block">
                <CenterUnderline
                  label="view project"
                />
                <span className="text-highlight">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 inline-block ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 3.75h-6a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v5.25H5.25V4.5h5.25a.75.75 0 0 0 0-1.5zM19.25 3.75a.75.75 0 0 0-1.06 0l-7.5 7.5a.75.75 0 0 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Tablet and desktop layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-8">
            <div className="md:col-span-2 text-right text-theme text-4xl lg:text-5xl font-extrabold opacity-50">
              {String(project.id).padStart(2, "0")}
            </div>
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
                <div
                  className="md:col-span-1 relative w-full"
                  style={{ height: "90px" }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover rounded w-full"
                    priority
                  />
                </div>
                <div className="md:col-span-2 mb-6 md:mb-10 lg:mb-20">
                  <h3 className="mb-3 md:mb-5 text-highlight text-sm md:text-md font-semibold capitalize">
                    {project.title}
                  </h3>
                  <p className="text-theme mb-3 md:mb-5 text-sm">
                    {truncateText(project.details[0], project.id, 200)}
                  </p>

                  {/* Tech stack buttons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <span
                        key={`${project.id}-tool-${i}`}
                        className="inline-block px-2 py-1 rounded-full text-highlight text-xs font-mono capitalize opacity-70 border border-[#129137]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block uppercase text-xs tracking-wider"
                  >
                    <CenterUnderline
                      label="view project"
                    />
                    <span className="text-highlight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 inline-block ml-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 3.75h-6a.75.75 0 0 0-.75.75v15a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v5.25H5.25V4.5h5.25a.75.75 0 0 0 0-1.5zM19.25 3.75a.75.75 0 0 0-1.06 0l-7.5 7.5a.75.75 0 0 0 1.06 1.06l7.5-7.5a.75.75 0 0 0 0-1.06z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Socials />
      <Footer />
    </main>
  );
}

// Add custom animation to global styles
const fadeInAnimation = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(-10);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
`;

export default Page;
