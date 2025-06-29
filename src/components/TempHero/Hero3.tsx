import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  resumeData?: {
    hero?: {
      title?: string;
      subtitle?: string;
    };
    name?: string;
    basics?: {
      headline?: string;
    };
  };
}

const Hero3: React.FC<HeroProps> = ({ title, subtitle, resumeData }) => {
  const finalTitle =
    resumeData?.hero?.title ||
    (resumeData?.name ? `Hey, I'm ${resumeData?.name}` : null) ||
    title ||
    "Hey, I'm Your Name";

  const finalSubtitle =
    resumeData?.hero?.subtitle ||
    resumeData?.basics?.headline ||
    subtitle ||
    "A developer who loves clean UI and modern web experiences.";

  return (
    <section className="w-full py-20 px-6 bg-black text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{finalTitle}</h1>
        <p className="text-lg text-muted-foreground mb-6">{finalSubtitle}</p>
      </motion.div>
    </section>
  );
};

export default Hero3;
