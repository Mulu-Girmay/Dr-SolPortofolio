import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import doctorImage from "@/assets/images/sol1.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-[#f5f6fa] pt-10 pb-0"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* White Card */}

        <div className="relative bg-white border border-gray-200 overflow-hidden">

          {/* Hero */}

          <div className="grid lg:grid-cols-[1fr_1.2fr_0.8fr] items-center px-10 lg:px-16 pt-14">

            {/* LEFT */}

            <div className="relative z-20">

              <p className="uppercase tracking-[5px] text-[11px] text-gray-500 font-medium">
                FAMILY DOCTOR
              </p>

              <h1 className="mt-5 text-50 xl:text-5xl font-bold leading-[1.05] tracking-tight text-gray-900">
                Achieve
                <br />
                the best

                version
                <br />
                of your
                <br />
                health
              </h1>

              <Button
                className="mt-5 rounded-full bg-[#1f2b6c] hover:bg-[#16204d] px-7 h-11"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4"/>
              </Button>

            </div>

            {/* CENTER */}

            <div className="relative flex justify-center items-end">

              {/* background circle */}

              <div className="absolute w-[420px] h-[420px] rounded-full bg-[#f3f4f7]" />

              <Image
                src={doctorImage}
                alt="Doctor"
                priority
                className="relative z-20 object-contain max-h-[700px] w-auto"
              />

              {/* floating badge

              <div className="absolute bottom-12 right-300 bg-white shadow-xl border border-gray-100 px-3 py-4 rounded-lg z-30">

                <h2 className="text-3xl font-bold text-[#1f2b6c]">
                  10+
                </h2>

                <p className="uppercase text-[10px] tracking-[2px] text-gray-500">
                  Years Experience
                </p>

              </div> */}

            </div>

            {/* RIGHT */}

            <div className="relative flex justify-end">

              <div className="max-w-[250px]">

                <div className="w-8 h-[2px] bg-[#1f2b6c] mb-8"/>

                <p className="text-gray-500 leading-8 text-sm">
                  Providing compassionate healthcare focused on
                  prevention, wellness and long-term relationships.
                  Every patient receives individualized care tailored
                  to their health journey.
                </p>

                {/* decorative lines */}

                {/* <div className="mt-12 space-y-3">

                  <div className="h-[1px] w-full bg-gray-200"/>

                  <div className="h-[1px] w-4/5 bg-gray-200"/>

                  <div className="h-[1px] w-3/5 bg-gray-200"/>

                </div> */}

              </div>

            </div>

          </div>

          {/* Bottom Decoration */}

          <div className="relative mt-[-70px] h-[110px]">

            {/* blue */}

            <div className="absolute inset-0 bg-[#1f2b6c]" />


          </div>

        </div>

      </div>
    </section>
  );
}