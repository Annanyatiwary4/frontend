import React from 'react'


export default function About1() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-xl text-gray-700 mb-6">
            We are a group of passionate designers, developers, and innovators. Our mission is to create innovative solutions that empower businesses and improve lives.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be a leading provider of technology-driven solutions, inspiring change through innovation and creativity.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                We aim to revolutionize the way businesses operate by providing top-tier digital solutions tailored to meet their needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  