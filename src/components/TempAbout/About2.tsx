import React from "react";

interface AboutProps {
  heading?: string;
  paragraphs?: string[];
  resumeData?: {
    about?: {
      heading?: string;
      content?: string[];
    };
  };
}

const About2: React.FC<AboutProps> = ({ heading, paragraphs, resumeData }) => {
  const finalHeading =
    resumeData?.about?.heading || heading || "About Me";

  const finalParagraphs =
    resumeData?.about?.content || paragraphs || [
      "This is the about section. Upload your resume to populate it automatically.",
    ];

  return (
    <section className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">{finalHeading}</h2>
        {finalParagraphs.map((para, idx) => (
          <p key={idx} className="text-lg text-gray-300">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About2;
