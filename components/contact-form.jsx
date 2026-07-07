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
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                Contact
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get in Touch with Dr. Montgomery
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Have a question or need to schedule an appointment? Fill out the form and my team will get back to you as soon as possible.
            </p>

            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary flex-shrink-0">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary flex-shrink-0">✉️</div>
                <div>
                  <p className="font-semibold text-gray-900">hello@drmontgomery.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-primary flex-shrink-0">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">123 Wellness Way, Suite 500</p>
                  <p className="text-gray-600">Boston, MA 02115</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Reason for Visit</option>
                  <option value="checkup">Annual Checkup</option>
                  <option value="illness">Illness</option>
                  <option value="chronic">Chronic Disease Management</option>
                  <option value="prevention">Prevention & Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button type="submit" className="w-full py-3 rounded-full">
                Send Message <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
