import React from 'react';

export default function Footer1() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">© 2025 Stone. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy-policy" className="text-white hover:underline mr-6">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-white hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  }
  