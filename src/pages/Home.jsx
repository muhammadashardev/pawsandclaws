import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedAnimals from '../components/FeaturedAnimals';
import FindCompanion from '../components/FindCompanion';
import AdoptionJourney from '../components/AdoptionJourney';
import WhyAdoptFromUs from '../components/WhyAdoptFromUs';
import BoardingServices from '../components/BoardingServices';
import BoardingEnquiry from '../components/BoardingEnquiry';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

/* ==========================================
   HOME PAGE
   - Header (fixed/sticky)
   - HeroSection (full viewport background)
   - ServicesSection (3 service cards)
   - FeaturedAnimals (4 pet adoption cards)
   - FindCompanion (filter + results panel)
   - AdoptionJourney (4 step process with interactive cards)
   - WhyAdoptFromUs (accordion, carousel, stats, CTA)
   - BoardingServices (A Safe Place While You're Away)
   - BoardingEnquiry (Planning Your Pet's Stay? Form)
   - Testimonials (From Shelter to Forever Home)
   - Footer (CTA: Ready to Change a Life? + 4-Col Footer)
   ========================================== */

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed header overlays the hero */}
      <Header />

      {/* Hero Section – full viewport */}
      <HeroSection />

      {/* Services – Adopt a Dog, Adopt a Cat, Pet Boarding */}
      <ServicesSection />

      {/* Featured Animals – 4 pet cards with Meet + Adopt buttons */}
      <FeaturedAnimals />

      {/* Find Your Perfect Companion – interactive filter + results */}
      <FindCompanion />

      {/* Adoption Journey – 4 step process with interactive cards */}
      <AdoptionJourney />

      {/* Why Adopt From Us – More Than an Adoption, A Second Chance */}
      <WhyAdoptFromUs />

      {/* Boarding Services – A Safe Place While You're Away */}
      <BoardingServices />

      {/* Boarding Enquiry – Planning Your Pet's Stay? */}
      <BoardingEnquiry />

      {/* Testimonials – From Shelter to Forever Home */}
      <Testimonials />

      {/* Footer – Ready to Change a Life? & Footer Navigation */}
      <Footer />
    </main>
  );
}
