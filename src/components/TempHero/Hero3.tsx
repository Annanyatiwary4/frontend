// components/Hero3.tsx
import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero3 = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="w-full py-20 px-6 bg-black text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
      </motion.div>
    </section>
  );
};

export default Hero3;
