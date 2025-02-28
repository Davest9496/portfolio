import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full py-4">
      {/* Apply consistent padding using a wrapper div */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-12 xl:px-14 mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo/Name Section */}
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-2xl flex items-center">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav>
            <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 uppercase font-light text-sm tracking-wide">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-gray-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-900 hover:text-gray-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-900 hover:text-gray-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li className="border border-[#1DCC4F] rounded p-3 hover:text-md transition-transform transform hover:scale-110 shadow-lg font-semibold">
                <Link
                  href="https://www.upwork.com/your-profile-link"
                  className="text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
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
