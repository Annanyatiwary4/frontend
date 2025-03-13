import React from "react";
import  HeroSection from "../components/Hero/Hero";
import TemplateCards from "@/components/TemplateCard/TemplateCard";
import Guide from "./Guide";
import Footer from "@/components/footer/footer";

export default function Home() {
     
  return (
    <>  
    <div className="flex flex-col gap-10 min-h-screen bg-black">
     <HeroSection /> 
     <TemplateCards />
     <Guide />
     <Footer />
    </div>
      </>
  );
}
