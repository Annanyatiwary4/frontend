import { Link } from "react-router-dom";
import Logo from "../ui/logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-mdw-full py-4 px-8 bg-gray-900 text-2xl font-bold">
      {/* Left - Logo */}
      <Logo />
      
       {/* Right - Navigation Links */}
       <ul className="flex space-x-6 text-lg text-amber-50">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/features" className="hover:text-gray-400">Features</Link></li>
        <li><Link to="/guide" className="hover:text-gray-400">Guide</Link></li>
        <li><Link to="/templates" className="hover:text-gray-400">Templates</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
