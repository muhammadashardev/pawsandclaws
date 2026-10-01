import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Home,
  PawPrint,
  Stethoscope,
  Handshake,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  ArrowRight
} from 'lucide-react';

// Cropped high-fidelity assets from user reference
import mainBannerImg from '../assets/why-adopt-main.jpg';
import thumb1 from '../assets/why-adopt-thumb1.jpg';
import thumb2 from '../assets/why-adopt-thumb2.jpg';
import thumb3 from '../assets/why-adopt-thumb3.jpg';
import thumb4 from '../assets/why-adopt-thumb4.jpg';

/* ==========================================
   WHY ADOPT FROM US SECTION
   Pixel-perfect match to user reference design:
   - Header badge with leaves & heart
   - Bold title: "More Than an Adoption — A Second Chance ♡"
   - 5 Accordion items (interactive expand/collapse)
   - Image Showcase Carousel with prev/next arrows & 6 dots
   - 4 Thumbnails with interactive click-to-view
   - Stats row (500+ Pets, 300+ Families, 100% Safe, Across Pakistan)
   - Bottom CTA: "Be Their Second Chance →"
   - Subtle decorative paw tracks
   ========================================== */

const accordionItems = [
  {
    id: 1,
    title: 'Giving animals a second chance',
    description: 'Every pet deserves love. Adoption gives them a chance at a happy, healthy life.',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Focused on finding suitable forever homes',
    description: 'We take the time to understand each pet and match them with the perfect family.',
    icon: Home,
  },
  {
    id: 3,
    title: 'Dedicated animal care',
    description: 'Our pets receive the best care, from proper nutrition to medical attention and more.',
    icon: PawPrint,
  },
  {
    id: 4,
    title: 'Support throughout the adoption process',
    description: "We're here to guide and support you every step of the way.",
    icon: Stethoscope,
  },
  {
    id: 5,
    title: 'Helping people and pets find the right match',
    description: 'We believe the right match creates happier homes and stronger bonds.',
    icon: Handshake,
  },
];

const gallerySlides = [
  {
    id: 0,
    image: mainBannerImg,
    alt: 'Golden retriever and striped cat sitting together in adoption center',
    quote: 'Every adoption writes a better tomorrow.',
  },
  {
    id: 1,
    image: thumb1,
    alt: 'Golden retriever looking playfully over green picket fence',
    quote: 'Finding forever homes with love.',
  },
  {
    id: 2,
    image: thumb2,
    alt: 'Outdoor playground and exercise yard for rescued pets',
    quote: 'Safe spaces to run, play, and heal.',
  },
  {
    id: 3,
    image: thumb3,
    alt: 'Cozy cat room with multi-level wooden climbing trees',
    quote: 'Comfortable environments crafted with care.',
  },
  {
    id: 4,
    image: thumb4,
    alt: 'Volunteer caregiver gently holding an adopted rescue cat',
    quote: 'Dedicated hands, endless compassion.',
  },
  {
    id: 5,
    image: mainBannerImg,
    alt: 'Loving pets waiting for a second chance',
    quote: 'Every adoption writes a better tomorrow.',
  },
];

const thumbnails = [
  { id: 1, image: thumb1, alt: 'Dog peeking over fence' },
  { id: 2, image: thumb2, alt: 'Shelter playground yard' },
  { id: 3, image: thumb3, alt: 'Cat room with climbing trees' },
  { id: 4, image: thumb4, alt: 'Volunteer cuddling rescue cat' },
];

export default function WhyAdoptFromUs() {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  return (
    <section className="relative bg-[#f7f6f2] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Main 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#3b6e4d] font-medium text-sm flex items-center gap-1.5 font-['Caveat',cursive] text-lg sm:text-xl">
                <span className="text-[#3b6e4d] font-bold">\\</span>
                Why Adopt From Us
                <span className="text-[#3b6e4d] font-bold">\\</span>
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#3b6e4d] inline-block -rotate-12"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#161c16] leading-[1.18] mb-4">
              More Than an Adoption — <br className="hidden sm:block" />
              <span className="text-[#2b6140] inline-flex items-center gap-2">
                A Second Chance
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2b6140"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 sm:w-8 sm:h-8 inline-block"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-xl font-['Inter',sans-serif]">
              When you adopt from us, you're not just bringing a pet home — you're changing a life forever.
            </p>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {accordionItems.map((item) => {
                const isOpen = activeAccordion === item.id;
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    onClick={() => toggleAccordion(item.id)}
                    className={`rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isOpen
                        ? 'bg-[#eef4ea] border-[#d8e7d2] shadow-sm'
                        : 'bg-[#faf9f5] border-[#eae9e2] hover:bg-white hover:border-[#dfded5]'
                    }`}
                  >
                    <div className="p-4 sm:p-4.5 flex items-center justify-between gap-4">
                      {/* Left Icon + Text */}
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-[#dcecd4] text-[#2b6140]'
                              : 'bg-[#eef3eb] text-[#36663f]'
                          }`}
                        >
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1f2937] leading-snug">
                            {item.title}
                          </h3>
                          {/* Animated description */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-['Inter',sans-serif]">
                                  {item.description}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Right Chevron Button */}
                      <div className="shrink-0">
                        {isOpen ? (
                          <div className="w-8 h-8 rounded-full bg-[#2b6140] text-white flex items-center justify-center shadow-sm">
                            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center">
                            <ChevronDown className="w-4 h-4 stroke-[2]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-4.5"
          >
            {/* Top Showcase Image Slider */}
            <div className="relative rounded-[26px] overflow-hidden shadow-md bg-white border border-[#e8ece3] aspect-[16/10.8] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={gallerySlides[currentSlide].image}
                    alt={gallerySlides[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark subtle gradient overlay at bottom for readable text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                  {/* Handwritten quote on bottom-left */}
                  <div className="absolute bottom-5 left-6 pointer-events-none">
                    <p className="text-white font-['Caveat',cursive] text-2xl sm:text-3xl leading-snug drop-shadow-md flex items-center gap-2">
                      <span>{gallerySlides[currentSlide].quote}</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#86efac"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 inline-block"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 z-10"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 z-10"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Pagination Dots (6 dots matching reference) */}
            <div className="flex items-center justify-center gap-1.5 my-1">
              {gallerySlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'w-2.5 h-2.5 bg-[#2b6140]'
                      : 'w-2 h-2 bg-[#d7decb] hover:bg-[#b8c2ab]'
                  }`}
                />
              ))}
            </div>

            {/* 4 Thumbnails Row */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
              {thumbnails.map((thumb) => {
                const isSelected = currentSlide === thumb.id;
                return (
                  <motion.button
                    key={thumb.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCurrentSlide(thumb.id)}
                    className={`relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] border-2 transition-all shadow-sm ${
                      isSelected
                        ? 'border-[#2b6140] ring-2 ring-[#2b6140]/30'
                        : 'border-transparent hover:border-[#2b6140]/40'
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Stats Row Banner */}
            <div className="rounded-2xl bg-[#ecf3e7] border border-[#d8e6d2] p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
              {/* Stat 1: Pets Adopted */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2b6140] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <PawPrint className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="font-extrabold text-[#111827] text-base sm:text-lg leading-tight">
                    500+
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium">
                    Pets Adopted
                  </div>
                </div>
              </div>

              {/* Stat 2: Happy Families */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f39c12] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="font-extrabold text-[#111827] text-base sm:text-lg leading-tight">
                    300+
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium">
                    Happy Families
                  </div>
                </div>
              </div>

              {/* Stat 3: Safe & Loved */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2b6140] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-[#111827] text-base sm:text-lg leading-tight">
                    100%
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium">
                    Safe & Loved
                  </div>
                </div>
              </div>

              {/* Stat 4: Across Pakistan */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e76f51] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-[#111827] text-base sm:text-lg leading-tight">
                    Across
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 font-medium flex items-center gap-1">
                    <span>Pakistan</span>
                    <span role="img" aria-label="Pakistan flag">🇵🇰</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM CTA & DECORATIVE TRACK ================= */}
        <div className="relative mt-14 sm:mt-16 flex flex-col items-center justify-center">
          {/* Left decorative paw path */}
          <div className="absolute left-0 bottom-1 hidden md:flex items-center gap-3 opacity-70 pointer-events-none">
            <svg width="140" height="40" viewBox="0 0 140 40" fill="none" className="text-[#a8c59f]">
              <path
                d="M 5 35 Q 40 5, 80 25 T 130 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
            <PawPrint className="w-5 h-5 text-[#88b07d] rotate-12 -ml-3" />
          </div>

          {/* Centered CTA Pill Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2b6140] hover:bg-[#235336] text-white font-medium text-base shadow-lg shadow-green-900/15 transition-all duration-300 z-10"
          >
            <PawPrint className="w-5 h-5 text-white/90 fill-current" />
            <span>Be Their Second Chance</span>
            <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          {/* Right decorative heart and paw path */}
          <div className="absolute right-0 bottom-1 hidden md:flex items-center gap-3 opacity-70 pointer-events-none">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a8c59f"
              strokeWidth="2"
              className="w-4 h-4 rotate-12"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg width="140" height="40" viewBox="0 0 140 40" fill="none" className="text-[#a8c59f]">
              <path
                d="M 10 20 Q 50 35, 90 10 T 135 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
              />
            </svg>
            <PawPrint className="w-5 h-5 text-[#88b07d] -rotate-12 -ml-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
