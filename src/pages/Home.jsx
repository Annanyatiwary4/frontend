import React from "react";
import  HeroSection from "../components/Hero/Hero";
import TemplateCards from "@/components/TemplateCard/TemplateCard";

export default function Home() {
     
  return (
    <> 
    <div className="flex flex-col gap-20 min-h-screen bg-black">
     <HeroSection /> 
     <TemplateCards />
    </div>
      </>
  );
}
