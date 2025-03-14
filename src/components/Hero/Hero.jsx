import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Card from "../cards/Cards";
import { Link } from "react-router-dom"; 

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
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 lg:px-20 bg-black text-white ">
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left ">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
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
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Your Dream Portfolio, One Click Away!
        </p>

        {/* Get Started Button */}
        <GetStartedButton />
      </div>

      {/* Right Side - Image/Animation */}
      <div className="w-full  md:w-1/2 lg:w-3/5 flex justify-center mt-10 md:mt-0">
        <Card />
      </div>
    </div>
  );
}

function GetStartedButton() {
  return (
    <Link to="/register" className="hover:text-gray-400 transition"><Button className="mt-6 px-8 py-3 text-lg" >
    Get Started
  </Button></Link>
    
  );
};
