import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const About = () => (
  <section id="about" className="py-20 bg-white">
    <Container className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image placeholder */}
      <div className="bg-[#E8EEF5] rounded-2xl h-96 flex items-center justify-center overflow-hidden">
        <div className="w-48 h-80 bg-[#C8D8EA] rounded-t-full" />
      </div>

      {/* Content */}
      <div>
        <SectionTitle
          label="About Me"
          title={"About Dr. Harper\nMontgomery"}
        />
        <p className="text-[#475569] text-sm leading-relaxed mb-4">
          I'm a board-certified General Practitioner with over a decade of experience in family medicine. My approach is simple: listen first, treat thoughtfully, and partner with you on your health journey.
        </p>
        <p className="text-[#475569] text-sm leading-relaxed mb-8">
          I believe in building long-term relationships with my patients based on trust, respect, and compassionate care.
        </p>
        <Button variant="outline" arrow>Learn More About Me</Button>
      </div>
    </Container>
  </section>
);

export default About;
