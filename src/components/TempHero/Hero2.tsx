// components/Hero2.tsx
import React from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const Hero2 = ({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white py-20 px-8 rounded-2xl shadow-xl">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-gray-300">{subtitle}</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">{ctaPrimary}</button>
          <button className="border border-blue-500 hover:bg-blue-800 text-blue-300 px-6 py-2 rounded-lg">{ctaSecondary}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
