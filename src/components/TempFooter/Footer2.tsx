import React from "react";

interface FooterProps {
  copyright?: string;
  socialLinks?: { label: string; href: string }[];
  resumeData?: {
    name?: string;
    footer?: {
       
      copyright?: string;
      socialLinks?: { label: string; href: string }[];
    };
  };
}

const Footer2: React.FC<FooterProps> = ({ copyright, socialLinks, resumeData }) => {
  const finalCopyright =
  resumeData?.footer?.copyright ||
  copyright ||
  `© ${new Date().getFullYear()} ${resumeData?.name || "Your Name"}`;


  const finalSocialLinks =
    resumeData?.footer?.socialLinks || socialLinks || [];

  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>{finalCopyright}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {finalSocialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
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
