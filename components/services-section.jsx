import { Activity, Stethoscope, Heart, Users, Brain, Scale } from 'lucide-react'

const services = [
  {
    icon: <Activity className="w-6 h-6 text-[#003d7a]" />,
    title: 'Chronic Disease Management',
    description: 'Expert care for diabetes, hypertension, asthma, and other chronic conditions.',
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-[#003d7a]" />,
    title: 'Preventive Care',
    description: 'Screenings, vaccinations, and personalized prevention strategies.',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#003d7a]" />,
    title: "Women's Health",
    description: 'Comprehensive care including family planning and wellness support.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#003d7a]" />,
    title: 'Pediatric Care',
    description: 'Compassionate healthcare for infants, children, and adolescents.',
  },
  {
    icon: <Brain className="w-6 h-6 text-[#003d7a]" />,
    title: 'Mental Health',
    description: 'Support for anxiety, depression, stress management, and well-being.',
  },
  {
    icon: <Scale className="w-6 h-6 text-[#003d7a]" />,
    title: 'Weight Management',
    description: 'Customized plans to achieve and maintain a healthy lifestyle.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-[10px] md:text-xs font-bold text-[#003d7a] uppercase tracking-[0.25em] mb-2">
            What I Treat
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Services Offered
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-2.5">{service.icon}</div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{service.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
