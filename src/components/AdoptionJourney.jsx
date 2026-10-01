import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, PawPrint, ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';

// Section images (all user-provided)
import journeyBanner from '../assets/journey-banner.png'; // dog + cat + van
import step1Img      from '../assets/step1-cat.png';      // cartoon cat illustration
import step2Img      from '../assets/step2-dog.png';      // golden retriever waving paw
import step3Img      from '../assets/step3-house.png';    // pet house + plants
import step4Img      from '../assets/step4-pets.png';     // running dog + cat
import decoLeaves    from '../assets/deco-leaves.png';    // orange blob + leaves (bottom-left)
import decoPaws      from '../assets/deco-paws.png';      // green paw trail (bottom-right)

/* ==========================================
   ADOPTION JOURNEY SECTION
   Pixel-perfect match to reference:
   - Header: badge + heading + subtitle + banner image (top-right)
   - Numbered dashed progress line (1-2-3-4)
   - 4 step cards: Find Match | Apply & Meet | Prepare Home | Welcome Home
   - Active card (step 2) highlighted green border + pet image inside
   - Navigation arrows on active card
   - Footer: italic tagline + CTA button + 4 stats
   - Decorative: leaves blob (bottom-left) + paw trail (bottom-right)
   ========================================== */

/* ── Steps data ── */
const steps = [
  {
    num: 1,
    title: 'Find Your Match',
    desc:  'Explore pets and filter by age, size, energy, and more to find the one who fits your life.',
    img:   step1Img,
    imgAlt: 'Cute cartoon cat – Find Your Match',
  },
  {
    num: 2,
    title: 'Apply & Meet',
    desc:  'Submit an application and meet your potential companion in person or virtually.',
    img:   step2Img,
    imgAlt: 'Golden retriever waving paw – Apply & Meet',
  },
  {
    num: 3,
    title: 'Prepare Your Home',
    desc:  "We'll guide you with tips and a checklist to help you create a safe, comfortable space for your new pet.",
    img:   step3Img,
    imgAlt: 'Pet igloo house with plants – Prepare Your Home',
  },
  {
    num: 4,
    title: 'Welcome Home',
    desc:  'Bring your new best friend home and start a lifetime of love, trust, and tail wags.',
    img:   step4Img,
    imgAlt: 'Happy dog and cat running – Welcome Home',
  },
];

/* Stats */
const stats = [
  { icon: PawPrint, value: '500+', label: 'Pets Adopted',      color: 'text-green-500' },
  { icon: Heart,    value: '300+', label: 'Happy Families',    color: 'text-green-500' },
  { icon: () => <span className="text-green-500 font-bold text-base">✓</span>, value: '100%',  label: 'Safe & Loving Care', color: 'text-green-500' },
  { icon: MapPin,   value: 'Across', label: 'Pakistan 🇵🇰',   color: 'text-green-500' },
];

/* ── Main Component ── */
export default function AdoptionJourney() {
  const [activeStep, setActiveStep] = useState(1); // 0-indexed

  const prev = () => setActiveStep((s) => (s > 0 ? s - 1 : steps.length - 1));
  const next = () => setActiveStep((s) => (s < steps.length - 1 ? s + 1 : 0));

  return (
    <section
      id="how-it-works"
      className="relative bg-[#f5f3ee] pt-14 sm:pt-20 pb-0 overflow-hidden scroll-mt-20"
    >
      <span id="adoption-journey" className="sr-only" />
      <span id="process" className="sr-only" />
      <span id="faqs" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════
            TOP: heading (left) + banner (right)
            ══════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-12">

          {/* Left – heading block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-lg"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <PawPrint size={13} className="text-green-500" />
              <span className="text-sm font-semibold italic text-green-700">Adoption Journey</span>
              <Heart size={13} className="text-green-400 fill-green-300" />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900 mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Your Journey to<br />
              a{' '}
              <span className="text-green-500">Forever Friend</span>{' '}
              <Heart size={28} className="inline text-green-300 fill-green-200 -mt-1" />
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Adopting is simple, meaningful, and life-changing.<br />
              Here's how we make it easy for you and your new best friend.
            </p>

            {/* Dashed decorative line with paw */}
            <div className="flex items-center gap-2 mt-4 opacity-50">
              <svg width="120" height="10" viewBox="0 0 120 10" fill="none">
                <path d="M0 5 Q30 0 60 5 Q90 10 120 5" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="4 3" fill="none"/>
              </svg>
              <PawPrint size={13} className="text-green-400" />
            </div>
          </motion.div>

          {/* Right – banner image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:block w-[420px] xl:w-[480px] flex-shrink-0"
          >
            <img
              src={journeyBanner}
              alt="Happy dog and cat with vintage Mango Vans camper"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* ══════════════════════════════════
            NUMBERED PROGRESS LINE
            ══════════════════════════════════ */}
        <div className="relative flex items-center justify-center mb-6 px-4">
          {/* Dashed connecting line */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px border-t-2 border-dashed border-green-200 z-0" />

          <div className="relative z-10 flex items-center justify-between w-full max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(i)}
                className="flex flex-col items-center gap-1"
              >
                <motion.div
                  animate={activeStep === i
                    ? { scale: 1.15, backgroundColor: '#16a34a', color: '#fff', boxShadow: '0 0 0 4px #bbf7d0' }
                    : { scale: 1,    backgroundColor: '#fff',    color: '#6b7280', boxShadow: '0 0 0 2px #e5e7eb' }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 border-transparent"
                >
                  {step.num}
                </motion.div>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════
            STEP CARDS GRID
            ══════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <motion.div
                key={step.num}
                onClick={() => setActiveStep(i)}
                animate={isActive
                  ? { borderColor: '#16a34a', boxShadow: '0 0 0 2px #16a34a, 0 8px 32px rgba(22,163,74,0.12)' }
                  : { borderColor: '#e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }
                }
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl border-2 bg-white cursor-pointer overflow-hidden flex flex-col
                  ${isActive ? 'border-green-600' : 'border-gray-200'}
                `}
              >
                {/* Image area */}
                <div className={`relative w-full flex items-end justify-center overflow-hidden ${isActive ? 'bg-[#f0faf4]' : 'bg-[#fafaf8]'}`}
                  style={{ minHeight: '180px' }}
                >
                  <img
                    src={step.img}
                    alt={step.imgAlt}
                    className="w-full h-48 object-contain object-bottom"
                  />

                  {/* Nav arrows on active */}
                  {isActive && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <ChevronLeft size={14} className="text-gray-600" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <ChevronRight size={14} className="text-gray-600" />
                      </button>
                    </>
                  )}
                </div>

                {/* Card content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3
                    className="text-base font-bold text-gray-900 mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">
                    {step.desc}
                  </p>

                  {/* Learn More button on active */}
                  {isActive && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 bg-green-700 hover:bg-green-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                    >
                      Learn More
                      <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <ArrowRight size={11} />
                      </span>
                    </motion.button>
                  )}
                </div>

                {/* Dot indicator */}
                <div className="flex items-center justify-center gap-1 pb-3">
                  {steps.map((_, di) => (
                    <span
                      key={di}
                      className={`rounded-full transition-all duration-300 ${
                        di === i
                          ? (isActive ? 'w-2 h-2 bg-green-600' : 'w-2 h-2 bg-gray-300')
                          : 'w-1.5 h-1.5 bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ══════════════════════════════════
            FOOTER: tagline + CTA + stats
            ══════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-5 pb-14 sm:pb-20"
        >
          {/* Tagline */}
          <p className="flex items-center gap-2 text-gray-600 text-sm sm:text-base italic font-medium">
            <Heart size={14} className="text-green-400 fill-green-300" />
            Thousands of happy tails. Yours could be next.
            <Heart size={14} className="text-green-400 fill-green-300" />
          </p>

          {/* CTA button */}
          <motion.a
            href="#adopt"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(22,163,74,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg shadow-green-200 transition-colors text-sm sm:text-base"
          >
            Start Your Adoption Journey
            <ArrowRight size={16} />
          </motion.a>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-3">
            {[
              {
                icon: PawPrint,
                iconColor: 'text-[#275d33]',
                bgColor: 'bg-[#ebf3ec]',
                value: '500+',
                label: 'Pets Adopted'
              },
              {
                icon: Heart,
                iconColor: 'text-rose-500 fill-rose-500/20',
                bgColor: 'bg-rose-50',
                value: '300+',
                label: 'Happy Families'
              },
              {
                icon: ShieldCheck,
                iconColor: 'text-[#275d33]',
                bgColor: 'bg-[#ebf3ec]',
                value: '100%',
                label: 'Safe & Loving Care'
              },
              {
                icon: MapPin,
                iconColor: 'text-amber-600',
                bgColor: 'bg-amber-50',
                value: 'Across',
                label: 'Pakistan PK'
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl ${s.bgColor} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={s.iconColor} />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-extrabold text-gray-900 leading-none">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════
          DECORATIVE IMAGES (bottom)
          ══════════════════════════════════ */}
      {/* Bottom-left: orange blob + leaves */}
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 pointer-events-none select-none">
        <img src={decoLeaves} alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Bottom-right: paw print trail */}
      <div className="absolute bottom-0 right-0 w-44 sm:w-60 pointer-events-none select-none">
        <img src={decoPaws} alt="" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
}
