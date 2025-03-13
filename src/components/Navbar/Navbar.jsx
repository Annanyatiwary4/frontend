import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // ShadCN Sheet (Sidebar)
import Logo from "../ui/logo";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-20 bg-gray-900 text-white shadow-md flex justify-between items-center">
      {/* Left - Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li>
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
        </li>
        <li>
          <Link to="/features" className="hover:text-gray-400 transition">Features</Link>
        </li>
        <li>
          <Link to="/guide" className="hover:text-gray-400 transition">Guide</Link>
        </li>
        <li>
          <Link to="/templates" className="hover:text-gray-400 transition">Templates</Link>
        </li>
      </ul>

      {/* Mobile Navigation (ShadCN Sheet) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden p-2">
            <Menu size={28} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-white">
          <div className="flex flex-col space-y-4 text-lg mt-6">
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
            <Link to="/features" className="hover:text-gray-400 transition">Features</Link>
            <Link to="/guide" className="hover:text-gray-400 transition">Guide</Link>
            <Link to="/templates" className="hover:text-gray-400 transition">Templates</Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
