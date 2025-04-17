// components/HomeHero.tsx
import React from "react";
import { motion } from "framer-motion";


const Hero3 = () => {
  return (
    <section className="w-full py-20 px-6 bg-black text-foreground">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Hey, My name is John Doe
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        
      </motion.div>
    </section>
  );
};


export default Hero3;
