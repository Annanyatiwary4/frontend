import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
        <div className="flex items-center space-x-3">
      <img src="src\assets\images\logo.png" alt="" className="w-12 h-12" />
      <h1 className="text-3xl font-medium text-cyan-50 font-sans">Portfello</h1>
      </div>
    </Link>
  );
};

export default Logo;
