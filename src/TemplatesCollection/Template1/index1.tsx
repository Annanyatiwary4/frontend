import React from "react";

import Navbar2 from "@/components/TempNavbar/Navbar2";
import Hero2 from "@/components/TempHero/Hero2";
import About2 from "@/components/TempAbout/About2";
import Projects2 from "@/components/TempProjects/Project2";
import Contact2 from "@/components/TempContact/Contact2";
import Footer2 from "@/components/TempFooter/Footer2";

export default function Templateminimal({
  config,
  resumeData,
}: {
  config: any;
  resumeData: any;
}) {
  return (
    <>
      <Navbar2 {...config.navbar} resumeData={resumeData} />
      <Hero2 {...config.hero} resumeData={resumeData} />
      <About2 {...config.about} resumeData={resumeData} />
      <Projects2 projects={config.project} resumeData={resumeData} />
      <Contact2 {...config.contact} resumeData={resumeData} />
      <Footer2 {...config.footer} resumeData={resumeData} />
    </>
  );
}
