import Link from 'next/link';

const projects = [
  {
    id: '1',
    title: 'E-Commerce Website',
    description: 'A modern e-commerce website built with Next.js.',
  },
  {
    id: '2',
    title: '3D Game Development',
    description: 'A top-down strategy game built in Unity.',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my skills and projects.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
