"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Style Your Story, Instantly!",
    description:
      "Forget design headaches! Dive into our treasure chest of gorgeous, ready-to-rock themes. Tweak colors, fonts, and layouts like a pro. Your unique personality, no design degree required!",
     imgSrc: "src/assets/images/theme.png", // Use public path
      alt: "Theme customization",
        
      
   
  },
  {
    title: "Your Portfolio, Poof! (Like Magic!)",
    description:
      "Pop in your deets, pick a theme you love, and BAM! Your stunning portfolio appears in seconds. Not sorcery—just smart automation.",
   
      
    imgSrc:"src/assets/images/web.png",
    alt : "Auto portfolio generation"
         
  },
  {
    title: "Zip It, Slay It, Own It!",
    description:
      "Transform your live site into clean HTML, CSS, and JS. Perfect for full control, sharing, or hosting anywhere you want.",
    imgSrc: "src/assets/images/ide.png", // Use public path
    alt: "Downloadable zip feature",
   
  },
  {
    title: "What You See Is What You Slay!",
    description:
      "Live preview lets you see every change as you make it. No guesswork, no surprises—just real-time awesomeness!",
    imgSrc: "src/assets/images/preview.png", // Use public path
    alt: "Live preview feature",
  },
];

const FeaturesSection = () => {
  return (
    <div className="relative w-full">
      <StickyScroll content={content} />
    </div>
  );
};

export default FeaturesSection;
