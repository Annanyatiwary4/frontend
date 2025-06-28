import React from "react";
import { motion } from "framer-motion";

type ExperienceType = {
  title?: string;
  position?: string;
  company?: string;
  duration?: string;
  description?: string;
  icon?: React.ReactNode;
};

type Props = {
  experiences: ExperienceType[];
  resumeData?: any;
};

const Experience1: React.FC<Props> = ({ experiences, resumeData }) => {
  const finalExperiences = resumeData?.experience || experiences;

  return (
    <motion.section
      className="py-20 px-6 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        {finalExperiences.map((exp, idx) => (
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
              <h3 className="text-2xl font-semibold">{exp.position || exp.title}</h3>
              <p className="text-muted-foreground">
                <strong>{exp.company}</strong>
                {exp.duration && <> • {exp.duration}</>}
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
