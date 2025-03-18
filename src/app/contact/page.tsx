import ContactForm from "@/components/contact-form";
import React from "react";
import Link from "next/link";
import Socials from "@/components/socials";
import Footer from "@/components/footer";

function Page() {
  return (
    <div className="px-4 xs:px-5 sm:px-6 md:px-25 lg:px-20 xl:px-50 2xl:px-100 mt-24 sm:mt-28 md:mt-32">
      <h1 className="capitalize text-theme text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10 opacity-90">
        contact me!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div className="w-full md:w-4/5 ">
          {/* Left side content */}
          <h3 className="mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl font-extrabold opacity-95">
            Curious about turning that idea into code?
          </h3>
          <p className="text-theme text-sm xs:text-sm sm:text-base xl:text-sm leading-relaxed sm:leading-loose mb-8 sm:mb-10 md:mb-16 lg:mb-20 opacity-95 font-medium">
            I would love to hear from you! Feel free to leave me a message about
            potential projects, drop a line to schedule a coffee chat{" "}
            <span className="font-extrabold text-highlight">
              (virtual or in-person in London)
            </span>{" "}
            or visit my{" "}
            <Link
              href="https://www.upwork.com/fl/~011faa355a098da0c6?mp_source=share"
              className="text-highlight font-extrabold capitalize mr-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              upwork profile
            </Link>
            if you have freelance opportunities. I am always open to discussing
            how my development skills can help bring your ideas to life.
          </p>
          <Socials />
        </div>
        <div>
          {/* Right side content */}
          <ContactForm />
          <div className="mt-8 sm:mt-10 md:mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
