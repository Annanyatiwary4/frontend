import { motion } from "framer-motion";
import { FileText, Activity, Globe,Palette,BarChart, Settings } from "lucide-react";
import ProfileCard from "./Profilecard"; // Import ProfileCard

const Card = () => {
  const navItems = [
    { name: "Projects", icon: FileText },
    { name: "Preview", icon: Activity },
    { name: "Activity", icon: Globe },
    { name: "Export", icon: BarChart },
    {name: "Themes", icon: Palette },
    { name: "Settings", icon: Settings },

  ];

  return (
    <motion.div
      className="bg-[#111827] text-white rounded-xl shadow-lg w-full max-w-[900px] flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="p-6 bg-[#1a2337]">
        <motion.span
           className=" text-blue-500 rounded-xl  w-[700px] flex flex-col overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
        Portfello
        </motion.span>
        <h1 className="text-2xl font-bold mt-3">
          Build your portfolio <br />
          <span className="text-blue-500">with ease</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Create and customize your portfolio with a seamless experience.
        </p>
      </div>

      {/* Sidebar & Profile Section */}
      <div className="bg-[#1a2337] p-4 flex flex-col md:flex-row gap-4">
        {/* Sidebar Navigation */}
        <div className="flex-1">
         
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#23304a" }}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Profile Card beside Navigation */}
        <div className="flex-1">
          <ProfileCard />
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 flex gap-3 justify-center">
        <motion.button
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg text-sm"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
        >
          Get started
        </motion.button>
        <motion.button
          className="px-5 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm"
          whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
        >
          Learn more →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
