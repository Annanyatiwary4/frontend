import React from "react";

interface FooterProps {
  copyright: string;
  links: { label: string; href: string }[];
  resumeData?: any; // ✅ Corrected key: should be 'resumeData'
}

const Footer1 = ({ copyright, links, resumeData }: FooterProps) => {
  // Fallback copyright from resumeData
  const finalCopyright =
    copyright || `© ${new Date().getFullYear()} ${resumeData?.name || "Your Name"}`;

  // Fallback links from resumeData.profiles (like GitHub, LinkedIn, etc.)
  const finalLinks =
    links && links.length > 0
      ? links
      : resumeData?.links?.map((profile: any) => ({
          label: profile.network,
          href: profile.url,
        })) || [];

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg">{finalCopyright}</p>
        <div className="mt-4">
          {finalLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white hover:underline mr-6 last:mr-0"
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

export default Footer1;
