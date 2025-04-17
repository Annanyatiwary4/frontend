// components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";

const Experience3 = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        {/* Experience 1 */}
        <motion.div
          className="flex flex-col md:flex-row items-start gap-8 bg-background p-6 rounded-xl shadow-md mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">🏢</span> {/* Placeholder icon */}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">Software Engineer</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Company Name:</strong> XYZ Technologies
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Duration:</strong> June 2020 - Present
            </p>
            <p className="text-muted-foreground mb-4">
              Responsible for developing and maintaining web applications with a focus on front-end technologies.
            </p>
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          className="flex flex-col md:flex-row items-start gap-8 bg-background p-6 rounded-xl shadow-md mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">💻</span> {/* Placeholder icon */}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">Frontend Developer</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Company Name:</strong> ABC Corp
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Duration:</strong> March 2018 - May 2020
            </p>
            <p className="text-muted-foreground mb-4">
              Developed responsive web pages and worked on user interface components using React and JavaScript.
            </p>
          </div>
        </motion.div>

        {/* Experience 3 */}
        <motion.div
          className="flex flex-col md:flex-row items-start gap-8 bg-background p-6 rounded-xl shadow-md mb-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">📱</span> {/* Placeholder icon */}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-3">Mobile App Developer</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Company Name:</strong> Mobile Solutions
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Duration:</strong> January 2016 - February 2018
            </p>
            <p className="text-muted-foreground mb-4">
              Designed and developed mobile applications for Android and iOS platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience3;
