import React from "react";
import Link from "next/link";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer className="py-4 mt-50">
      <div className="mx-auto max-w-7xl opacity-50">


          {/* About My Work Section */}
          <div className="">
            <div>
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
            <p className="text-theme text-xs mt-6 max-w-lg">
               
  Conceptualized in Figma and developed in Visual Studio Code by. . . you guessed right, <span className="text-highlight">Dave Ejezie</span>  Crafted with Next.js and Tailwind CSS, and deployed via Vercel.
            </p>
            <Copyright />
          </div>
        </div>
    </footer>
  );
};

export default Footer;
