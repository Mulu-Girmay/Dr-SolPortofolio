import { Users, Heart, Shield, BookOpen } from 'lucide-react'

const stats = [
  {
    icon: <Users className="w-8 h-8 text-[#003d7a]" />,
    number: '1,200+',
    label: 'Successful Patients',
    description: 'Patients cared for and continuously supported',
  },
  {
    icon: <Heart className="w-8 h-8 text-[#003d7a]" />,
    number: '99%',
    label: 'Patient Satisfaction',
    description: 'Satisfaction rate from our patients',
  },
  {
    icon: <Shield className="w-8 h-8 text-[#003d7a]" />,
    number: '99%',
    label: 'Recovery Success Rate',
    description: 'Positive outcomes through personalized care',
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#003d7a]" />,
    number: '500+',
    label: 'Unwavering Dedication',
    description: 'Hours of continuing education every year',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center text-primary">
                {stat.icon}
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">{stat.label}</p>
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
