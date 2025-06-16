// components/Navbar3.tsx
import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  name: string;
  links: { label: string; href: string }[];
}

const Navbar3 = ({ name, links }: NavbarProps) => {
  return (
    <motion.header
      className=" bg-black shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          
          <span className="text-xl font-semibold text-primary">{name}</span>
        </div>
        <div>
          <ul className="flex space-x-8">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar3;
