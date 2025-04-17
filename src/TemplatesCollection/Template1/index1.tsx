import React from 'react'
import Navbar1 from '@/components/TempNavbar/Navbar1'
import Hero1 from '@/components/TempHero/Hero1'
import Experience1 from '@/components/TempExperience/Experience1'
import Project1 from '@/components/TempProjects/Project1'
import Contact1 from '@/components/TempContact/Contact1'
import About1 from '@/components/TempAbout/About1'
import Footer1 from '@/components/TempFooter/Footer1'

// ...import other components later

export default function TemplateStone() {
  return (
    <>
      <Navbar1 />
      <Hero1 />
      <Experience1 />
      <Project1 />
      <About1 />
      <Contact1 />
      <Footer1 />
      {/* Add more: <StoneHero />, <StoneSlider />, etc */}
    </>
  )
}
