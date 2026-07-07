import Button from "../common/Button";
import Container from "../common/Container";

const links = ["Home", "About", "Services", "Patient Info", "Contact"];

const Navbar = () => (
  <nav className="w-full py-4 bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
    <Container className="flex items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-[#1E3A5F] text-lg">
        <span className="text-2xl">✚</span> Dr. Montgomery
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#475569] hover:text-[#1E3A5F] transition font-medium"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <Button arrow>Book Appointment</Button>
    </Container>
  </nav>
);

export default Navbar;
