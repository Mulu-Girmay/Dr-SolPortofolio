import {
  Activity,
  Heart,
  Stethoscope,
  Brain,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Activity,
    title: "Chronic Disease",
    description:
      "Management of diabetes, hypertension, asthma and other long-term medical conditions.",
  },
  {
    icon: Stethoscope,
    title: "General Checkups",
    description:
      "Routine examinations, diagnosis, vaccinations and preventive healthcare.",
  },
  {
    icon: Heart,
    title: "Women's Health",
    description:
      "Comprehensive women's healthcare including wellness and family planning.",
  },
  {
    icon: Users,
    title: "Family Medicine",
    description:
      "Healthcare services tailored for children, adults and senior patients.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Support for stress, anxiety, depression and emotional well-being.",
  },
  {
    icon: Heart,
    title: "Preventive Care",
    description:
      "Early screenings and personalized plans to help you stay healthy.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f5f6fa] py-20"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-gray-200">

          <div className="px-10 lg:px-16 py-16">

            {/* Heading */}

            <div className="text-center max-w-3xl mx-auto">

              <p className="uppercase tracking-[5px] text-xs font-semibold text-[#1f2b6c]">
                SERVICES
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900">
                Medical Services
              </h2>

              <div className="w-20 h-[2px] bg-[#1f2b6c] mx-auto mt-6"/>

              <p className="mt-8 text-gray-600 leading-8">
                Comprehensive healthcare designed to keep you and your family
                healthy through every stage of life.
              </p>

            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

              {services.map((service, index) => {
                const Icon = service.icon;

                return (

                  <div
                    key={index}
                    className="group border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white"
                  >

                    {/* Icon */}

                    <div className="w-16 h-16 rounded-2xl bg-[#eef2ff] flex items-center justify-center group-hover:bg-[#1f2b6c] transition-colors">

                      <Icon className="w-8 h-8 text-[#1f2b6c] group-hover:text-white transition-colors"/>

                    </div>

                    {/* Title */}

                    <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-gray-600 leading-7">
                      {service.description}
                    </p>

                    {/* Link */}

                    <button className="mt-8 flex items-center gap-2 text-[#1f2b6c] font-semibold group-hover:gap-4 transition-all">

                      Learn More

                      <ArrowRight className="w-4 h-4"/>

                    </button>

                  </div>

                );
              })}

            </div>

            {/* Bottom CTA */}

            <div className="mt-20 text-center">

              <Button className="rounded-full bg-[#1f2b6c] hover:bg-[#16204d] px-8 h-11">

                View All Services

              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}