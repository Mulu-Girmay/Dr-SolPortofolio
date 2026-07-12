import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  HeartHandshake,
} from "lucide-react";

import aboutImage from "@/assets/images/sol2.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#f5f6fa] py-10"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-gray-200">

          <div className="grid lg:grid-cols-2 gap-16 items-center p-10 lg:p-16">

            {/* LEFT IMAGE */}

            <div className="relative">

              {/* Background decoration */}

              {/* <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-[#eef2ff]" /> */}

              {/* <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-[#f7f7f7]" /> */}

              <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">

                <Image
                  src={aboutImage}
                  alt="Dr Solomon"
                  className="w-full h-[600px] object-cover"
                />

              </div>

              {/* Floating Card */}

              <div className="absolute bottom-8 -right-8 z-20 bg-white shadow-xl rounded-xl p-6 border border-gray-100">

                <Award className="w-8 h-8 text-[#1f2b6c]" />

                <h3 className="mt-3 text-3xl font-bold text-gray-900">
                  10+
                </h3>

                <p className="text-xs uppercase tracking-[2px] text-gray-500">
                  Years Experience
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <p className="uppercase tracking-[5px] text-xs font-semibold text-[#1f2b6c]">
                ABOUT ME
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
                Compassionate Care
                <br />
                Built on Trust
              </h2>

              <div className="mt-8 w-20 h-[2px] bg-[#1f2b6c]" />

              <p className="mt-8 text-gray-600 leading-8">
                I am a board-certified General Practitioner dedicated to
                providing patient-centered healthcare for individuals and
                families. Every consultation focuses on understanding your
                unique needs before creating a personalized treatment plan.
              </p>

              <p className="mt-6 text-gray-600 leading-8">
                Whether you need preventive care, chronic disease management,
                or support for everyday health concerns, my goal is to build
                lasting relationships through trust, compassion, and evidence-
                based medicine.
              </p>

              {/* FEATURES */}

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="text-[#1f2b6c] mt-1 w-5 h-5"/>

                  <div>

                    <h4 className="font-semibold text-gray-900">
                      Personalized Care
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Treatment plans designed specifically for you.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <HeartHandshake className="text-[#1f2b6c] mt-1 w-5 h-5"/>

                  <div>

                    <h4 className="font-semibold text-gray-900">
                      Family Focused
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Healthcare for every stage of life.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="text-[#1f2b6c] mt-1 w-5 h-5"/>

                  <div>

                    <h4 className="font-semibold text-gray-900">
                      Preventive Medicine
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Helping you stay healthy before illness begins.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <CheckCircle2 className="text-[#1f2b6c] mt-1 w-5 h-5"/>

                  <div>

                    <h4 className="font-semibold text-gray-900">
                      Modern Treatment
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Evidence-based care using current medical practices.
                    </p>

                  </div>

                </div>

              </div>

  

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}