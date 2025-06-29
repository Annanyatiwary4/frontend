import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  resumeData?: any;
}

const Hero2: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  resumeData,
}) => {
  const finalTitle = resumeData?.name
    ? `Hey, I am ${resumeData.name}`
    : title || "Hi, I'm Your Name 🚀";

  const finalSubtitle =
    resumeData?.basics?.headline ||
    subtitle ||
    "A developer passionate about building impactful web experiences.";

  const finalCtaPrimary =
    "View Projects";

  const finalCtaSecondary =
     "Contact Me";

  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white py-20 px-8 rounded-2xl shadow-xl">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">{finalTitle}</h1>
        <p className="text-lg text-gray-300">{finalSubtitle}</p>
        <div className="flex justify-center gap-4">
          <Button variant="default" className="px-6 py-2" size={undefined}>
            {finalCtaPrimary}
          </Button>
          <Button variant="ghost" className="px-6 py-2" size={undefined}>
            {finalCtaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
