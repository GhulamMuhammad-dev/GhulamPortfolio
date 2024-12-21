"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  //const {contextSafe}=useGSAP();

  const gsapRef = useRef<HTMLDivElement[]>([]);
  gsapRef.current = []; // Clear refs on each render

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !gsapRef.current.includes(el)) {
      gsapRef.current.push(el);
    }
  };

  const gsapAboutRef = useRef<HTMLDivElement[]>([]);
  gsapAboutRef.current = []; // Clear refs on each render

  const addToAboutRefs = (el: HTMLDivElement) => {
    if (el && !gsapAboutRef.current.includes(el)) {
      gsapAboutRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      delay:2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#about",
        toggleActions:"play,pause,none,none",
        markers:false,
        start: "20% top", // Start animation when the top of the section hits the center of the viewport
        end: "bottom 50%", // End animation when the bottom of the section hits the center of the viewport
        scrub: true, // Smooth scroll animation
      },
    });

    gsap.from(gsapAboutRef.current,{
      opacity: 0,
      duration: 2,
      delay:2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#about",
        toggleActions:"play,pause,none,none",
        markers:false,
        start: "top center", // Start animation when the top of the section hits the center of the viewport
        end: "40% 50%", // End animation when the bottom of the section hits the center of the viewport
        scrub: true, // Smooth scroll animation
      },
    })
  });

  return (
    <section id="about" className="py-16 bg-background_color text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 md:flex md:flex-col md:items-center ">
        {/* About Section */}
        <div ref={addToAboutRefs} className=" relative bg-white rounded-lg p-6 flex flex-col md:flex-row items-center gap-8 md:justify-center lg:w-3/4">
          {/* Image Container */}
          <div className="rounded-lg bg-white p-2 w-3/4 md:w-1/3">
            <Image
              src="/images/myimg.png"
              alt="Profile Image"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* About Text */}
          <div className="text-center md:text-left flex flex-col lg:w-2/5">
            <h2 className="text-2xl font-bold mb-4 bg-secondary p-4 rounded-md">
              About Me
            </h2>
            <p className="text-black mb-6">
              I’m a full-stack web and game developer passionate about creating
              interactive experiences and scalable solutions. With expertise in
              modern frameworks like React, Next.js, and Unity, I focus on
              delivering high-quality projects tailored to client needs.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {/* GitHub and LinkedIn Icons */}
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:text-secondary p-2 rounded-full"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:text-secondary p-2 rounded-full"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Experience Card */}
          <div
            ref={addToRefs}
            className="bg-background_color p-6 rounded-lg border-2 border-primary shadow-lg"
          >
            <h3 className="text-lg font-bold mb-2 bg-primary rounded-md p-4">
              Experience
            </h3>
            <p className="text-gray-400">
              Over 3 years of experience in web and game development, including
              expertise in 3D modeling and rendering.
            </p>
          </div>

          {/* Skills Card */}
          <div
            ref={addToRefs}
            className="bg-background_color p-6 rounded-lg border-2 border-primary shadow-lg"
          >
            <h3 className="text-lg font-bold mb-2 bg-primary rounded-md p-4">
              Skills
            </h3>
            <p className="text-gray-400">
              JavaScript, TypeScript, React, Next.js, Unity, Tailwind CSS, C#,
              PostgreSQL, and more.
            </p>
          </div>

          {/* Hobbies Card */}
          <div
            ref={addToRefs}
            className="bg-background_color p-6 rounded-lg border-2 border-primary shadow-lg"
          >
            <h3 className="text-lg font-bold mb-2 bg-primary rounded-md p-4">
              Hobbies
            </h3>
            <p className="text-gray-400">
              When I’m not coding, I enjoy designing games, creating 3D models,
              and experimenting with new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
