import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import StatsSection from '@/components/stats-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import CTASection from '@/components/cta-section'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  )
}
