import { Users, Heart, Shield, BookOpen } from 'lucide-react'

const stats = [
  {
    icon: <Users className="w-6 h-6 text-[#003d7a]" />,
    number: '1,200+',
    label: 'Successful Patients',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#003d7a]" />,
    number: '99%',
    label: 'Patient Satisfaction',
  },
  {
    icon: <Shield className="w-6 h-6 text-[#003d7a]" />,
    number: '99%',
    label: 'Recovery Success Rate',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#003d7a]" />,
    number: '500+',
    label: 'Unwavering Dedication',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-8 md:py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</p>
              <p className="text-[10px] md:text-xs font-semibold text-gray-900 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
