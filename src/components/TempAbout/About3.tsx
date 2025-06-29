"use client";

import React from "react";
import { motion } from "framer-motion";

interface About3Props {
  heading?: string;
  paragraphs?: string[];
  buttonText?: string;
  resumeData?: {
    about?: {
      heading?: string;
      paragraphs?: string[];
      buttonText?: string;
    };
    summary?: string;
  };
}

const About3: React.FC<About3Props> = ({
  heading,
  paragraphs,
  buttonText,
  resumeData,
}) => {
  const finalHeading = resumeData?.about?.heading || heading || "About Me";

  const finalParagraphs =
    resumeData?.about?.paragraphs ||
    (resumeData?.summary ? [resumeData.summary] : paragraphs || []);

  const finalButtonText = resumeData?.about?.buttonText || buttonText;

  if (!finalParagraphs.length) return null;

  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{finalHeading}</h2>
        {finalParagraphs.map((para, idx) => (
          <p key={idx} className="text-muted-foreground mb-6">
            {para}
          </p>
        ))}
        {finalButtonText && (
          <button className="bg-black hover:bg-gray-400 text-white px-6 py-2 rounded-lg">
            {finalButtonText}
          </button>
        )}
      </div>
    </motion.section>
  );
};

export default About3;
