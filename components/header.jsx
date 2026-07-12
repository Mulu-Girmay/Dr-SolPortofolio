"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#1f2b6c] flex items-center justify-center">
              <span className="text-white font-semibold text-lg">+</span>
            </div>

            <div>
              <h2 className="text-sm font-semibold tracking-wide text-gray-900">
                Dr. Solomon
              </h2>

              <p className="text-[11px] text-gray-500 uppercase tracking-[3px]">
                Family Doctor
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-[13px] font-medium text-gray-600 hover:text-[#1f2b6c] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Appointment */}

          <div className="hidden md:block">
            <Button className="h-10 rounded-full px-7 bg-[#1f2b6c] hover:bg-[#16204d] text-sm font-medium">
             Book  Appointment
            </Button>
          </div>

          {/* Mobile */}

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-8 py-5 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-gray-700"
              >
                {item.title}
              </Link>
            ))}

            <Button className="w-full rounded-full bg-[#1f2b6c]">
              Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
);
}