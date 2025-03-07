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
  link: string;
}

// Define fadeInAnimation outside the component to avoid scoping issues
const fadeInAnimation = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
`;

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
  // Now operates on the combined text of all details with line breaks
  const truncateText = (
    details: string[],
    projectId: number,
    maxLength = 150
  ) => {
    // If expanded, show all details with line breaks between them
    if (expandedDescriptions.includes(projectId)) {
      return (
        <>
          {details.map((detail, index) => (
            <React.Fragment key={`detail-fragment-${index}`}>
              {index > 0 && <><br /><br /></>}
              {detail}
            </React.Fragment>
          ))}
          <span
            className="text-highlight ml-1 cursor-pointer hover:underline"
            onClick={(e) => {
              e.preventDefault();
              toggleDescription(projectId);
            }}
          >
            read less
          </span>
        </>
      );
    }

    // Join all details into a single string for truncation
    const combinedText = details.join(" ");

    // If combined text is shorter than max length, show it all
    if (combinedText.length <= maxLength) {
      return combinedText;
    }

    // Otherwise truncate and add "read more" button
    return (
      <>
        {combinedText.substring(0, maxLength)}...
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
    <main className="px-4 xs:px-5 sm:px-6 md:px-20 lg:px-20 xl:px-50 2xl:px-100 mt-24 sm:mt-28 md:mt-32">
      <h1 className="capitalize text-theme text-3xl xs:text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10 opacity-50">
        Featured Projects.
      </h1>

      {/* Map through the data and generate a section for each project */}
      {DATA.map((project: ProjectData, index: number) => (
        <div
          key={project.id}
          className={`mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-500 ease-in-out transform rounded-lg p-2 xs:p-3 sm:p-4 animate-fadeIn max-w-full`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Project layout - grid with number on left, content on right */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Project number on the left */}
            <div className="sm:col-span-1 flex sm:justify-end items-start ">
              <div className="text-theme text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold sm:font-extrabold opacity-50">
                {String(project.id).padStart(2, "0")}
              </div>
            </div>

            {/* Project content on the right - vertically stacked image and details */}
            <div className="sm:col-span-3">
              {/* Image container - full width */}
              <div className="relative w-full h-[200px] xs:h-[160px] sm:h-[280px] md:h-[260px] lg:h-[380px] xl:h-[450px] mb-4 xs:mb-5 sm:mb-6">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover rounded w-full"
                  priority
                />
              </div>

              {/* Project details */}
              <div className="w-full">
                <h3 className="mb-2 xs:mb-3 text-highlight text-lg xs:text-xl sm:text-2xl font-semibold capitalize">
                  {project.title}
                </h3>

                {/* Single paragraph with all details combined and truncated */}
                <p className="text-theme mb-3 xs:mb-4 text-xs xs:text-sm xl:text-sm sm:text-base opacity-75">
                  {truncateText(project.details, project.id, 300)}
                </p>

                {/* Tech stack buttons */}
                <div className="flex flex-wrap gap-1 xs:gap-2 mb-3 xs:mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={`${project.id}-tool-${i}`}
                      className="inline-block px-3 xs:px-2 py-1 rounded-full text-highlight text-[10px] xs:text-xs font-mono capitalize opacity-75 border border-[#129137]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  href={`${project.link}`}
                  className="inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CenterUnderline
                    label="view project"
                    className="inline-block uppercase text-xs tracking-wider"
                  />
                  <span className="text-highlight">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 xs:w-4 xs:h-4 inline-block ml-1"
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
      ))}

      <div className="mt-28 sm:mt-30 md:mt-32 lg:mt-36 xl:mt-50">
        <Socials />
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10">
        <Footer />
      </div>
    </main>
  );
}

export default Page;
