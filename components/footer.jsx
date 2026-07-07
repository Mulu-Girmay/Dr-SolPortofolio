"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-8 pb-8 border-b border-gray-800">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">+</span>
            </div>
            <span className="font-semibold">Dr. Montgomery</span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            <Link
              href="#home"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#patient-info"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Patient Info
            </Link>
            <Link
              href="#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Dr. Montgomery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
