import React from "react";

interface ContactProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  resumeData?: {
    contact?: {
      heading?: string;
      message?: string;
      buttonText?: string;
    };
  };
}

const Contact2: React.FC<ContactProps> = ({
  heading,
  subtext,
  buttonText,
  resumeData,
}) => {
  const finalHeading =
    resumeData?.contact?.heading || heading || "Get in Touch";

  const finalSubtext =
    resumeData?.contact?.message || subtext || "Feel free to reach out!";

  const finalButtonText = resumeData?.contact?.buttonText || buttonText || "Send Message";

  return (
    <section className="py-20 px-8 bg-blue-950 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">{finalHeading}</h2>
        {finalSubtext && (
          <p className="text-lg text-gray-300">{finalSubtext}</p>
        )}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border-2 border-gray-600 bg-transparent text-white"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg border-2 border-gray-600 bg-transparent text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            {finalButtonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact2;
