import React from "react";
import Image from "next/image";
import Footer from "@/components/footer"
import Socials from "@/components/socials";
import CenterUnderline from "@/fancy/components/text/underline-center";

function Page() {
  return (
    <main className="px-50 mt-35">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="">
            <Image
              src="/dee-500x700.webp"
              alt="Profile Image"
              width={500}
              height={700}
              className="rounded-[3px] mb-10 opacity-70"
            />
            <h3 className="uppercase tracking-wider text-highlight text-xs mb-4 animate-bounce">
              connect with me on socials
            </h3>
            <Socials />
          </div>
        </div>
        <div className="lg:col-span-3">
          <article>
            <p className="text-sm text-theme max-w-xl leading-6">
              As a web developer based in London, I am passionate about creating
              innovative digital solutions that help businesses thrive. My goal
              is to merge my enthusiasm for business with my technical expertise
              to develop digital solutions that drive growth and enhance
              efficiency. <br /> <br /> I specialize in crafting and
              occasionally designing exceptional digital experiences using the
              latest technologies and adhering to industry best practices. My
              work is focused on delivering high-quality, user-friendly, and
              performance-optimized solutions that meet the unique needs of each
              client. Whether it is building a robust e-commerce platform,
              developing a custom web application, or enhancing an existing
              digital presence, I am dedicated to providing solutions that
              propel businesses forward. My work focuses on delivering
              high-quality, user-friendly, and performance-optimized solutions
              tailored to each client&apos;s unique needs. Whether building
              robust e-commerce platforms, developing custom web applications,
              or enhancing existing digital presences, I am dedicated to
              providing solutions that drive growth and enhance efficiency,
              ultimately propelling businesses forward.
            </p>
          </article>

          <article>
            <p className="text-sm text-theme max-w-xl leading-6">
              As a web developer based in London, I am passionate about creating
              innovative digital solutions that help businesses thrive. My goal
              is to merge my enthusiasm for business with my technical expertise
              to develop digital solutions that drive growth and enhance
              efficiency. <br /> <br /> I specialize in crafting and
              occasionally designing exceptional digital experiences using the
              latest technologies and adhering to industry best practices. My
              work is focused on delivering high-quality, user-friendly, and
              performance-optimized solutions that meet the unique needs of each
              client. Whether it is building a robust e-commerce platform,
              developing a custom web application, or enhancing an existing
              digital presence, I am dedicated to providing solutions that
              propel businesses forward. My work focuses on delivering
              high-quality, user-friendly, and performance-optimized solutions
              tailored to each client&apos;s unique needs. Whether building
              robust e-commerce platforms, developing custom web applications,
              or enhancing existing digital presences, I am dedicated to
              providing solutions that drive growth and enhance efficiency,
              ultimately propelling businesses forward.
            </p>
          </article>
          <CenterUnderline
            label="Certifications"
            className="uppercase text-theme text-sm tracking-widest mt-20 opacity-55 font-medium"
          />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Page;
