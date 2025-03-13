"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, Palette, FileCode, Download, Eye, History } from "lucide-react";
import { Wand2, Zap, Brush, RefreshCw, TrendingUp } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator"; // ✅ Import ShadCN Separator

// Features Data with Icons
const features = [
  {
    id: 1,
    title: "Pre-Built Themes",
    description: "Jumpstart your portfolio with professionally designed templates.",
    icon: <LayoutTemplate size={40} className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Theme Customization",
    description: "Modify colors, fonts, and layouts to reflect your style.",
    icon: <Palette size={40} className="text-green-500" />,
  },
  {
    id: 3,
    title: "Export Code",
    description: "Download your portfolio as clean HTML, CSS, and JavaScript.",
    icon: <FileCode size={40} className="text-purple-500" />,
  },
  {
    id: 4,
    title: "Downloadable ZIP",
    description: "Get a complete project ZIP file with one click.",
    icon: <Download size={40} className="text-red-500" />,
  },
  {
    id: 5,
    title: "Live Preview",
    description: "See real-time changes while customizing your portfolio.",
    icon: <Eye size={40} className="text-yellow-500" />,
  },
  {
    id: 6,
    title: "Version Control",
    description: "Save multiple portfolio versions & restore anytime.",
    icon: <History size={40} className="text-pink-500" />,
  },
];

// ✅ Marquee Text Component
const MarqueeText = ({ text, speed }) => {
  return (
    <div className="relative w-screen overflow-hidden whitespace-nowrap bg-black py-5">
      <div
        className="flex w-max animate-marquee"
        style={{ animation: `marquee ${speed}ms linear infinite` }}
      >
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent px-4"
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

// ✅ Features Section Component
const FeaturesSection = () => {
  return (
    <div className="flex flex-col overflow-hidden gap-20 min-h-screen w-full bg-black text-white">
      <div className="w-full mx-auto px-4 py-10">
        {/* Marquee Text */}
        <MarqueeText text="Let every feature paint your masterpiece. • " speed={10000} />

        {/* Feature Cards Section */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="relative border-2 border-blue-800 bg-black hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-transform duration-300 rounded-lg p-6"
            >
              <CardContent className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-amber-50">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ✅ Why Choose Our Portfolio Builder? */}
      <div className="px-10 text-white rounded-xl shadow-lg">
        <MarqueeText text="Why Choose Portfello? • " speed={10000} />

        <div className="mt-10 flex flex-col gap-6">
          {/* 🚀 No Coding Required */}
          <div className="flex items-center gap-4">
            <Wand2 size={50} className="text-blue-400" />
            <p className="text-lg">
              <strong>No Coding Required:</strong> Build a stunning portfolio without writing a single line of code.
            </p>
          </div>
          <Separator className="bg-gray-700 my-4" />

          {/* ⚡ Fast & Responsive */}
          <div className="flex items-center gap-4">
            <Zap size={50} className="text-green-400" />
            <p className="text-lg">
              <strong>Fast & Responsive:</strong> Optimized for speed & mobile-friendly design.
            </p>
          </div>
          <Separator className="bg-gray-700 my-4" />

          {/* 🎨 Customization Freedom */}
          <div className="flex items-center gap-4">
            <Brush size={50} className="text-yellow-400" />
            <p className="text-lg">
              <strong>Full Customization:</strong> Choose layouts, colors, and fonts that match your style.
            </p>
          </div>
          <Separator className="bg-gray-700 my-4" />

          {/* 📂 Export & Download */}
          <div className="flex items-center gap-4">
            <Download size={50} className="text-purple-400" />
            <p className="text-lg">
              <strong>One-Click Export:</strong> Download your entire portfolio as a ZIP or clean code.
            </p>
          </div>
          <Separator className="bg-gray-700 my-4" />

          {/* 🔄 Easy Updates */}
          <div className="flex items-center gap-4">
            <RefreshCw size={50} className="text-pink-400" />
            <p className="text-lg">
              <strong>Easy Updates:</strong> Modify your portfolio anytime without hassle.
            </p>
          </div>
          <Separator className="bg-gray-700 my-4" />

        
        </div>
      </div>

      {/* Add extra space at the bottom */}
      <div className="h-32"></div>
    </div>
  );
};

export default FeaturesSection;
