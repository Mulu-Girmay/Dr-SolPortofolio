'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reason: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] md:text-xs font-bold text-[#003d7a] uppercase tracking-[0.25em] mb-3">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Get in Touch with
                <br />
                Dr. Solomon
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Have a question or need to schedule an appointment? Fill out the form and my team will get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">0987654321</p>
                  <p className="text-gray-600 text-xs">Mon-Fri 9am-5pm</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">solomon@gmail.com</p>
                  <p className="text-gray-600 text-xs">We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Addis Ababa</p>
                  <p className="text-gray-600 text-xs">Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-6 lg:p-8 rounded-lg text-black">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d7a] focus:border-transparent bg-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d7a] focus:border-transparent bg-white text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d7a] focus:border-transparent bg-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d7a] focus:border-transparent bg-white text-sm"
                />
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003d7a] focus:border-transparent bg-white text-sm"
                >
                  <option value="">Reason for Visit *</option>
                  <option value="checkup">Annual Checkup</option>
                  <option value="illness">Illness</option>
                  <option value="chronic">Chronic Disease Management</option>
                  <option value="prevention">Prevention & Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button type="submit" className="w-50 py-3 rounded-md bg-[#003d7a] hover:bg-[#002a57] font-medium text-sm ">
                Send Message <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
