import React from "react";
import Link from "next/link";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="px-4 sm:px-8 md:px-16 lg:px-12 xl:px-14 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Social links and Featured Projects */}
          <div className="md:col-span-1"></div>

          {/* Right - About My Work Section */}
          <div className="md:col-span-1 md:w-3/4 opacity-50">
            <div>
              <h3 className="uppercase font-normal text-xs tracking-wider mb-6">
                Connect on Social Media
              </h3>
              <div className="flex gap-6 mb-6">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/dave-ejezie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-[#B88AF1] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="https://twitter.com/dave_ejezie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-[#B88AF1] transition-colors"
                  aria-label="Twitter Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dave_ejezie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-[#B88AF1] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                {/* Upwork */}
                <a
                  href="https://www.upwork.com/freelancers/daveejezie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-[#B88AF1] transition-colors"
                  aria-label="Upwork Profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </a>

                {/* Credly */}
                <a
                  href="https://www.credly.com/users/dave-ejezie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme hover:text-[#B88AF1] transition-colors"
                  aria-label="Credly Profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </a>
              </div>

              {/* Featured Projects */}
              <div className="">
                <h3 className="text-theme uppercase font-normal text-xs tracking-wider mb-4">
                  Featured Projects
                </h3>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link
                      href="/projects/project-1"
                      className="text-theme hover:text-theme transition-colors"
                    >
                      E-commerce Platform
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/project-2"
                      className="text-theme hover:text-theme transition-colors"
                    >
                      SaaS Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/project-3"
                      className="text-theme hover:text-theme transition-colors"
                    >
                      Mobile App
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-theme text-xs mt-6 max-w-3xl">
              I specialize in creating modern, responsive websites and
              applications using Next.js, React, and TypeScript. My portfolio
              showcases a range of projects from e-commerce platforms to custom
              business solutions, all built with performance, accessibility, and
              user experience in mind.
            </p>
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
