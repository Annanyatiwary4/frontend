import React from "react";
import { motion } from "framer-motion";

// ✅ Add this type definition
type ExperienceType = {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon?: React.ReactNode;
};

const Experience1 = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <motion.section
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-start gap-8 bg-background p-6 rounded-xl shadow-md mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-xl">
              {exp.icon || "💼"}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">
                <strong>{exp.company}</strong> • {exp.duration}
              </p>
              <p className="text-muted-foreground mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience1;
