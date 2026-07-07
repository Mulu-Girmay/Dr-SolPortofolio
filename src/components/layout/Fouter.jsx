import Container from "../common/Container";

const links = ["Home", "About", "Services", "Patient Info", "Contact"];

const Footer = () => (
  <footer className="bg-[#0F172A] text-white py-10">
    <Container className="flex flex-col items-center gap-6">
      <p className="font-bold text-lg font-serif">Dr. Montgomery</p>
      <ul className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-gray-400 hover:text-white transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">© 2024 Dr. Montgomery. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
