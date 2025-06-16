// components/templates/TemplateStone.tsx
import React from 'react'
import Navbar1 from '@/components/TempNavbar/Navbar1'
import Hero1 from '@/components/TempHero/Hero1'
import Experience1 from '@/components/TempExperience/Experience1'
import Project1 from '@/components/TempProjects/Project1'
import Contact1 from '@/components/TempContact/Contact1'
import About1 from '@/components/TempAbout/About1'
import Footer1 from '@/components/TempFooter/Footer1'


export default function TemplateSimple({ config }: { config: any }) {
  return (
    <>
      <Navbar1 {...config.navbar} />
      <Hero1 {...config.hero} />
      <About1 {...config.about} />
      <Experience1 experiences={config.experience} />
      <Project1 projects={config.project} />
      <Contact1 {...config.contact} />
      <Footer1 {...config.footer} />
    </>
  )
}
