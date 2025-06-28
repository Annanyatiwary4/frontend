import React from "react";

interface AboutProps {
  heading: string;
  paragraphs: string[];
  resumeData?:any;
}

const About1: React.FC<AboutProps> = ({ heading, paragraphs,resumeData }) => {
 
  const finalHeading = resumeData?.basics?.name ? `About ${resumeData.basics.name}` : heading;
  const finalParagraphs =
    resumeData?.summary
      ? [resumeData.summary]
      : paragraphs;

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">{finalHeading}</h2>
        {paragraphs.slice(0, 1).map((text, i) => (
          <p key={i} className="text-xl text-gray-700 mb-6">
            {text}
          </p>
        ))}
        <div className="flex justify-center space-x-8 flex-wrap">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">{paragraphs[1]}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">{paragraphs[2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
