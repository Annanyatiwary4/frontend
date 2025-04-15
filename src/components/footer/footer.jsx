"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react"; // Importing Send Icon from Lucide

const Footer = () => {
  return (
    
    <footer className="w-full bg-black text-white py-16 px-6">
      {/* Footer Grid Layout */}
      <Separator className="bg-gray-800 w-full my-4" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Section - Contact Form */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-blue-500 to-[#35fed3] text-transparent bg-clip-text">Get in Touch</h2>
          <form className="max-w-xl space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-black text-white border-gray-700 focus:ring-2 focus:ring-blue-500 max-w-[400px]" />
            <Input type="email" placeholder="Your Email" className="bg-black text-white border-gray-700 focus:ring-2 focus:ring-blue-500 max-w-[400px]" />
            
            {/* Textarea with Send Icon */}
            <div className="relative max-w-[400px]">
              <Textarea 
                placeholder="Your Message" 
                className="w-full bg-black text-white border-gray-700 focus:ring-2 focus:ring-blue-500 pr-12 h-[100px]" 
              />
               <button 
                 type="submit" 
                className="absolute right-3 bottom-3 text-blue-500 hover:text-blue-600 transition-all"
                  >
                  <Send size={22} />
                        </button>
              </div>

          </form>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex flex-col items-end space-y-4">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-right">
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Templates</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Guide</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-all">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Centered Brand Name */}
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <h1 className=" font-sans text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#7953cd] via-[#00affa] to-[#764ada] text-transparent bg-clip-text animate-liquidGradient tracking-wider">
          Portfello
        </h1>
        <p className="text-gray-400 text-sm mt-3">Create, customize, and showcase your portfolio.</p>
      </div>

      {/* Separator */}
      <Separator className="bg-gray-800 w-full my-4" />

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm">
        &copy; 2025 Portfello. All rights reserved.
      </div>

      {/* Liquid Gradient Animation */}
      <style>{`
        @keyframes liquidGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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
