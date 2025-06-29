import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
}

interface Project2Props {
  projects?: Project[];
  resumeData?: {
    project?: {
      heading?: string;
      items?: Project[];
    };
    projects?: Project[]; // to support your parsed resume format
  };
}

const Project2: React.FC<Project2Props> = ({ projects, resumeData }) => {
  const finalProjects =
    resumeData?.project?.items ||
    resumeData?.projects || // support resumeData.projects
    projects || [];

  const heading = resumeData?.project?.heading || "My Projects";

  if (!finalProjects.length) return null;

  return (
    <section id="projects" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {finalProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-6 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:underline mt-4 inline-block"
                target="_blank"
                rel="noopener noreferrer"
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

export default Project2;
