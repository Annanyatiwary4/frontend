import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  name?: string;
  links?: { label: string; href: string }[];
  resumeData?: {
    name?: string;
    navbar?: {
      links?: { label: string; href: string }[];
    };
  };
}

const Navbar3: React.FC<NavbarProps> = ({ name, links, resumeData }) => {
  const finalName = resumeData?.name || name || "Your Name";
  const finalLinks = resumeData?.navbar?.links || links || [];

  return (
    <motion.header
      className="bg-black shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold text-primary">{finalName}</span>
        </div>
        <div>
          <ul className="flex space-x-8">
            {finalLinks.map((link, idx) => (
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
