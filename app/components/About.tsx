import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-background_color text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 md:flex md:flex-col md:items-center ">
        {/* About Section */}
        <div className="relative border-2 border-secondary rounded-lg p-6 flex flex-col md:flex-row  items-center gap-8 md:justify-center lg:w-3/4">
          {/* Image Container */}
          <div className="rounded-lg bg-background_color p-2 w-3/4  md:w-1/3">
            <Image
              src="/images/myimg.png"
              alt="Profile Image"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* About Text */}
          <div className="text-center md:text-left  flex flex-col lg:w-2/5  ">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 mb-6">
              I’m a full-stack web and game developer passionate about creating
              interactive experiences and scalable solutions. With expertise in
              modern frameworks like React, Next.js, and Unity, I focus on
              delivering high-quality projects tailored to client needs.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {/* GitHub and Twitter Icons */}
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary_hover hover:text-secondary p-2 rounded-full"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary_hover hover:text-secondary p-2 rounded-full"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Experience Card */}
          <div className="bg-background_color p-6 rounded-lg border-2 border-primary shadow-lg">
            <h3 className="text-lg font-bold mb-2">Experience</h3>
            <p className="text-gray-400">
              Over 3 years of experience in web and game development, including
              expertise in 3D modeling and rendering.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-background_color p-6 rounded-lg border-2 border-primary shadow-lg">
            <h3 className="text-lg font-bold mb-2">Skills</h3>
            <p className="text-gray-400">
              JavaScript, TypeScript, React, Next.js, Unity, Tailwind CSS, C#,
              PostgreSQL, and more.
            </p>
          </div>

          {/* Hobbies Card */}
          <div className="bg-background_color p-6 rounded-lg border-2 border-primary shadow-lg">
            <h3 className="text-lg font-bold mb-2">Hobbies</h3>
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
