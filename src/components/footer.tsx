import React from "react";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="mx-auto max-w-7xl opacity-50">
        {/* About My Work Section */}
        <div className="">
          <p className="text-theme text-xs pt-20 max-w-lg capitalize border-t-1 border-[#129137]">
            this project was Conceptualized in Figma and developed in Visual
            Studio Code by... you guessed right-{" "}
            <span className="text-highlight">Dave Ejezie.</span> Crafted with
            Next.js and Tailwind CSS, and deployed via Vercel.
          </p>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
