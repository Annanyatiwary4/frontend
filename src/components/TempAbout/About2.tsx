import React from "react";

interface AboutProps {
  heading: string;
  paragraphs: string[];
}

const About2: React.FC<AboutProps> = ({ heading, paragraphs }) => {
  return (
    <section className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">{heading}</h2>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg text-gray-300">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About2;
