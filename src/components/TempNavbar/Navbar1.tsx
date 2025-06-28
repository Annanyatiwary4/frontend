// components/Navbar1.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

interface NavbarProps {
  links: { label: string; href: string }[];
  logoText: string;
  resumeData?: any;
}

export default function Navbar1({ links, logoText, resumeData }: NavbarProps) {
  const finalLogo = resumeData?.basics?.name || logoText;
  return (
    <header className="bg-black text-beige px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold text-white">{finalLogo}</div>
        <nav className="text-white hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link, i) => (
            <a key={i} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};


