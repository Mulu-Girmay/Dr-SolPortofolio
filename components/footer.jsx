"use client";

import Link from "next/link";

export default function Footer() {
  // Get current year directly - this will be consistent between server and client
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-8 pb-8 border-b border-gray-800">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#003d7a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">+</span>
              </div>
              <span className="font-bold text-lg">Dr. Solomon</span>
            </div>
            <p className="text-gray-400 text-xs max-w-xs text-center md:text-left">
              Compassionate, comprehensive care for you and your family.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#home"
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#patient-info"
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
            >
              Patient Info
            </Link>
            <Link
              href="#contact"
              className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-center text-gray-400 text-xs">
            &copy; {currentYear} Dr. Solomon. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
