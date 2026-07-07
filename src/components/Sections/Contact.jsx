import Button from "../common/Button";
import Container from "../common/Container";
import Input from "../common/Input";
import SectionTitle from "../common/SectionTitle";

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <Container className="grid md:grid-cols-2 gap-16 items-start">
      {/* Left */}
      <div>
        <SectionTitle
          label="Contact"
          title={"Get in Touch\nwith Dr. Montgomery"}
          subtitle="Have a question or need to schedule an appointment? Fill out the form and my team will get back to you as soon as possible."
        />
        <ul className="mt-6 space-y-3 text-sm text-[#475569]">
          <li className="flex items-center gap-3">📞 (555) 123-4567</li>
          <li className="flex items-center gap-3">✉️ hello@drmontgomery.com</li>
          <li className="flex items-center gap-3">📍 123 Wellness Way, Suite 100, Boston, MA 02115</li>
        </ul>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Phone" type="tel" />
          <Input placeholder="Date of Birth" type="date" />
        </div>
        <select className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 text-sm text-[#94A3B8] outline-none focus:border-[#1E3A5F] transition bg-white">
          <option value="">Reason for Visit</option>
          <option>General Checkup</option>
          <option>Chronic Disease</option>
          <option>Preventive Care</option>
          <option>Mental Health</option>
          <option>Other</option>
        </select>
        <Button className="w-full justify-center" arrow>Send Message</Button>
      </form>
    </Container>
  </section>
);

export default Contact;
