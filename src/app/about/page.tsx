import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Socials from "@/components/socials";
import CenterUnderline from "@/fancy/components/text/underline-center";

function Page() {
  return (
    <main className="px-4 xs:px-5 sm:px-6 md:px-25 lg:px-20 xl:px-50 2xl:px-100 mt-24 sm:mt-28 md:mt-32">
      <h1 className="capitalize text-theme text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10 opacity-50">
        about me.
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <div>
            <Image
              src="/dee-500x700.webp"
              alt="Profile Image"
              width={500}
              height={700}
              className="rounded-[10px] mb-6 sm:mb-8 md:mb-10 opacity-70 w-full h-auto"
            />
            <h3 className="uppercase tracking-wider text-highlight text-xs mb-2 sm:mb-3 md:mb-4 animate-bounce opacity-70">
              connect with me on socials
            </h3>
            <Socials />
          </div>
        </div>
        <div className="lg:col-span-3 mt-6 lg:mt-0">
          <article className="opacity-55 mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs xs:text-sm sm:text-base text-theme max-w-full sm:max-w-xl leading-relaxed sm:leading-loose">
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

          <article className="mb-10 sm:mb-12 md:mb-16">
            <p className="text-xs xs:text-sm sm:text-base text-theme max-w-full sm:max-w-xl leading-relaxed sm:leading-loose">
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

          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <CenterUnderline
              label="Certifications"
              className="uppercase text-theme text-xs sm:text-sm tracking-wider sm:tracking-widest opacity-55 font-medium"
            />
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
