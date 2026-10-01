import { motion } from 'framer-motion';
import {
  PawPrint,
  Heart,
  Home,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';


import ctaPets from '../assets/cta-pets-banner.png';
import leavesImage from '../assets/boarding-enquiry-leaves.png';

export default function Footer() {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Adopt', href: '#adopt' },
    { name: 'Dogs', href: '#dogs' },
    { name: 'Cats', href: '#cats' },
    { name: 'Boarding', href: '#boarding' },
    { name: 'Contact', href: '#contact' },
    { name: 'Donate', href: '#donate' },
  ];

  const moreInfoLinks = [
    { name: 'Success Stories', href: '#stories' },
    { name: 'Blog', href: '#blog' },
    { name: 'Adoption Process', href: '#process' },
    { name: 'Adoption FAQs', href: '#faqs' },
    { name: 'Boarding Services', href: '#boarding' },
    { name: 'Our Facilities', href: '#facilities' },
    { name: 'Rates & Packages', href: '#rates' },
  ];

  return (
    <footer className="font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ==============================================================
          PART 1: CTA BANNER ("Ready to Change a Life?")
         ============================================================== */}
      <section className="relative bg-[#FAF7F0] pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-stone-200/60">
        
        {/* Decorative botanical leaves branch on bottom-left */}
        <div className="absolute bottom-0 left-0 pointer-events-none z-10 hidden sm:block w-36 sm:w-44 lg:w-52 select-none opacity-95">
          <img
            src={leavesImage}
            alt="Decorative leaves"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Decorative background paw watermarks top-right */}
        <div className="absolute top-8 right-12 pointer-events-none opacity-[0.08] select-none text-[#275d33]">
          <div className="flex gap-3">
            <PawPrint className="w-14 h-14 -rotate-12" />
            <PawPrint className="w-10 h-10 rotate-12 mt-3" />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Badge: \\ Ready to ♡ */}
              <div className="inline-flex items-center gap-2 mb-3 text-[#275d33]">
                <span className="text-xl font-bold select-none">\ \</span>
                <span className="font-serif italic text-2xl sm:text-3xl text-[#275d33] font-medium">
                  Ready to
                </span>
                <svg
                  className="w-6 h-6 text-[#275d33] stroke-current fill-none stroke-[2]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#19231b] leading-[1.08] tracking-tight">
                Change a{' '}
                <span className="font-serif italic text-[#275d33]">Life?</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed max-w-md">
                Whether you&apos;re looking for your next family member or a safe place for your pet to stay, we&apos;re here to help.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                {/* Button 1: Find a Pet */}
                <a
                  href="#adopt"
                  className="inline-flex items-center gap-3 bg-[#275d33] hover:bg-[#1e4828] active:scale-[0.98] text-white font-semibold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-[0_6px_20px_rgba(39,93,51,0.25)] hover:shadow-[0_10px_28px_rgba(39,93,51,0.35)] transition-all cursor-pointer"
                >
                  <PawPrint className="w-5 h-5 fill-white" />
                  <span>Find a Pet</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Button 2: Explore Boarding */}
                <a
                  href="#boarding"
                  className="inline-flex items-center gap-3 bg-white/90 hover:bg-white active:scale-[0.98] text-stone-800 border border-stone-300 hover:border-stone-400 font-semibold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <Home className="w-5 h-5 text-[#275d33]" />
                  <span>Explore Boarding</span>
                  <ArrowRight className="w-4 h-4 text-stone-600" />
                </a>
              </div>
            </motion.div>

            {/* Right Pets Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex justify-center lg:justify-end select-none relative"
            >
              <div className="w-full max-w-[480px] lg:max-w-[540px]">
                <img
                  src={ctaPets}
                  alt="Golden retriever and cat cozy on a cushion"
                  className="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ==============================================================
          PART 2: MAIN 4-COLUMN FOOTER
         ============================================================== */}
      <div className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200/80">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Column 1: Brand Info & Mission (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
              {/* Brand Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-[#275d33] text-white flex items-center justify-center shadow-sm">
                    <PawPrint className="w-6 h-6 fill-white" />
                  </div>
                  {/* Floating outline heart doodle over roof */}
                  <svg
                    className="absolute -top-2 -right-2 w-4 h-4 text-[#275d33] stroke-current fill-none stroke-[2]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-stone-900 leading-tight tracking-tight">
                    Paw Home
                  </h3>
                  <span className="text-xs font-bold text-[#275d33] tracking-wide block uppercase">
                    Rescue. Care. Love.
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-stone-600 text-sm leading-relaxed mb-6 max-w-sm">
                A safe haven for pets in need and a trusted home away from home.
              </p>

              {/* Donate Button */}
              <a
                href="#donate"
                className="inline-flex items-center gap-2.5 bg-[#275d33] hover:bg-[#1e4828] text-white font-semibold text-sm py-3 px-6 rounded-full shadow-sm hover:shadow transition-all cursor-pointer mb-7"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Social Media Row */}
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-[#f4f7f4] hover:bg-[#ebf3ec] text-[#275d33] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#f4f7f4] hover:bg-[#ebf3ec] text-[#275d33] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-[#f4f7f4] hover:bg-[#ebf3ec] text-[#275d33] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-[#f4f7f4] hover:bg-[#ebf3ec] text-[#275d33] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* TikTok custom icon */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-full bg-[#f4f7f4] hover:bg-[#ebf3ec] text-[#275d33] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.41a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.47 6.27 6.27 0 0 0 1.96-4.52V9.04a8.28 8.28 0 0 0 5.2 1.83V7.42a4.84 4.84 0 0 1-1.4-.73z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-[#275d33]">
                <PawPrint className="w-4 h-4 fill-current" />
                <h4 className="text-base font-bold text-stone-900">Quick Links</h4>
              </div>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-stone-600 hover:text-[#275d33] text-sm flex items-center gap-1.5 transition-all group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#275d33] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: More Info (3 cols) */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4 text-[#275d33]">
                <Heart className="w-4 h-4 stroke-[2]" />
                <h4 className="text-base font-bold text-stone-900">More Info</h4>
              </div>
              <ul className="space-y-2.5">
                {moreInfoLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-stone-600 hover:text-[#275d33] text-sm flex items-center gap-1.5 transition-all group"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#275d33] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Opening Hours & Location (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Opening Hours */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-[#275d33]">
                  <Clock className="w-4 h-4 stroke-[2]" />
                  <h4 className="text-base font-bold text-stone-900">Opening Hours</h4>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                  <div className="flex justify-between max-w-[240px]">
                    <span className="font-medium text-stone-700">Mon – Fri</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-[240px]">
                    <span className="font-medium text-stone-700">Sat</span>
                    <span>10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-[240px]">
                    <span className="font-medium text-stone-700">Sun</span>
                    <span className="text-stone-500 font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Our Location */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#275d33]">
                  <MapPin className="w-4 h-4 stroke-[2]" />
                  <h4 className="text-base font-bold text-stone-900">Our Location</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  123 Paw Home Road, Green Acres, Lahore, Punjab 54000, Pakistan
                </p>

                {/* Contact phone & email */}
                <div className="mt-3.5 space-y-2 text-xs sm:text-sm">
                  <a
                    href="tel:+923001234567"
                    className="flex items-center gap-2 text-stone-700 hover:text-[#275d33] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#275d33]" />
                    <span>+92 300 1234567</span>
                  </a>
                  <a
                    href="mailto:info@pawhome.com"
                    className="flex items-center gap-2 text-stone-700 hover:text-[#275d33] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#275d33]" />
                    <span>info@pawhome.com</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* ==============================================================
          PART 3: COPYRIGHT & LEGAL BAR (Deep Forest Green)
         ============================================================== */}
      <div className="bg-[#1b3a24] text-white/80 py-5 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          
          {/* Left: Copyright */}
          <div>
            &copy; 2025 Paw Home. All rights reserved.
          </div>

          {/* Center: Subtle paw watermark */}
          <div className="hidden md:flex items-center gap-3 opacity-15 pointer-events-none select-none text-white">
            <PawPrint className="w-5 h-5 -rotate-12" />
            <PawPrint className="w-4 h-4 rotate-12" />
          </div>

          {/* Right: Privacy & Terms + Heart Doodle */}
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="opacity-40">|</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            {/* Outlined heart doodle */}
            <svg
              className="w-5 h-5 text-[#88b08e] stroke-current fill-none stroke-[2]"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

        </div>
      </div>

    </footer>
  );
}
