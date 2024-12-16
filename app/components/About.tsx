export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            About Me
          </h2>
          <p className="mt-4 text-gray-600 text-center">
            I’m a full-stack web and game developer passionate about creating
            interactive experiences and scalable solutions. With expertise in
            modern frameworks like React, Next.js, and Unity, I focus on
            delivering high-quality projects tailored to client needs.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow p-6 rounded">
              <h3 className="font-bold text-lg text-gray-800">Experience</h3>
              <p className="mt-2 text-gray-600">
                Over 3 years of experience in web and game development, including
                expertise in 3D modeling and rendering.
              </p>
            </div>
            <div className="bg-white shadow p-6 rounded">
              <h3 className="font-bold text-lg text-gray-800">Skills</h3>
              <p className="mt-2 text-gray-600">
                JavaScript, TypeScript, React, Next.js, Unity, Tailwind CSS, C#,
                PostgreSQL, and more.
              </p>
            </div>
            <div className="bg-white shadow p-6 rounded">
              <h3 className="font-bold text-lg text-gray-800">Hobbies</h3>
              <p className="mt-2 text-gray-600">
                When I’m not coding, I enjoy designing games, creating 3D models,
                and experimenting with new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  