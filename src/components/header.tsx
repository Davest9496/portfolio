"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";
import CenterUnderline from "@/fancy/components/text/underline-center";
import { usePathname } from "next/navigation";

const Header = () => {
  // State to manage mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Get current pathname to determine active link
  const pathname = usePathname();

  // Debug the current path
  console.log("Current pathname:", pathname);

  // Toggle mobile menu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed z-50 top-0 py-4 border-b border-theme/10 bg-theme w-full">
      <div className="px-4 sm:px-8 md:px-16 lg:px-12 xl:px-14 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo/Name Section */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl flex items-center opacity-75">
              <Image src="/logo.svg" alt="Logo" width={28} height={28} />
            </Link>
          </div>

          {/* Burger Menu Button (visible on mobile only) */}
          <div className="md:hidden max-w-full flex items-center">
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
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="inline-block">
                      <CenterUnderline
                        label={link.label}
                        className={`text-theme hover:opacity-70 transition-opacity ${
                          pathname === link.path ? "!text-[#129137]" : ""
                        }`}
                        underlineHeightRatio={0.08}
                        underlinePaddingRatio={0.15}
                      />
                    </Link>
                  </li>
                ))}
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
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2"
                  >
                    <CenterUnderline
                      label={link.label}
                      className={`text-theme hover:opacity-70 transition-opacity ${
                        pathname === link.path ? "!text-[#129137]" : ""
                      }`}
                      underlineHeightRatio={0.08}
                      underlinePaddingRatio={0.15}
                    />
                  </Link>
                </li>
              ))}
              <li className="border border-theme/75 rounded p-3 hover:bg-theme/10 transition duration-200 font-mono capitalize w-full text-center">
                <Link
                  href="https://www.upwork.com/fl/~011faa355a098da0c6?mp_source=share"
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
