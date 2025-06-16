"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
  heading: string;
  paragraphs: string[];
  buttonText?: string;
}

const About3: React.FC<AboutProps> = ({ heading, paragraphs, buttonText }) => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-muted-foreground mb-6">
            {para}
          </p>
        ))}
        {buttonText && (
          <button className="bg-black hover:bg-gray-400 text-white px-6 py-2 rounded-lg">
            {buttonText}
          </button>
        )}
      </div>
    </motion.section>
  );
};

export default About3;
