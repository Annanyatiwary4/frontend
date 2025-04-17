import React from "react";

export default function Hero2() {
    return (
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white py-20 px-8 rounded-2xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Hi, I'm <span className="text-blue-400">Annanya</span> 👩‍💻
          </h1>
          <p className="text-lg text-gray-300">
            A passionate developer crafting digital experiences that matter.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
              View Work
            </button>
            <button className="border border-blue-500 hover:bg-blue-800 text-blue-300 px-6 py-2 rounded-lg">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    );
  }
  