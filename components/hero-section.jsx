import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import doctorImage from "@/assets/images/sol1.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <p className="text-xs font-semibold text-[#003d7a] uppercase tracking-widest mb-4 font-medium">
                Welcome to my practice
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Achieve
                <br />
                the best version
                <br />
                of your <span className="text-[#003d7a]">health</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
              Compassionate, comprehensive care for you and your family, every
              step of the way.
            </p>

            <Button className="w-fit px-8 py-3 text-base rounded-full bg-[#003d7a] hover:bg-[#002a57] text-white">
              Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Content - Image & Badge */}
          <div className="relative flex flex-col items-center md:items-end order-1 md:order-2">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src={doctorImage}
                alt="Dr. Harper Montgomery"
                className="w-full h-auto"
                priority
              />
              {/* Badge - Years of Experience */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white rounded-full p-4 md:p-6 shadow-xl text-center min-w-fit">
                <p className="text-xl md:text-2xl font-bold text-[#003d7a]">
                  10+
                </p>
                <p className="text-xs md:text-sm text-gray-600 font-medium whitespace-nowrap">
                  Yrs Experience
                </p>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg max-w-xs md:max-w-sm mt-8 md:mt-0 md:ml-4 border border-gray-100">
              <p className="text-base md:text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                &quot;My mission is to provide personalized, evidence-based care
                and empower you to live a healthier, happier life.&quot;
              </p>
              <p className="text-sm font-semibold text-gray-700">
                — Dr. Montgomery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
