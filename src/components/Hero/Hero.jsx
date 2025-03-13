import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Card from "../cards/Cards";

const words = ["Effortlessly.", "Professionally.", "Creatively.", "Uniquely."];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between min-h-screen px-10 bg-black text-white">
      {/* Left Side - Text Content */}
      <div className="w-1/3">
        <h1 className="ml-3  text-8xl font-bold leading-tight">
          Build Your Portfolio{" "}
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500"
          >
            {words[index]}
          </motion.span>
        </h1>
        <p className="ml-6  mt-3 text-2xl text-gray-300">
        Your Dream Portfolio, One Click Away !!
        </p>
        <Button className="ml-6 mt-6 px-6 py-3 text-lg">Get Started</Button>
      </div>

      {/* Right Side - Image/Animation */}
      <div className="flex justify-center">
        <Card />
      </div>
    </div>
  );
}
