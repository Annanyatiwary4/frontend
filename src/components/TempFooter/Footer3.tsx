// components/Footer.tsx
import { motion } from "framer-motion";
import {User, Mail, GitBranch } from "lucide-react"; // Importing Lucide Icons
import React from "react";
const Footer = () => {
  return (
    <motion.footer
      className="py-8 bg-gray-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com"
            className="text-2xl hover:text-gray-200 transition-all duration-300"
            aria-label="GitHub"
          >
            <GitBranch />
          </a>
          <a
            href="https://linkedin.com"
            className="text-2xl hover:text-gray-200 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <User />
          </a>
          <a
            href="mailto:someone@example.com"
            className="text-2xl hover:text-gray-200 transition-all duration-300"
            aria-label="Email"
          >
            <Mail />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} John Doe. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
