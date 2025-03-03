import React from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 py-4 border-b border-[#1DCC4F]/10 bg-theme shadow-md shadow-[#1DCC4F]/15 w-full min-w-full">
      <div className="px-4 sm:px-8 md:px-16 lg:px-12 xl:px-14 mx-auto max-w-7x">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo/Name Section */}
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-2xl flex items-center opacity-55">
              <Image src="/logo.svg" alt="Logo" width={28} height={28} />
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
                <li className="border border-[#1DCC4F]/55 rounded p-3 hover:scale-105 transition duration-200 shadow-lg font-mono capitalize">
                  <Link
                    href="https://www.upwork.com/your-profile-link"
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
