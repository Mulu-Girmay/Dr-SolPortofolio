import Button from "../../common/Button";
import Container from "../../common/Container";

const Hero = () => (
  <section id="home" className="bg-white overflow-hidden">
    <Container className="relative grid md:grid-cols-3 items-end gap-8 pt-16">
      {/* Left */}
      <div className="pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#1E3A5F] mb-4">
          Welcome to my practice
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] leading-tight mb-4">
          Achieve <br /> the best version <br /> of your{" "}
          <span className="text-[#1E3A5F]">health</span>
        </h1>
        <p className="text-[#475569] text-sm mb-8 max-w-xs leading-relaxed">
          Compassionate, comprehensive care for you and your family, every step of the way.
        </p>
        <Button arrow>Book Appointment</Button>
      </div>

      {/* Center — doctor image placeholder */}
      <div className="flex justify-center relative">
        <div className="w-64 h-80 bg-[#E8EEF5] rounded-t-full flex items-end justify-center overflow-hidden">
          <div className="w-48 h-72 bg-[#C8D8EA] rounded-t-full" />
        </div>
        {/* Badge */}
        <div className="absolute bottom-6 right-0 bg-white rounded-full shadow-lg px-4 py-3 text-center border border-[#E5E7EB]">
          <p className="text-xl font-bold text-[#1E3A5F]">10+</p>
          <p className="text-[10px] text-[#475569] uppercase tracking-wide font-semibold">Years of<br />Experience</p>
        </div>
      </div>

      {/* Right — quote */}
      <div className="pb-16">
        <span className="text-4xl text-[#1E3A5F] font-serif leading-none">"</span>
        <p className="text-sm text-[#475569] leading-relaxed mt-1">
          My mission is to provide personalized, evidence-based care and empower you to live a healthier, happier life.
        </p>
        <p className="mt-4 text-sm font-semibold text-[#0F172A]">— Dr. Montgomery</p>
      </div>
    </Container>

    {/* Wave bar */}
    <div className="bg-[#1E3A5F] h-16 mt-4" />
  </section>
);

export default Hero;
