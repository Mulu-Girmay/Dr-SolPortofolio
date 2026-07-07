'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#003d7a] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">+</span>
            </div>
            <span className="font-semibold text-gray-900">Dr. Montgomery</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-gray-700 hover:text-[#003d7a] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-[#003d7a] transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-[#003d7a] transition-colors">
              Services
            </Link>
            <Link href="#patient-info" className="text-sm font-medium text-gray-700 hover:text-[#003d7a] transition-colors">
              Patient Info
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#003d7a] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button>
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  )
}
