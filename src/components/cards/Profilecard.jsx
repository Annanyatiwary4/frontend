import { motion } from "framer-motion";
import { Github, Linkedin, Mail,Phone, MapPin } from "lucide-react";

const ProfileCard = () => {
  return (
    <motion.div
      className="relative w-120 h-100 bg-white rounded-3xl p-4 shadow-lg flex flex-col justify-between overflow-hidden"
      whileHover={{ borderTopLeftRadius: "55px" }}
    >
      {/* Fixed Profile Picture in the Corner */}
      <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-4 border-blue-900 overflow-hidden">
        <img 
          src="src/assets/images/profile.png" 
          alt="Profile Picture" 
          className="w-full h-full object-cover"
        />
      </div>

      
      {/* Content Section (Experience, Projects, Education) */}
      <div className="ml-22 space-y-0.5 ">
        <h1 className="text-2xl text-blue-950 font-bold">Emily</h1>
        <p className="text-gray-900 text-m">Full Stack Developer | Open Source Contributor</p>

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400">Experience</h2>
          <p className="text-gray-900 text-m">Software Engineer at XYZ Corp</p>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400">Projects</h2>
          <ul className="list-disc ml-5 text-gray-900 text-m">
            <li>Portfolio Builder (MERN Stack)</li>
            <li>Social Media Website (Django)</li>
          </ul>
        </div>

         {/* Education Section */}
         <div>
          <h2 className="text-2xl font-semibold text-blue-400">Education</h2>
          <p className="text-gray-900 text-m">B.Tech in Computer Science, XYZ University</p>
        </div>
      </div>


      {/* Animated Info Section */}
      <motion.div
        className="absolute bottom-1 left-1 right-1 bg-blue-600 top-3/4 rounded-2xl p-4 flex flex-col items-center text-white"
        whileHover={{ top: "25%", borderRadius: "80px 29px 29px 29px" }}
      >
        <h2 className="text-2xl font-bold">Emily</h2>
        <p className="text-m">Frontend Developer & Designer</p>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-3">
          <Github className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
          <Mail className="w-5 h-5 hover:scale-110 transition-transform cursor-pointer" />
        </div>

        
  {/* Contact Section */}
  <div className="mt-4 text-m flex flex-col items-center">
    <div className="flex items-center space-x-2">
      <Phone className="w-4 h-4" />
      <span>+91 12345 67890</span>
    </div>
    <div className="flex items-center space-x-2 mt-1">
      <Mail className="w-4 h-4" />
      <span>emily23@example.com</span>
    </div>
    <div className="flex items-center space-x-2 mt-1">
      <MapPin className="w-4 h-4" />
      <span>Paris, US</span> {/* Fixed spelling from "Pairs" to "Paris" */}
    </div>
  </div>
        
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
