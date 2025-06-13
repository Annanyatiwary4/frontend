"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const guideSteps = [
  {
    id: 1,
    title: "Step 1: Create Your Account",
    description: "Sign up and get access to all features instantly.",
    points: [
      "Quick signup with email or social login",
      "Secure account creation",
      "Start building immediately",
    ],
  },
  {
    id: 2,
    title: "Step 2: Choose a Theme",
    description: "Pick from professionally designed themes to start building your portfolio.",
    points: [
      "Dark/light & colorful themes",
      "Professionally tailored styles",
      "Mobile-optimized templates",
    ],
  },
  {
    id: 3,
    title: "Step 3: Customize Your Portfolio",
    description: "Use our drag-and-drop editor to personalize your site effortlessly.",
    points: [
      "Live editor with preview",
      "Add sections like Projects, Blogs, About",
      "Easily reorder or hide content",
    ],
  },
  {
    id: 4,
    title: "Step 4: Publish & Share",
    description: "Go live and showcase your portfolio to the world with a single click!",
    points: [
      "Instant deployment",
      "Custom domain support",
      "Share on LinkedIn or resume",
    ],
  },
];

const Guide = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full min-h-screen  bg-blue-50 text-black flex flex-col items-center justify-center px-6 py-12">
      
      {/* Top - Title Section */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        className="text-5xl md:text-7xl font-medium lg:text-7xl text-transparent bg-blue-600 bg-clip-text animate-textShine text-center mb-12"
      >
        Launch Your Portfolio in few Simple Steps
      </motion.p>

      {/* Bottom - Accordion Steps */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        {guideSteps.map((step, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={step.id}
              onClick={() => toggleItem(index)}
              className={`rounded-md p-6 shadow-lg border cursor-pointer grid grid-cols-[auto_1fr_auto] gap-6 items-center transition-all duration-300 ${
                isActive ? "border-blue-600" : "border-gray-200"
              }`}
            >
              <p className="text-3xl font-semibold text-blue-800">{`0${step.id}`}</p>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
                {step.title}
              </h2>
              <div className="text-blue-600">
                {isActive ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="col-span-2 col-start-2 "
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-slate-700 mb-4 text-base leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="list-disc ml-6 text-slate-600 space-y-2">
                      {step.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Guide;
