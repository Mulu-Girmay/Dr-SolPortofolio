import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const services = [
  { icon: "🫀", title: "Chronic Disease Management", desc: "Expert care for diabetes, hypertension, asthma, and other chronic conditions." },
  { icon: "🛡️", title: "Preventive Care", desc: "Annual physicals, screenings, and personalized prevention strategies." },
  { icon: "♀️", title: "Women's Health", desc: "Routine gynecological care, family planning, and women's wellness support." },
  { icon: "👶", title: "Pediatric Care", desc: "Compassionate healthcare for infants, children, and adolescents." },
  { icon: "🧠", title: "Mental Health", desc: "Support for anxiety, depression, stress management, and overall well-being." },
  { icon: "⚖️", title: "Weight Management", desc: "Customized plans to help you achieve and maintain a healthy lifestyle." },
];

const Services = () => (
  <section id="services" className="py-20 bg-[#F7F5F2]">
    <Container>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <SectionTitle
          label="Services"
          title={"What I Treat &\nSay About Dr. Harper"}
        />
        <div className="flex items-start pt-8">
          <p className="text-[#475569] text-sm leading-relaxed">
            I provide comprehensive primary care services to help you and your family stay healthy through every stage of life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map(({ icon, title, desc }) => (
          <Card key={title} className="group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">{icon}</span>
              <span className="text-[#1E3A5F] text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </div>
            <h3 className="text-sm font-bold text-[#1E3A5F] mb-2">{title}</h3>
            <p className="text-xs text-[#475569] leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
