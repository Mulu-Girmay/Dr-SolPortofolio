import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[#003d7a] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 z-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Not sure if you need to see a doctor?
            </h2>
            <p className="text-lg text-blue-100">
              Let&apos;s talk! Book a consultation and we&apos;ll help you take
              the right next step.
            </p>
            <Button
              variant="ghost"
              className="w-fit bg-white text-[#003d7a] hover:bg-gray-100 px-8 py-6 text-base rounded-full border-2 border-white"
            >
              Book a Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative hidden md:block bg-gradient-to-br from-blue-300 to-blue-100 rounded-lg h-96"></div>
        </div>
      </div>
    </section>
  );
}
