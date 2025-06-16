import React from "react";
import { motion } from "framer-motion";
import { Mail, User, GitBranch } from "lucide-react";

interface FooterProps {
  copyright: string;
  socialLinks: {
    label: string;
    href: string;
    icon: "github" | "linkedin" | "mail";
  }[];
}

const iconMap = {
  github: GitBranch,
  linkedin: User,
  mail: Mail,
};

const Footer3 = ({ copyright, socialLinks }: FooterProps) => {
  return (
    <motion.footer
      className="py-8 bg-gray-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, idx) => {
            const Icon = iconMap[link.icon];
            if (!Icon) {
                  console.error(`Invalid icon type '${link.icon}' used in Footer3`);
                  return null; // Skip rendering if icon doesn't exist
                }
            return (
              <a
                key={idx}
                href={link.href}
                className="text-2xl hover:text-gray-200 transition-all duration-300"
                aria-label={link.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-200">{copyright}</p>
      </div>
    </motion.footer>
  );
};

export default Footer3;
