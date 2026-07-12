"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Patient since 2020",
    image: "SM",
    rating: 5,
    text: "Dr. Solomon completely changed how I think about healthcare. Every visit feels personal, professional, and reassuring. He explains everything clearly and genuinely cares about his patients.",
  },
  {
    name: "James Rodriguez",
    role: "Patient since 2019",
    image: "JR",
    rating: 5,
    text: "The level of care is exceptional. I finally found a physician who listens carefully and creates a treatment plan that actually works.",
  },
  {
    name: "Emily Chen",
    role: "Patient since 2021",
    image: "EC",
    rating: 5,
    text: "Friendly, knowledgeable, and compassionate. Every appointment has been a wonderful experience.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((active + 1) % testimonials.length);

  const prev = () =>
    setActive(
      active === 0
        ? testimonials.length - 1
        : active - 1
    );

  return (
    <section className="bg-[#f5f6fa] py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-gray-200">

          <div className="px-10 lg:px-16 py-16">

            {/* Heading */}

            <div className="text-center max-w-2xl mx-auto">

              <p className="uppercase tracking-[5px] text-xs font-semibold text-[#1f2b6c]">
                TESTIMONIALS
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                What Patients Say
              </h2>

              <div className="w-20 h-[2px] bg-[#1f2b6c] mx-auto mt-6" />

            </div>

            {/* Featured Card */}

            <div className="mt-16 bg-[#fafafa] rounded-3xl p-12 relative">

              <Quote
                className="absolute top-10 left-10 w-16 h-16 text-[#1f2b6c]/10"
              />

              <div className="flex items-center gap-1 mb-8">

                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="text-2xl leading-10 text-gray-700 max-w-4xl">
                "{testimonials[active].text}"
              </p>

              <div className="mt-10 flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-full bg-[#1f2b6c] text-white flex items-center justify-center font-bold text-xl">

                    {testimonials[active].image}

                  </div>

                  <div>

                    <h4 className="font-semibold text-lg">
                      {testimonials[active].name}
                    </h4>

                    <p className="text-gray-500">
                      {testimonials[active].role}
                    </p>

                  </div>

                </div>

                {/* Controls */}

                <div className="flex gap-3">

                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full bg-[#1f2b6c] text-white hover:bg-[#16204d] transition"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-[#1f2b6c] text-white hover:bg-[#16204d] transition"
                  >
                    <ChevronRight />
                  </button>

                </div>

              </div>

            </div>

            {/* Indicators */}

            <div className="flex justify-center gap-3 mt-10">

              {testimonials.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`transition-all rounded-full ${
                    active === index
                      ? "w-10 h-2 bg-[#1f2b6c]"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}