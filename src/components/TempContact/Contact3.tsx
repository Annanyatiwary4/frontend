// components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact3 = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form className="space-y-6">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded"
            />
          </motion.div>
          <button type="submit" className="w-full bg-black hover:bg-gray-500 text-white py-2 rounded-lg">
              Send Message
            </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact3;
