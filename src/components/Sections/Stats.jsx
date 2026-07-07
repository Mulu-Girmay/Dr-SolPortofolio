import Container from "../common/Container";

const stats = [
  { icon: "👥", label: "Successful Patients", value: "1,200+", desc: "Patients cared for and continuously supported" },
  { icon: "🤍", label: "Patient Satisfaction", value: "99%", desc: "Satisfaction rate from our patients" },
  { icon: "🛡️", label: "Recovery Success Rate", value: "99%", desc: "Positive outcomes through personalized care" },
  { icon: "⭐", label: "Unwavering Dedication", value: "500+", desc: "Hours of continuing education every year" },
];

const Stats = () => (
  <section className="bg-white border-b border-[#E5E7EB]">
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E7EB]">
        {stats.map(({ icon, label, value, desc }) => (
          <div key={label} className="px-6 py-10">
            <span className="text-2xl">{icon}</span>
            <p className="text-xs text-[#475569] mt-3 mb-1">{label}</p>
            <p className="text-3xl font-bold text-[#0F172A] font-serif">{value}</p>
            <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Stats;
