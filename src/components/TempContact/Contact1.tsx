import React from "react";

interface ContactProps {
  heading: string;
  subtext?: string;
  buttonText?: string;
}

const Contact1: React.FC<ContactProps> = ({ heading, subtext, buttonText }) => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">{heading}</h2>
        {subtext && <p className="text-lg mb-6">{subtext}</p>}
        <form className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-left text-lg">Name</label>
            <input type="text" id="name" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-lg">Email</label>
            <input type="email" id="email" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-lg">Message</label>
            <textarea id="message" rows={4} className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Your message" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            {buttonText || "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact1;
