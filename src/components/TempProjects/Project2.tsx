
import React from "react";

export default function Projects2() {
    return (
      <section className="py-20 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl">
              <h3 className="text-2xl font-semibold">Project 1</h3>
              <p className="text-gray-300 mt-2">A description of this awesome project.</p>
              <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">View Project</a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl">
              <h3 className="text-2xl font-semibold">Project 2</h3>
              <p className="text-gray-300 mt-2">Another cool project with great features!</p>
              <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">View Project</a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl">
              <h3 className="text-2xl font-semibold">Project 3</h3>
              <p className="text-gray-300 mt-2">The final project description goes here.</p>
              <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">View Project</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  