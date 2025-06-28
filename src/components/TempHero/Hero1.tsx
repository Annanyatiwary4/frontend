// components/Hero1.tsx
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  resumeData?:any;
}

const Hero1 = ({ title, subtitle, ctaPrimary, ctaSecondary ,resumeData}: HeroProps) => {
  const finalTitle = `Hey, I am ${resumeData?.name}` || title;
  const finalSubtitle = resumeData?.basics?.headline || subtitle;
  return (
    <section className="relative bg-black text-white py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">{finalTitle}</h1>
      <p className="text-xl md:text-2xl mb-8">{finalSubtitle}</p>
      <div className="flex justify-center gap-4">
        <Button variant="primary" className="px-8 py-3" size={undefined}>{ctaPrimary}</Button>
        <Button variant="ghost" className="px-8 py-3" size={undefined}>{ctaSecondary}</Button>
      </div>
    </section>
  );
};

export default Hero1;
