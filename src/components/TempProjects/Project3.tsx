// components/Projects.tsx
import React from "react";
import { motion } from "framer-motion";

const Project3 = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt.",
      image: "./assets/jpeg/project-mockup-example.jpeg",
      link: "#", // Add your project link here
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      image: "./assets/jpeg/project-mockup-example2.jpeg",
      link: "#", // Add your project link here
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image: "./assets/jpeg/project-mockup-example3.jpeg",
      link: "#", // Add your project link here
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-muted text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-8 bg-background p-6 rounded-xl shadow-md mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <a href={project.link}>
                <button className="bg-black hover:bg-gray-500 text-white px-6 py-2 rounded-lg">
                  View Project
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};


export default Project3;
