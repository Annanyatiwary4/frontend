import React from "react";
import { motion } from "framer-motion";
import { Mail, User, GitBranch } from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

interface FooterProps {
  copyright?: string;
  socialLinks?: SocialLink[];
  resumeData?: {
    name?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const iconMap = {
  github: GitBranch,
  linkedin: User,
  mail: Mail,
};

const Footer3: React.FC<FooterProps> = ({ copyright, socialLinks = [], resumeData }) => {
  const hasResume = !!resumeData;

  const finalCopyright = hasResume
    ? `© ${new Date().getFullYear()} ${resumeData?.name || "Your Name"}`
    : copyright || `© ${new Date().getFullYear()} Your Name`;

  const finalLinks: SocialLink[] = hasResume
    ? [
        resumeData?.github && {
          label: "GitHub",
          href: `https://github.com/${resumeData.github}`,
          icon: "github",
        },
        resumeData?.linkedin && {
          label: "LinkedIn",
          href: `https://linkedin.com/in/${resumeData.linkedin}`,
          icon: "linkedin",
        },
        resumeData?.email && {
          label: "Email",
          href: `mailto:${resumeData.email}`,
          icon: "mail",
        },
      ].filter(Boolean) as SocialLink[]
    : socialLinks;

  return (
    <motion.footer
      className="py-8 bg-gray-500 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          {finalLinks.map((link, idx) => {
            const Icon = iconMap[link.icon];
            return (
              Icon && (
                <a
                  key={idx}
                  href={link.href}
                  className="text-2xl hover:text-gray-200 transition-all duration-300"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              )
            );
          })}
        </div>
        <p className="text-sm text-gray-200">{finalCopyright}</p>
      </div>
    </motion.footer>
  );
};

export default Footer3;
