import Link from 'next/link';
import { projects } from '@/data';


export default function Projects() {
  return (
    <section id="projects" className="p-16 bg-background_color">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-secondary shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-black">
                {project.title}
              </h3>
              <p className="text-primary mt-2">{project.description}</p>
              <Link
                href={`/projects/${project.id}`}
                className="text-white mt-4 inline-block hover:underline"
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
