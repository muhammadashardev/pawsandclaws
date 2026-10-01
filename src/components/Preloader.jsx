import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint, Heart, Sparkles } from 'lucide-react';

/* ==========================================
   PROFESSIONAL BRANDED PRELOADER
   - Elegant pet paws step sequence animation
   - Smooth numeric percentage counter (0 → 100%)
   - Sleek animated progress bar with shimmer effect
   - Wholesome rotating shelter status messages
   - Smooth curtain exit reveal animation
   ========================================== */

const statusMessages = [
  { at: 0, text: 'Warming up cozy shelter beds...' },
  { at: 28, text: 'Preparing healthy treats & toys...' },
  { at: 55, text: 'Gathering happy paws & loving hearts...' },
  { at: 82, text: 'Finding your forever companions...' },
  { at: 98, text: 'Welcome to PawHome! ♡' },
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(statusMessages[0].text);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scrolling during load
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const duration = 2100; // ~2.1 seconds for luxurious, smooth loading feel

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      
      // Smooth non-linear curve for authentic feel
      const ease = Math.round(rawProgress);
      setProgress(ease);

      // Update status message based on percentage
      for (let i = statusMessages.length - 1; i >= 0; i--) {
        if (ease >= statusMessages[i].at) {
          setStatusText(statusMessages[i].text);
          break;
        }
      }

      if (ease >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 350);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Custom smooth cubic-bezier curtain reveal
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#faf9f5] overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]"
        >
          {/* Subtle ambient glowing background orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-200/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />

          {/* Central Branded Card */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
            
            {/* Glowing Logo Icon Container */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 220 }}
              className="relative mb-6"
            >
              {/* Outer soft pulse ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-400/25 to-green-500/25 blur-lg animate-ping opacity-60" />

              {/* Main Badge */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2ecc71] to-[#1e7e34] flex items-center justify-center shadow-xl shadow-green-600/20 border border-white/40">
                <PawPrint className="w-10 h-10 text-white animate-bounce" style={{ animationDuration: '1.4s' }} />
                
                {/* Mini Heart Badge on top right */}
                <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border border-green-100">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mb-1"
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#161c16]">
                Paw<span className="text-[#27ae60]">Home</span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-8 flex items-center gap-1.5 justify-center"
            >
              <span>Adopt</span>
              <span className="text-emerald-500">•</span>
              <span>Board</span>
              <span className="text-emerald-500">•</span>
              <span>Give Love</span>
            </motion.p>

            {/* Playful Animated Paw Steps Sequence */}
            <div className="flex items-center justify-center gap-3 mb-6">
              {[0, 1, 2, 3].map((index) => {
                const isActive = (progress % 100) > index * 22;
                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: isActive ? [1, 1.25, 1] : 0.85,
                      opacity: isActive ? 1 : 0.25,
                      y: index % 2 === 0 ? -3 : 3,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 0.4,
                      delay: index * 0.15,
                    }}
                    className={`p-2 rounded-xl transition-colors duration-300 ${
                      isActive ? 'text-[#27ae60] bg-green-50' : 'text-gray-300 bg-gray-50'
                    }`}
                  >
                    <PawPrint className="w-4 h-4 fill-current transform -rotate-12" />
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-xs relative mb-3">
              {/* Background Track */}
              <div className="w-full h-2.5 bg-[#e8ede3] rounded-full overflow-hidden p-0.5 shadow-inner">
                {/* Animated Gradient Bar */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#27ae60] to-[#1e8449] relative shadow-sm"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                >
                  {/* Glowing shimmer beam */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]" />
                </motion.div>
              </div>

              {/* Counter Pill */}
              <div className="flex items-center justify-between mt-2.5 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-[#27ae60] font-semibold text-[13px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Loading experience
                </span>
                <span className="font-mono font-bold text-gray-700 bg-white px-2 py-0.5 rounded-md border border-gray-200 shadow-xs">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Dynamic Status Text */}
            <motion.p
              key={statusText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="text-xs sm:text-sm text-gray-500 italic font-['Caveat',cursive] text-lg sm:text-xl text-[#3b6e4d] h-7 mt-1"
            >
              {statusText}
            </motion.p>
          </div>

          {/* Bottom subtle copyright / branding note */}
          <div className="absolute bottom-6 text-[11px] text-gray-400 font-medium tracking-wide">
            Pakistan's Premier Pet Care & Adoption Platform
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
