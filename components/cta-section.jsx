import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import doctorImage from "@/assets/images/sol1.png";

export default function CTASection() {
  return (
    <>
      {/* Doctor Image Section - Above CTA */}
      <section className="bg-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src={doctorImage}
              alt="Doctor"
              priority
              className="relative z-30 object-contain max-h-[500px] md:max-h-[600px] w-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003d7a] text-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Not sure if you need to see a doctor?
            </h2>
            <p className="text-base text-blue-100 leading-relaxed">
              Let&apos;s talk! Book a consultation and we&apos;ll help you take
              the right next step for your health and well-being.
            </p>
            <Button
              variant="ghost"
              className="w-fit bg-white text-[#003d7a] hover:bg-gray-100 px-6 py-2.5 text-sm rounded-md font-medium mx-auto"
            >
              Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
