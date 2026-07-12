import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import doctorImage from "@/assets/images/sol1.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-white pt-2 md:pt-3 pb-8 md:pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* White Card */}

        <div className="relative bg-white overflow-visible">

          {/* Hero */}

          <div className="grid lg:grid-cols-[1fr_1.2fr_0.8fr] items-center px-10 lg:px-16 pt-14 pb-10">

            {/* LEFT */}

            <div className="relative z-20">

              <p className="uppercase tracking-[5px] text-[11px] text-gray-500 font-medium">
                FAMILY DOCTOR
              </p>

              <h1 className="mt-5 text-4xl xl:text-5xl font-bold leading-[1.05] tracking-tight text-gray-900">
                Achieve
                <br />
                the best version
                <br />
                of your
                <br />
                health
              </h1>

              <Button
                className="mt-5 rounded-full bg-[#1f2b6c] hover:bg-[#16204d] px-7 h-11"
                asChild
              >
                <Link href="#contact">
                  Book Appointment
                  <ArrowRight className="ml-2 w-4 h-4"/>
                </Link>
              </Button>

            </div>

            {/* CENTER */}

            <div className="relative flex justify-center items-end">

              {/* background circle */}

              {/* <div className="absolute w-[420px] h-[420px] rounded-full bg-[#f3f4f7]" /> */}

              <Image
                src={doctorImage}
                alt="Doctor"
                priority
                loading="eager"
                className="relative z-30 object-contain max-h-[700px] w-auto"
              />

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-end pb-0 sm:pb-8 lg:pb-0">

              <div className="max-w-[250px]">

                <div className="w-6 sm:w-8 h-[2px] bg-[#1f2b6c] mb-6"/>

                <p className="text-gray-500 leading-6 text-sm">
                  Providing compassionate healthcare focused on
                  prevention, wellness and long-term relationships.
                  Every patient receives individualized care tailored
                  to their health journey.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Decoration - Full Width (absolute positioned outside container) */}
      <div className="absolute bottom-0 left-0 right-0 h-[50px] sm:h-[80px] lg:h-[110px] w-full">
        <div className="absolute inset-0 bg-[#1f2b6c]" />
      </div>

    </section>
  );
}