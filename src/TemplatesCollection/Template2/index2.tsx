
import React from "react";

import Navbar2 from "@/components/TempNavbar/Navbar2";
import Hero2 from "@/components/TempHero/Hero2";
import Projects2 from "@/components/TempProjects/Project2";
import Contact2 from "@/components/TempContact/Contact2";
import Footer2 from "@/components/TempFooter/Footer2";

export default function Templateminimal({ config }: { config: any }) {
  return (
    <>
      <Navbar2 {...config.navbar} />
      <Hero2 {...config.hero} />
      <Projects2 projects={config.project} />
      <Contact2 {...config.contact} />
      <Footer2 {...config.footer} />
    </>
  );
}
