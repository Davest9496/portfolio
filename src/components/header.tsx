"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  // State to manage mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed z-50 top-0 py-4 border-b border-theme/10 bg-theme w-full min-w-full">
      <div className="px-4 sm:px-8 md:px-16 lg:px-12 xl:px-14 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo/Name Section */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl flex items-center opacity-75">
              <Image src="/logo.svg" alt="Logo" width={28} height={28} />
            </Link>
          </div>

          {/* Burger Menu Button (visible on mobile only) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-theme p-2"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                /* X Icon for close */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Burger Icon for open */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Theme Toggle visible on mobile next to burger */}
            <ThemeToggle />
          </div>

          {/* Desktop Navigation Menu and Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
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
                <li className="border border-theme/75 rounded p-3 hover:scale-105 transition duration-200 shadow-lg font-mono capitalize">
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

            {/* Theme Toggle visible on desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slides in when active */}
        <div
          className={`
            fixed inset-0 top-[72px] bg-theme z-40 transform transition-transform duration-300 ease-in-out 
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            md:hidden
          `}
        >
          <nav className="p-4">
            <ul className="flex flex-col space-y-6 uppercase font-light text-sm tracking-wider">
              <li>
                <Link
                  href="/"
                  className="text-theme hover:opacity-70 transition-opacity block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-theme hover:opacity-70 transition-opacity block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-theme hover:opacity-70 transition-opacity block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-theme hover:opacity-70 transition-opacity block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="border border-theme/75 rounded p-3 hover:bg-theme/10 transition duration-200 font-mono capitalize w-full text-center">
                <Link
                  href="https://www.upwork.com/your-profile-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Upwork Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
