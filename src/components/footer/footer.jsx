"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-6 pb-12 px-6">

      {/* Footer Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-28 items-start">
        
        {/* Contact Form */}
        <div className="flex flex-col items-center md:items-start w-full space-y-8">
          <h2 className="relative text-6xl md:text-6xl bg-gradient-to-r from-blue-600 to-[#35fed3] text-transparent font-semibold bg-clip-text w-fit cursor-pointer group">
            Get in Touch
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </h2>

          <div className="group bg-black rounded-4xl p-8 shadow-2xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-500 w-full max-w-md">
            <form className="space-y-5">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-black text-white border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 w-full h-12 px-4  rounded-md"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-black text-white border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 w-full h-12 px-4 rounded-md"
              />

              {/* Textarea with Send Button */}
              <div className="relative">
                <Textarea
                  placeholder="Your Message"
                  className="w-full bg-black text-white border-2 border-blue-900 focus:ring-2 focus:ring-blue-500 pr-12 h-[180px] resize-none rounded-md px-4 py-3"
                />
                <button
                  type="submit"
                  className="absolute right-3 bottom-3 text-blue-600 hover:text-blue-700 transition-all"
                >
                  <Send size={22} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-end items-center space-y-5 w-full">
          <h2 className="text-3xl font-semibold">Quick Links</h2>
          <ul className="space-y-3 text-right">
            {["Home", "Templates", "Guide", "Services", "Contact"].map((text) => (
              <li key={text}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all text-lg"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Brand Title and Tagline */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#7953cd] via-[#00affa] to-[#764ada] text-transparent bg-clip-text animate-liquidGradient tracking-wider">
          Portfello
        </h1>
        <p className="text-gray-400 text-sm mt-3">
          Create, customize, and showcase your portfolio.
        </p>
      </div>

      {/* Separator */}
      <Separator className="bg-gray-800 w-full my-8" />

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm">
        &copy; 2025 Portfello. All rights reserved.
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes liquidGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-liquidGradient {
          background-size: 300% 300%;
          animation: liquidGradient 4s infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
