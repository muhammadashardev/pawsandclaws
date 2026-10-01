import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  PawPrint,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Play
} from 'lucide-react';

// Boarding section assets
import boardingMain from '../assets/boarding-main.png';
import boardingStay from '../assets/boarding-stay.png';
import boardingCare from '../assets/boarding-care.png';
import boardingActivity from '../assets/boarding-activity.png';
import boardingPeace from '../assets/boarding-peace.png';

// Video / photo gallery thumbnails
import thumb1 from '../assets/boarding-thumb1.png';
import thumb2 from '../assets/boarding-thumb2.png';
import thumb3 from '../assets/boarding-thumb3.png';
import thumb4 from '../assets/boarding-thumb4.png';

// Avatar icons for "Trusted by 1,200+ pet parents"
import avatar1 from '../assets/puppy.jpg';
import avatar2 from '../assets/buddy.jpg';
import avatar3 from '../assets/max.jpg';
import avatar4 from '../assets/luna.jpg';

/* ==========================================
   BOARDING SERVICES SECTION
   Pixel-perfect match to user reference design:
   - Header badge: "🐾 Boarding Services ♡"
   - Headline: "A Safe Place While You're Away ♡"
   - Description + Trusted by 1,200+ pet parents (4 pet avatars + 5 stars)
   - Large showcase card with "100% Safe & Secure" badge & prev/next buttons
   - 4 Feature cards:
     1. Comfortable Stay
     2. Personal Care
     3. Daily Activity
     4. Peace of Mind
   - Bottom showcase bar:
     - Left: "Happy pets, happy hearts"
     - Center: 4 Video/photo thumbnails with play button + 5 pagination dots
     - Right: "🐾 Explore Boarding →" + "Clean. Safe. Caring. Every stay."
   ========================================== */

const featureCards = [
  {
    id: 1,
    image: boardingStay,
    alt: 'Comfortable Stay – A safe environment designed around your pet’s needs.',
  },
  {
    id: 2,
    image: boardingCare,
    alt: 'Personal Care – Care and attention from people who genuinely love animals.',
  },
  {
    id: 3,
    image: boardingActivity,
    alt: 'Daily Activity – Keeping pets comfortable, active and engaged during their stay.',
  },
  {
    id: 4,
    image: boardingPeace,
    alt: 'Peace of Mind – Know that your pet is being cared for while you’re away.',
  },
];

const videoThumbs = [
  { id: 1, image: thumb1, title: 'Playful Dog with Ball' },
  { id: 2, image: thumb2, title: 'Relaxed Cat on Tree' },
  { id: 3, image: thumb3, title: 'Outdoor Play Garden' },
  { id: 4, image: thumb4, title: 'Cozy Private Suite' },
];

export default function BoardingServices() {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="relative bg-[#f7f6f2] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION (2 COLUMNS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LEFT: Text, Subtitle, and Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#3b6e4d] font-semibold text-sm flex items-center gap-1.5 font-['Caveat',cursive] text-xl">
                <PawPrint className="w-4 h-4 fill-current inline-block" />
                Boarding Services
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#3b6e4d] inline-block -rotate-12"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#161c16] leading-[1.15] mb-4">
              A Safe Place <br className="hidden sm:block" />
              <span className="text-[#2b6140] inline-flex items-center gap-2">
                While
                <span className="text-[#161c16] ml-2">You're Away</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2b6140"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 sm:w-8 sm:h-8 inline-block ml-1"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-xl font-['Inter',sans-serif]">
              Going away doesn't mean your pet has to miss out on comfort and care. Our boarding service provides a safe, caring environment where your pet can feel at home while you're away.
            </p>

            {/* Social Proof Row */}
            <div className="flex items-center gap-4 pt-1">
              {/* Pet Avatars */}
              <div className="flex items-center -space-x-2.5">
                {[avatar1, avatar2, avatar3, avatar4].map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="Pet parent avatar"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>

              {/* Rating Text */}
              <div>
                <div className="text-sm font-semibold text-[#1f2937]">
                  Trusted by 1,200+ pet parents
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1f2937]">
                  <div className="flex items-center text-[#2b6140]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Large Boarding Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-md border border-[#e5ebe0] bg-white group">
              <img
                src={boardingMain}
                alt="Paw Home Pet Boarding – dog and cat cozy in fluffy bed"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= MIDDLE ROW: 4 FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-between cursor-pointer group"
            >
              <div className="w-full rounded-2xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM ROW: VIDEO STRIP & CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[26px] bg-[#ecf3e7] border border-[#d8e6d2] p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Left: Info */}
          <div className="flex flex-col gap-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#2b6140] font-bold text-base sm:text-lg">
              <PawPrint className="w-5 h-5 fill-current" />
              <span>Happy pets, happy hearts</span>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm font-['Inter',sans-serif] max-w-xs">
              Clean spaces, loving care and tail-wagging adventures – every day.
            </p>
          </div>

          {/* Center: 4 Thumbnails with Play overlay */}
          <div className="flex flex-col items-center gap-2.5">
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
              {videoThumbs.map((item, idx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveThumb(idx)}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] w-16 sm:w-20 md:w-24 shadow-sm cursor-pointer group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/95 text-gray-800 flex items-center justify-center shadow-md">
                      <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5 text-gray-800" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 5 Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-1">
              {[0, 1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`rounded-full transition-all duration-300 ${
                    dot === 0
                      ? 'w-2.5 h-2.5 bg-[#2b6140]'
                      : 'w-2 h-2 bg-[#d7decb]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex flex-col items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#2b6140] hover:bg-[#235336] text-white font-medium text-sm sm:text-base shadow-md shadow-green-900/15 transition-all duration-300"
            >
              <PawPrint className="w-4 h-4 fill-current text-white/90" />
              <span>Explore Boarding</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-600 font-['Inter',sans-serif]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2b6140]" />
              <span>Clean. Safe. Caring. Every stay.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
