import Button from "../../common/Button";
import Container from "../../common/Container";

const CTA = () => (
  <section className="bg-[#1E3A5F] py-16 overflow-hidden">
    <Container className="grid md:grid-cols-2 items-center gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-snug mb-3">
          Not sure if you need to see a doctor?
        </h2>
        <p className="text-blue-200 text-sm mb-6">
          Let's talk! Book a consultation and we'll help you find the right next step.
        </p>
        <Button variant="white" arrow>Book a Consultation</Button>
      </div>

      {/* Doctor image placeholder */}
      <div className="flex justify-end">
        <div className="w-48 h-64 bg-[#2D5A88] rounded-t-full flex items-end justify-center overflow-hidden opacity-80">
          <div className="w-36 h-56 bg-[#3A6B9E] rounded-t-full" />
        </div>
      </div>
    </Container>
  </section>
);

export default CTA;
