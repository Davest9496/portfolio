import ContactForm from "@/components/contact-form";
import React from "react";

function Page() {
  return (
    <div className="px-12 mt-8">
      <h1 className="capitalize text-theme text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 lg:mb-10 opacity-50">
        contact me!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {/* Left side content */}
          <p>Feel free to reach out to me via email or phone.</p>
        </div>
        <div>
          {/* Right side content */}
         <ContactForm/>
        </div>
      </div>
    </div>
  );
}

export default Page;
