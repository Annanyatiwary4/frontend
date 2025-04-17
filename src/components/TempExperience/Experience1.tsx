// components/Experience.tsx
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "XYZ Technologies",
      duration: "June 2020 - Present",
      description:
        "Responsible for developing and maintaining web applications with a focus on front-end technologies.",
      icon: "🏢", // You can replace this with an icon component if you prefer
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "ABC Corp",
      duration: "March 2018 - May 2020",
      description:
        "Developed responsive web pages and worked on user interface components using React and JavaScript.",
      icon: "💻", // You can replace this with an icon component if you prefer
    },
    {
      id: 3,
      title: "Mobile App Developer",
      company: "Mobile Solutions",
      duration: "January 2016 - February 2018",
      description: "Designed and developed mobile applications for Android and iOS platforms.",
      icon: "📱", // You can replace this with an icon component if you prefer
    },
  ];

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

        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="flex flex-col md:flex-row items-start gap-8 bg-background p-6 rounded-xl shadow-md mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">{exp.icon}</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">{exp.title}</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Company Name:</strong> {exp.company}
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Duration:</strong> {exp.duration}
              </p>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
