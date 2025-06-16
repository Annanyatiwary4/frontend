// components/Navbar2.tsx
import React from "react";

interface NavbarProps {
  title: string;
  links: { label: string; href: string }[];
}

const Navbar2 = ({ title, links }: NavbarProps) => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <ul className="flex space-x-6">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href} className="hover:text-blue-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
