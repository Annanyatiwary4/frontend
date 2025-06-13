import React from "react";
import  HeroSection from "../components/Hero/Hero";

import Guide from "./Guide";
import Footer from "@/components/footer/footer";
import FeaturesSection from "./Features";
import { Templates } from "./Templates";

export default function Home() {
     
  return (
    <>  
    <div className="flex flex-col gap-10 min-h-screen bg-black">
     <HeroSection /> 
     <Templates />
     <FeaturesSection />
     <Guide />

     <Footer />
    </div>
      </>
  );
}
