import React from 'react'


const projects = [
    {
      title: "Project 1",
      description: "A web application designed to manage tasks efficiently.",
      imageUrl: "https://via.placeholder.com/150",
      link: "/projects/project-1",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform for buying and selling products.",
      imageUrl: "https://via.placeholder.com/150",
      link: "/projects/project-2",
    },
    {
      title: "Project 3",
      description: "A social networking platform to connect like-minded people.",
      imageUrl: "https://via.placeholder.com/150",
      link: "/projects/project-3",
    },
  ];
  
  export default function Project1() {
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
  }
  