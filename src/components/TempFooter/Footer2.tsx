import React from "react";

interface FooterProps {
  copyright: string;
  socialLinks: { label: string; href: string }[];
}

const Footer2 = ({ copyright, socialLinks }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>{copyright}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-blue-400 hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
