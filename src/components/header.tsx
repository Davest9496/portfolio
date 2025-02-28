import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="py-4 border-b border-[#B88AF1]/10 bg-theme shadow-md shadow-[#B88AF1]/15">
      {/* Apply consistent padding using a wrapper div */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-12 xl:px-14 mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo/Name Section */}
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-2xl flex items-center">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            </Link>
          </div>

          {/* Navigation Menu and Theme Toggle */}
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 uppercase font-light text-xs tracking-wider">
                <li>
                  <Link
                    href="/"
                    className="text-theme hover:opacity-70 transition-opacity"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-theme hover:opacity-70 transition-opacity"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-theme hover:opacity-70 transition-opacity"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-theme hover:opacity-70 transition-opacity"
                  >
                    Contact
                  </Link>
                </li>
                <li className="border border-[#B88AF1] rounded p-3 hover:scale-105 transition duration-200 shadow-lg font-mono capitalize">
                  <Link
                    href="https://www.upwork.com/your-profile-link"
                    className=" text-[#B88AF1]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Upwork Profile
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
