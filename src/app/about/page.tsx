import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Socials from "@/components/socials";
import CenterUnderline from "@/fancy/components/text/underline-center";

function Page() {
  return (
    <main className="px-4 xs:px-5 sm:px-6 md:px-25 lg:px-20 xl:px-50 2xl:px-100 mt-24 sm:mt-28 md:mt-32">
      <h1 className="capitalize text-theme text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold mb-4 sm:mb-6 md:mb-8 lg:mb-10 opacity-50">
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
              connect on my socials
            </h3>
            <Socials />
          </div>
        </div>
        <div className="lg:col-span-3 mt-6 lg:mt-0">
          {/* Personal Bio Section */}
          <article className="opacity-75 mb-8 sm:mb-10 md:mb-12 text-base xl:text-sm">
            <p className="xs:text-sm sm:text-md text-theme max-w-full sm:max-w-xl leading-relaxed sm:leading-loose">
              As a web developer based in London, I am{" "}
              <span className="text-highlight font-medium">passionate</span>{" "}
              about creating
              <span className="text-highlight font-medium">
                {" "}
                innovative digital solutions
              </span>{" "}
              that help businesses thrive. My goal is to merge my enthusiasm for{" "}
              <span className="text-highlight font-medium">business</span> with
              my{" "}
              <span className="text-highlight font-medium">
                technical expertise
              </span>
              to develop digital solutions that drive{" "}
              <span className="text-highlight font-medium">growth</span> and
              enhance
              <span className="text-highlight font-medium">
                {" "}
                efficiency
              </span>. <br /> <br /> I specialize in crafting and occasionally
              designing{" "}
              <span className="text-highlight font-medium">
                exceptional digital experiences
              </span>{" "}
              using the latest technologies and adhering to industry best
              practices. My work is focused on delivering{" "}
              <span className="text-highlight font-medium">high-quality</span>,{" "}
              <span className="text-highlight font-medium">user-friendly</span>,
              and
              <span className="text-highlight font-medium">
                {" "}
                performance-optimized
              </span>{" "}
              solutions that meet the unique needs of each client. Whether it is
              building a robust e-commerce platform, developing a custom web
              application, or enhancing an existing digital presence, I am
              dedicated to providing solutions that propel businesses forward.
              My work focuses on delivering high-quality, user-friendly, and
              performance-optimized solutions tailored to each client&apos;s{" "}
              <span className="text-highlight font-medium">unique needs</span>.
              Whether building robust e-commerce platforms, developing custom
              web applications, or enhancing existing digital presences, I am
              dedicated to providing solutions that drive growth and enhance
              efficiency, ultimately propelling businesses forward.
            </p>
          </article>

          {/* Skills Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <CenterUnderline
              label="Technical Skills"
              className="uppercase text-theme text-sm sm:text-sm md:text-lg tracking-wider sm:tracking-widest opacity-55 font-medium"
            />
            <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 opacity-75">
              {[
                "JavaScript/TypeScript",
                "React & Next.js",
                "Angular",
                "Node.js",
                "Python/Flask",
                "Tailwind CSS",
                "SQL",
                "API Development",
                "CI/CD",
                "AWS Deployment",
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`border border-[#129137]/50 rounded-md p-2 sm:p-3 text-center hover:border-highlight/${
                    index === 0 ? "80" : "30"
                  } transition-colors`}
                >
                  <span className="text-xs sm:text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Philosophy Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <CenterUnderline
              label="Work Philosophy"
              className="uppercase text-theme text-sm sm:text-sm md:text-lg tracking-wider sm:tracking-widest opacity-55 font-medium"
            />
            <div className="mt-4 sm:mt-6 opacity-75">
              <p className="xs:text-sm sm:text-md xl:text-sm text-theme max-w-full sm:max-w-xl leading-relaxed sm:leading-loose">
                I believe in{" "}
                <span className="text-highlight font-medium">
                  clean, maintainable code
                </span>{" "}
                that stands the test of time. My approach centers on
                understanding business needs first, then applying technical
                solutions that provide real value. Every project I undertake
                follows a methodical process of planning, development, testing,
                and refinement to ensure optimal results.
              </p>
            </div>
          </div>

          {/* Interests & Hobbies Section (replacing Certifications) */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <CenterUnderline
              label="Interests & Hobbies"
              className="uppercase text-theme text-sm sm:text-sm md:text-lg tracking-wider sm:tracking-widest opacity-55 font-medium"
            />
            <div className="mt-4 sm:mt-6 opacity-75">
              <p className="xs:text-sm sm:text-md xl:text-sm text-theme max-w-full sm:max-w-xl leading-relaxed sm:leading-loose">
                Beyond coding, I am passionate about{" "}
                <span className="text-highlight font-medium">photography</span>,
                capturing family moments, London&apos;s urban landscapes, and
                memories from my travels around the world. I have a keen
                interest in{" "}
                <span className="text-highlight font-medium">
                  digital marketing
                </span>{" "}
                and regularly take online courses to expand my knowledge in this
                area. When unwinding, I enjoy{" "}
                <span className="text-highlight font-medium">video games</span>{" "}
                and find myself marveling at their interactivity and design.{" "}
                <br />
                These diverse interests help me approach problem-solving from
                unique perspectives, enriching my work as a developer.
              </p>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <CenterUnderline
              label="Professional Journey"
              className="uppercase text-theme text-sm sm:text-sm md:text-lg tracking-wider sm:tracking-widest opacity-55 font-medium"
            />
            <div className="mt-4 sm:mt-6 opacity-75 xl:text-sm">
              <div className="border-l-2 border-[#129137]/50 pl-4">
                <div className="mb-4">
                  <h4 className="text-sm sm:text-base font-extrabold ">
                    Self-Taught Developer Journey
                  </h4>
                  <p className="text-sm sm:text-sm mt-1">
                    My path to web development began with{" "}
                    <span className="text-highlight font-medium">
                      UI/UX design
                    </span>
                    , which sparked my curiosity about implementation. After
                    creating my first mockup with HTML and CSS, I was completely
                    hooked. The turning point came when I completed my{" "}
                    <span className="text-highlight font-medium">
                      Udacity JavaScript Fullstack Nanodegree
                    </span>
                    , which opened my eyes to the endless possibilities of
                    programming and set me on the path to becoming a developer.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm sm:text-base font-extrabold">
                    Freelance Experience
                  </h4>
                  <p className="text-sm sm:text-sm mt-1">
                    Working with diverse clients has sharpened my ability to
                    translate business requirements into technical solutions
                    while maintaining clear communication throughout the
                    development process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28 sm:mt-30 md:mt-32 xl:mt-50">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
