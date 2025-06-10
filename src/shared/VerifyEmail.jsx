
import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';
import { toast } from 'react-hot-toast';
export const VerifyEmail = () => {

  const [code , setCode]= useState(["","","","","",""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { error, isLoading,verifyEmail} = useAuthStore(); // Replace with actual loading state

  const handleChange = (index, value) => {
    const newCode = [...code];

		// Handle pasted content
		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);

			// Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);

			// Move focus to the next input field if value is entered
			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
  };

  const handleKeyDown = (index, e) => {if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}};

    const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/login");
			toast.success("Email verified successfully");
		} catch (error) {
			console.log(error);
		}
	};

	// Auto submit when all fields are filled
	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);


  return (
  <div className="flex justify-center items-center min-h-screen bg-black">
  <div className="max-w-md w-full bg-black bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-900/50">
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 w-full"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 text-transparent bg-clip-text drop-shadow-md">
        Verify Your Email
      </h2>

      <p className="text-center text-gray-300 mb-6">
        Enter the 6-digit code sent to your email address.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-2xl font-bold bg-gray-900 text-cyan-300 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-cyan-500 transition duration-150 ease-in-out outline-none"
            />
          ))}
        </div>

        {error && <p className="text-red-500 font-semibold mt-2 text-center">{error}</p>}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          disabled={isLoading || code.some((digit) => !digit)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-70 disabled:opacity-50"
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </motion.button>
      </form>
    </motion.div>
  </div>
  </div>
);
};

export default VerifyEmail;