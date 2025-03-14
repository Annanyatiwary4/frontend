"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import React from "react";

const guideSteps = [
  {
    id: 1,
    title: "Step 1: Create Your Account",
    description: "Sign up and get access to all features instantly.",
  },
  {
    id: 2,
    title: "Step 2: Choose a Theme",
    description: "Pick from professionally designed themes to start building your portfolio.",
  },
  {
    id: 3,
    title: "Step 3: Customize Your Portfolio",
    description: "Use our drag-and-drop editor to personalize your site effortlessly.",
  },
  {
    id: 4,
    title: "Step 4: Publish & Share",
    description: "Go live and showcase your portfolio to the world with a single click!",
  },
];

const Guide = () => {
  return (
    <div className="w-full min-h-auto bg-black text-white flex flex-col md:flex-row items-center md:items-start justify-center px-6 py-6">
    {/* Left Side - Title */}
    <div className="w-full ml-6 md:w-1/3 flex flex-col items-center md:items-start">
      <p className="text-5xl md:text-7xl lg:text-9xl font-medium text-transparent bg-gradient-to-r from-[#7953cd] via-[#00affa] to-[#764ada] bg-clip-text animate-textShine text-center md:text-left">
        How It Works !!
      </p>
    </div>
 
<style>{`


    @keyframes textShine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-textShine {
          background-size: 300% auto;
          animation: textShine 3s ease-in-out infinite alternate;
        }
      `}</style>
      

      {/* Right Side - Accordion Steps */}
      <div className="w-2/3 flex justify-end">
  <Accordion type="single" collapsible className="max-w-lg w-full space-y-2">
    {guideSteps.map((step) => (
      <AccordionItem key={step.id} value={`step-${step.id}`} className="bg-transparent">
        <AccordionTrigger className="text-lg font-semibold text-white hover:text-blue-400 transition-all">
          {step.title}
        </AccordionTrigger>
        <AccordionContent className="text-gray-300">
          {step.description}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</div>

    </div>
  );
};

export default Guide;
