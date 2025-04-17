import React from "react";

export default function Contact2() {
    return (
      <section className="py-20 px-8 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-lg text-gray-300">
            Want to collaborate or have a question? Feel free to reach out to me!
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-transparent text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-transparent text-white"
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  