import { Activity, Stethoscope, Heart, Users, Brain, Scale } from 'lucide-react'

const services = [
  {
    icon: <Activity className="w-8 h-8 text-[#003d7a]" />,
    title: 'Chronic Disease Management',
    description: 'Expert care for diabetes, hypertension, asthma, and other chronic conditions.',
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-[#003d7a]" />,
    title: 'Preventive Care',
    description: 'Screenings, vaccinations, and personalized prevention strategies.',
  },
  {
    icon: <Heart className="w-8 h-8 text-[#003d7a]" />,
    title: "Women's Health",
    description: 'Comprehensive care including family planning, and women&apos;s wellness support.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#003d7a]" />,
    title: 'Pediatric Care',
    description: 'Compassionate healthcare for infants, children, and adolescents.',
  },
  {
    icon: <Brain className="w-8 h-8 text-[#003d7a]" />,
    title: 'Mental Health',
    description: 'Support for anxiety, depression, stress management, and overall well-being.',
  },
  {
    icon: <Scale className="w-8 h-8 text-[#003d7a]" />,
    title: 'Weight Management',
    description: 'Customized plans to help you achieve and maintain a healthy lifestyle.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-[#003d7a] uppercase tracking-wide mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I Treat & Say About Dr. Harper
          </h2>
          <p className="text-lg text-gray-600">
            I provide comprehensive primary care services to help you and your family stay healthy through every stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-4 flex justify-end">
                <div className="text-[#003d7a] hover:opacity-70 cursor-pointer transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
