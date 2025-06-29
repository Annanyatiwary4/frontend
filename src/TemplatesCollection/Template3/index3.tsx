// components/templates/Template3.tsx
import React from "react";

import Navbar3 from "@/components/TempNavbar/Navbar3";
import Hero3 from "@/components/TempHero/Hero3";
import About3 from "@/components/TempAbout/About3";
import Project3 from "@/components/TempProjects/Project3";
import Experience3 from "@/components/TempExperience/Experience3";
import Contact3 from "@/components/TempContact/Contact3";
import Footer3 from "@/components/TempFooter/Footer3";

export default function Templatemodern({
  config,
  resumeData,
}: {
  config: any;
  resumeData: any;
}) {
  return (
    <>
      <Navbar3 {...config.navbar} resumeData={resumeData} />
      <Hero3 {...config.hero} resumeData={resumeData} />
      <About3 {...config.about} resumeData={resumeData} />
      <Project3 projects={config.project} resumeData={resumeData} />
      <Experience3 experiences={config.experience} resumeData={resumeData} />
      <Contact3 {...config.contact} resumeData={resumeData} />
      <Footer3 {...config.footer} resumeData={resumeData} />
    </>
  );
}
