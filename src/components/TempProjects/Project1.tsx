// components/Project1.tsx
import React from "react";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Project1 = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project1;
