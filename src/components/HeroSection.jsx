import { motion } from 'framer-motion';
import { PawPrint, Heart, Home, ArrowRight, ShieldCheck } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

/* ==========================================
   HERO SECTION COMPONENT
   - Full-viewport background image
   - Text content animates in with stagger
   - Floating stat cards at bottom
   - Pet profile cards (Buddy & Luna)
   - Floating label badges (Adopt, Boarding)
   - Fully responsive
   ========================================== */

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

/* Stat items */
const stats = [
  { icon: PawPrint, value: '500+', label: 'Pets Adopted', color: 'text-green-500' },
  { icon: Heart, value: '300+', label: 'Happy Families', color: 'text-rose-400' },
  { icon: Home, value: '100+', label: 'Pets Boarded', color: 'text-blue-400' },
  { icon: ShieldCheck, value: '100%', label: 'Safe & Loving Care', color: 'text-amber-400' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="A golden retriever and cat resting together"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        {/* Bottom gradient for stats bar */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-36 lg:pb-44">

        {/* ── Tagline badge ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="flex items-center gap-4 mb-5"
        >
          <span className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
            <PawPrint size={14} className="text-green-400" />
            Real Homes
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
            <Heart size={13} className="text-rose-400 fill-rose-400" />
            Happy Tails
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-2xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Every Paw Deserves
          <br />
          a Place to Call{' '}
          <span className="text-green-400 relative inline-block">
            Home.
            {/* underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
              className="absolute -bottom-1 left-0 right-0 h-1.5 bg-green-400/40 rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* ── Sub-description ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-5 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
        >
          Meet loving dogs and cats looking for their forever families —
          while giving your own pets a safe, caring place to stay.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="flex flex-wrap gap-4 mt-8"
        >
          {/* Primary CTA */}
          <motion.a
            href="#adopt"
            whileHover={{ scale: 1.06, boxShadow: '0 12px 32px rgba(34,197,94,0.45)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-green-500/30 transition-all text-sm sm:text-base"
          >
            <PawPrint size={17} />
            Find a Pet
            <ArrowRight size={15} />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#boarding"
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all text-sm sm:text-base"
          >
            <Home size={17} />
            Explore Boarding
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>

      {/* ── Floating Pet Profile Card – Buddy (top-right area) ── */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate="show"
        custom={0.7}
        className="absolute top-[22%] right-4 sm:right-10 lg:right-24 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-white/60"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-green-400">
            <img src={heroBg} alt="Buddy" className="w-full h-full object-cover object-top scale-150" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-gray-900">Buddy</span>
              <Heart size={12} className="text-rose-400 fill-rose-400" />
            </div>
            <span className="text-xs text-gray-500">2 years · Male</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Floating Pet Profile Card – Luna (middle-right) ── */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate="show"
        custom={0.9}
        className="absolute top-[45%] right-4 sm:right-6 lg:right-14 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
          className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-white/60"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-rose-400">
            <img src={heroBg} alt="Luna" className="w-full h-full object-cover object-right scale-150" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-gray-900">Luna</span>
              <Heart size={12} className="text-rose-400 fill-rose-400" />
            </div>
            <span className="text-xs text-gray-500">1 year · Female</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Floating Badge – Adopt ── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        custom={1.0}
        className="absolute bottom-[28%] left-6 sm:left-12 z-20 hidden md:flex flex-col items-start"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50"
        >
          <div className="flex items-center gap-2 text-green-600 font-bold text-sm italic mb-0.5">
            <PawPrint size={13} />
            Adopt
          </div>
          <div className="text-xs text-gray-500">Change a life<br />forever</div>
        </motion.div>
        {/* arrow decoration */}
        <svg className="ml-6 -mt-1" width="28" height="24" viewBox="0 0 28 24" fill="none">
          <path d="M4 4 Q14 0 24 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M20 10 L24 12 L22 16" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* ── Floating Badge – Boarding ── */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        animate="show"
        custom={1.1}
        className="absolute bottom-[38%] right-4 sm:right-8 lg:right-20 z-20 hidden lg:flex flex-col items-end"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50 text-right"
        >
          <div className="flex items-center justify-end gap-2 text-blue-500 font-bold text-sm italic mb-0.5">
            Boarding
            <Home size={13} />
          </div>
          <div className="text-xs text-gray-500">Safe stays,<br />happy pets</div>
        </motion.div>
      </motion.div>

      {/* ── Stats Bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl sm:rounded-3xl px-4 py-4 sm:px-8 sm:py-5"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={17} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
                    <div className="text-white/65 text-xs mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
