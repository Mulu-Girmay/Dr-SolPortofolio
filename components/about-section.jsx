import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/images/sol2.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <Image
              src={aboutImage}
              alt="Dr. Harper Montgomery with patient records"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                About me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Dr. Harper Montgomery
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                I&apos;m a board-certified General Practitioner with over a
                decade of experience in family medicine. My approach is simple:
                Listen first, treat thoughtfully, and partner with you on your
                health journey.
              </p>
              <p>
                I believe in building long-term relationships with my patients
                based on trust, respect, and compassionate care.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-fit text-[#003d7a] border-2 border-[#003d7a] px-8 py-3 rounded-full hover:bg-blue-50"
            >
              Learn More About Me <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
