import React, { useEffect, useState } from "react";
import { Home, Info, Layout, Sparkle } from "lucide-react";
import { FloatingNav } from "../ui/floating-navbar"; // Your custom pill navbar

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Features",
    link: "#features",
    icon: <Sparkle className="h-4 w-4" />,
  },
  {
    name: "Guide",
    link: "#how-it-works",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Templates",
    link: "#templates",
    icon: <Layout className="h-4 w-4" />,
  },
];

const Navbar = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {!showFloating && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-neutral-800 px-6 py-4 shadow-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <h1 className="text-4xl font-bold text-blue-600 tracking-tight">Portfello</h1>
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center gap-2 text-lg font-medium text-neutral-300 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </header>
      )}

      {showFloating && <FloatingNav navItems={navItems} />}
    </div>
  );
};

export default Navbar;
