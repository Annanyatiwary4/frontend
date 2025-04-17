"use client";
import React from "react";


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const About3 = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-muted-foreground mb-6">
          Hey! It's <strong>John Doe</strong> and I'm a{" "}
          <strong>Frontend Web Developer</strong> located in Los Angeles.
        </p>
        <button className="bg-black hover:bg-gray-400 text-white px-6 py-2 rounded-lg">
              Contact
            </button>
      </div>
    </motion.section>
  );
};

export default About3;
