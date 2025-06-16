import React from "react";

interface FooterProps {
  copyright: string;
  links: { label: string; href: string }[];
}

const Footer1 = ({ copyright, links }: FooterProps) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg">{copyright}</p>
        <div className="mt-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white hover:underline mr-6 last:mr-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
