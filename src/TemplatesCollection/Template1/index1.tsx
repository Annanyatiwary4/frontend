import React from "react";


import Hero1 from "@/components/TempHero/Hero1";
import Footer1 from "@/components/TempFooter/Footer1";
import Contact1 from "@/components/TempContact/Contact1";
import Project1 from "@/components/TempProjects/Project1";
import About1 from "@/components/TempAbout/About1";
import Navbar1 from "@/components/TempNavbar/Navbar1";
import Experience1 from "@/components/TempExperience/Experience1";

export default function Templateminimal({
  config,
  resumeData,
}: {
  config: any;
  resumeData: any;
}) {
  return (
    <>
      <Navbar1 {...config.navbar} resumeData={resumeData} />
      <Hero1 {...config.hero} resumeData={resumeData} />
      <About1 {...config.about} resumeData={resumeData} />
      <Experience1 experiences={config.experience} resumeData={resumeData} />
      <Project1 projects={config.project} resumeData={resumeData} />
      <Contact1 {...config.contact} resumeData={resumeData} />
      <Footer1 {...config.footer} resumeData={resumeData} />
    </>
  );
}
