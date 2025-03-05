import ContactForm from "@/components/contact-form";
import React from "react";
import Link from "next/link";
import Socials from "@/components/socials";
import Footer from "@/components/footer";

function Page() {
  return (
    <div className="px-50 mt-35">
      <h1 className="capitalize text-theme text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 lg:mb-10 opacity-50">
        contact me!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {/* Left side content */}
          <h3 className="mb-6 font-bold opacity-85">
            Curious about turning that idea into code?
          </h3>
          <p className="w-full md:w-4/5 text-theme text-sm leading-loose mb-20 opacity-55">
            I would love to hear from you! Feel free to leave me a message about
            potential projects, drop a line to schedule a coffee chat{" "}
            <span className="font-bold text-highlight">
              (virtual or in-person in London)
            </span>{" "}, or visit my{" "}
            <Link href="" className="text-highlight font-bold capitalize mr-1">
              upwork profile
            </Link>
            if you have freelance opportunities. I am always open to discussing
            how my development skills can help bring your ideas to life.
          </p>
          <Socials/>
        </div>
        <div>
          {/* Right side content */}
          <ContactForm />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Page;
