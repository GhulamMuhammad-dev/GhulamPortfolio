export default function ProjectsPage() {
    const projects = [
      { id: 1, title: 'Project 1', description: 'A cool project.' },
      { id: 2, title: 'Project 2', description: 'Another cool project.' },
    ];
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border p-4 rounded hover:shadow-lg transition"
            >
              <h2 className="font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <a href={`/projects/${project.id}`} className="text-blue-500">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  