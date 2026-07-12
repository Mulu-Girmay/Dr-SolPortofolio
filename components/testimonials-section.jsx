'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Patient since 2020',
    rating: 5,
    text: "Dr. Solomon is exceptional! He takes the time to listen and truly understands my health concerns.",
    avatar: 'SM',
  },
  {
    name: 'James Rodriguez',
    role: 'Patient since 2019',
    rating: 5,
    text: 'Professional, compassionate, and thorough. Dr. Solomon helped me manage my diabetes effectively.',
    avatar: 'JR',
  },
  {
    name: 'Emily Chen',
    role: 'Patient since 2021',
    rating: 5,
    text: "Finding Dr. Solomon was a blessing. He's helping me achieve overall wellness with a holistic approach.",
    avatar: 'EC',
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Above */}
        <div className="text-center mb-8">
          <p className="text-[10px] md:text-xs font-bold text-[#003d7a] uppercase tracking-[0.25em] mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What Patients Say about Dr. Solomon
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed text-xs italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#003d7a] flex items-center justify-center text-white font-bold text-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xs">{testimonial.name}</p>
                  <p className="text-[10px] text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveIndex(dot)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                activeIndex === dot ? 'bg-[#003d7a] w-5' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial set ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
