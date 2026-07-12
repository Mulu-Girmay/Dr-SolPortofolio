import {
  Users,
  HeartHandshake,
  Award,
  BriefcaseMedical,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "1,200+",
    title: "Successful Cases",
    text: "Patients treated with compassionate, high-quality medical care.",
  },
  {
    icon: HeartHandshake,
    number: "99%",
    title: "Patient Satisfaction",
    text: "Trusted by families through personalized healthcare.",
  },
  {
    icon: Award,
    number: "99%",
    title: "Recovery Success",
    text: "Evidence-based treatments delivering excellent outcomes.",
  },
  {
    icon: BriefcaseMedical,
    number: "500+",
    title: "Medical Consultations",
    text: "Providing professional care throughout every stage of life.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto px-4">

        {/* White Card Continuation */}

        <div className="bg-white border-x border-b border-gray-200">

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`p-10 ${
                    index !== stats.length - 1
                      ? "border-r border-gray-100"
                      : ""
                  }`}
                >
                  {/* Icon */}

                  <Icon className="w-8 h-8 text-[#1f2b6c]" />

                  {/* Number */}

                  <h2 className="mt-6 text-4xl font-bold text-gray-900">
                    {item.number}
                  </h2>

                  {/* Title */}

                  <h3 className="mt-2 text-sm font-semibold tracking-wide text-gray-900 uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}