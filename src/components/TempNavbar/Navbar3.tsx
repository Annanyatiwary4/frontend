// components/Header.tsx
import React from "react";
import { motion } from "framer-motion";

const Navbar3: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="./assets/png/john-doe.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-semibold text-primary">John Doe</span>
        </div>
        <div>
          <ul className="flex space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
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
