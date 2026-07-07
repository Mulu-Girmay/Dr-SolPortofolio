import "./styles/globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Fouter";
import Hero from "./components/Sections/Hero";
import Stats from "./components/Sections/Stats";
import About from "./components/Sections/About";
import Services from "./components/Sections/Services";
import CTA from "./components/Sections/CTA";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
