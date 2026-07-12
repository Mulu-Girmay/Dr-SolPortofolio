"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/images/sol1.png";

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
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <Image
                src={logoImage}
                alt="Dr. Solomon Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-base font-semibold tracking-wide text-gray-900">
                Dr. Solomon
              </h2>

              <p className="text-xs text-gray-500 uppercase tracking-[3px]">
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
                className="text-sm font-medium text-gray-600 hover:text-[#1f2b6c] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Appointment */}

          <div className="hidden md:block">
            <Button asChild className="h-11 rounded-full px-7 bg-[#1f2b6c] hover:bg-[#16204d] text-sm font-medium">
              <Link href="#contact">Book Appointment</Link>
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

            <Button className="w-full rounded-full bg-[#1f2b6c]" asChild>
              <Link href="#contact" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
);
}