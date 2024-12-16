import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data for demonstration purposes
const projects = [
  {
    id: '1',
    title: 'E-Commerce Website',
    description:
      'A modern e-commerce website built with React, Next.js, and Tailwind CSS.',
    details: 'This project features a fully functional shopping cart, payment integration, and responsive design.',
  },
  {
    id: '2',
    title: '3D Game Development',
    description:
      'A top-down strategy game built in Unity with custom movement mechanics.',
    details: 'Built with Unity, this game includes custom AI mechanics, pathfinding, and strategic gameplay.',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description:
      'My personal portfolio showcasing my skills and projects, built with Next.js and Tailwind CSS.',
    details: 'This portfolio demonstrates modern design principles and a dynamic project showcase.',
  },
];

interface ProjectProps {
  params: { id: string };
}

export default function ProjectDetail({ params }: ProjectProps) {
  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    notFound(); // Shows the 404 page if the project is not found
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800">{project?.title}</h1>
        <p className="mt-4 text-gray-600">{project?.description}</p>
        <p className="mt-4 text-gray-600">{project?.details}</p>
        <Link href="/#projects">
          <span className="mt-6 inline-block text-blue-500 hover:underline cursor-pointer">
            ← Back to Projects
          </span>
        </Link>
      </div>
    </div>
  );
}
