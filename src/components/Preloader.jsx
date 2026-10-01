import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrint, Heart, Sparkles, ArrowRight } from 'lucide-react';

/* ==========================================
   DELIGHTFUL RUNNING DOG PRELOADER
   - Energetic animated running puppy chasing a golden treat
   - Leg swinging, ear flapping, tail wagging running cycle
   - Animated dust puffs and moving grass dashes
   - Smooth numeric progress percentage (0 → 100%)
   - Wholesome pet shelter status messages
   - Smooth curtain exit reveal
   ========================================== */

const statusMessages = [
  { at: 0, text: 'Warming up cozy shelter beds & wagging tails...' },
  { at: 26, text: 'Fetching healthy treats & bouncy balls...' },
  { at: 52, text: 'Finding loving families & gentle companions...' },
  { at: 80, text: 'Getting everything ready for you...' },
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
    const duration = 2300; // ~2.3 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      const ease = Math.round(rawProgress);
      setProgress(ease);

      // Update status text
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
        }, 380);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
    document.body.style.overflow = '';
    if (onComplete) onComplete();
  };

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
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1], // Smooth curtain reveal
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#faf9f5] overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]"
        >
          {/* Subtle warm ambient glowing background orbs */}
          <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-amber-100/70 rounded-full blur-3xl pointer-events-none" />

          {/* Central Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
            
            {/* Top Brand Logo */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2ecc71] to-[#1e7e34] flex items-center justify-center shadow-md shadow-green-600/20 text-white">
                <PawPrint className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#161c16]">
                Paw<span className="text-[#27ae60]">Home</span>
              </span>
            </motion.div>

            {/* ════════════════════════════════════════════════════
                CUTE ANIMATED RUNNING DOG SCENE
               ════════════════════════════════════════════════════ */}
            <div className="relative w-full max-w-sm h-40 sm:h-44 flex items-center justify-center mb-2 overflow-visible">
              
              {/* Floating golden bone / treat that the puppy is chasing */}
              <div className="absolute top-6 right-8 sm:right-12 z-20 animate-[treatFloat_2s_ease-in-out_infinite]">
                <div className="relative">
                  {/* Glowing halo around bone */}
                  <div className="absolute -inset-2 bg-amber-300/40 rounded-full blur-sm animate-pulse" />
                  
                  {/* Bone SVG */}
                  <svg width="34" height="20" viewBox="0 0 34 20" fill="none" className="drop-shadow-md">
                    <circle cx="5" cy="5" r="4.5" fill="#f59e0b" />
                    <circle cx="5" cy="15" r="4.5" fill="#f59e0b" />
                    <circle cx="29" cy="5" r="4.5" fill="#f59e0b" />
                    <circle cx="29" cy="15" r="4.5" fill="#f59e0b" />
                    <rect x="5" y="6" width="24" height="8" rx="2" fill="#fbbf24" />
                  </svg>
                  
                  {/* Sparkle badge */}
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 absolute -top-2 -right-2 animate-bounce" />
                </div>
              </div>

              {/* Little red heart floating behind the bone */}
              <div className="absolute top-2 right-16 sm:right-22 animate-[heartFloat_1.8s_ease-in-out_infinite]">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 drop-shadow-xs" />
              </div>

              {/* Running Dog Vector Graphic */}
              <div className="relative z-10 animate-[dogGallop_0.42s_ease-in-out_infinite]">
                <svg
                  viewBox="0 0 170 115"
                  className="w-40 sm:w-48 h-28 sm:h-32 overflow-visible drop-shadow-sm"
                >
                  <defs>
                    <linearGradient id="dogCoat" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="dogChest" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="100%" stopColor="#fde68a" />
                    </linearGradient>
                  </defs>

                  {/* 1. Far Back Leg (Darker orange, opposite phase) */}
                  <g className="origin-[52px_62px] animate-[dogLegBackFar_0.42s_ease-in-out_infinite]">
                    <path
                      d="M 50 60 Q 38 78 30 96 C 36 98 44 98 46 95 Q 56 80 62 66 Z"
                      fill="#b45309"
                    />
                    {/* Far back paw pad */}
                    <ellipse cx="36" cy="96" rx="6" ry="3" fill="#92400e" />
                  </g>

                  {/* 2. Far Front Leg (Darker orange, opposite phase) */}
                  <g className="origin-[106px_60px] animate-[dogLegFrontFar_0.42s_ease-in-out_infinite]">
                    <path
                      d="M 104 58 Q 116 76 128 92 C 122 96 114 96 110 93 Q 98 78 94 64 Z"
                      fill="#b45309"
                    />
                    {/* Far front paw pad */}
                    <ellipse cx="120" cy="94" rx="6" ry="3" fill="#92400e" />
                  </g>

                  {/* 3. Wagging Tail */}
                  <g className="origin-[42px_50px] animate-[dogTail_0.28s_ease-in-out_infinite]">
                    <path
                      d="M 40 50 C 24 45 8 32 14 18 C 17 14 24 18 26 26 C 29 36 42 46 44 48 Z"
                      fill="#d97706"
                    />
                    {/* Fluffy tail tip */}
                    <circle cx="16" cy="18" r="4.5" fill="#f59e0b" />
                  </g>

                  {/* 4. Dog Torso / Main Body */}
                  <path
                    d="M 44 50 C 44 36 62 34 84 36 C 106 38 118 46 120 56 C 122 70 108 78 86 78 C 60 78 44 68 44 50 Z"
                    fill="url(#dogCoat)"
                  />

                  {/* Fluffy Cream Chest Patch */}
                  <path
                    d="M 88 44 C 102 46 116 52 118 62 C 118 70 106 75 94 73 C 89 64 85 54 88 44 Z"
                    fill="url(#dogChest)"
                  />

                  {/* 5. Near Back Leg */}
                  <g className="origin-[56px_62px] animate-[dogLegBackNear_0.42s_ease-in-out_infinite]">
                    <path
                      d="M 54 60 Q 42 78 46 97 C 54 99 60 96 62 94 Q 68 80 72 66 Z"
                      fill="#d97706"
                    />
                    {/* Near back paw */}
                    <ellipse cx="52" cy="96" rx="6.5" ry="3.5" fill="#b45309" />
                  </g>

                  {/* 6. Near Front Leg */}
                  <g className="origin-[98px_60px] animate-[dogLegFrontNear_0.42s_ease-in-out_infinite]">
                    <path
                      d="M 96 58 Q 106 76 114 96 C 106 98 98 96 94 93 Q 88 78 86 64 Z"
                      fill="#f59e0b"
                    />
                    {/* Near front paw */}
                    <ellipse cx="106" cy="95" rx="6.5" ry="3.5" fill="#d97706" />
                  </g>

                  {/* 7. Collar with Golden Tag */}
                  <path
                    d="M 104 46 L 118 52 L 115 58 L 101 52 Z"
                    fill="#10b981"
                  />
                  {/* Golden Tag Badge */}
                  <circle cx="111" cy="60" r="3.5" fill="#f59e0b" stroke="#fef3c7" strokeWidth="1" />

                  {/* 8. Head & Muzzle */}
                  <circle cx="120" cy="36" r="18" fill="url(#dogCoat)" />

                  {/* Snout */}
                  <path
                    d="M 126 32 C 138 33 146 38 148 44 C 148 48 138 52 126 52 Z"
                    fill="#f59e0b"
                  />

                  {/* Shiny Dark Nose */}
                  <ellipse cx="147" cy="40" rx="3.5" ry="2.5" fill="#1c1917" />
                  <circle cx="146.2" cy="39.2" r="0.8" fill="#ffffff" />

                  {/* Happy Smiling Eye with shine */}
                  <ellipse cx="122" cy="32" rx="3.2" ry="4.2" fill="#1c1917" />
                  <circle cx="123" cy="30.5" r="1.3" fill="#ffffff" />

                  {/* Cute Eyebrow */}
                  <path
                    d="M 117 26 Q 122 24 127 26"
                    stroke="#92400e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Cheek blush */}
                  <ellipse cx="126" cy="42" rx="4" ry="2.5" fill="#fb7185" opacity="0.45" />

                  {/* Smiling Mouth */}
                  <path
                    d="M 132 45 Q 138 48 141 45"
                    stroke="#92400e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Playful Pink Panting Tongue */}
                  <g className="animate-[dogTongue_0.25s_ease-in-out_infinite]">
                    <path
                      d="M 135 46 C 136 53 143 53 142 47 Z"
                      fill="#fb7185"
                    />
                  </g>

                  {/* 9. Floppy Ear (Bounces back in the wind!) */}
                  <g className="origin-[112px_24px] animate-[dogEar_0.35s_ease-in-out_infinite]">
                    <path
                      d="M 110 24 C 102 32 98 46 104 56 C 108 60 114 56 114 50 C 114 42 116 32 112 24 Z"
                      fill="#b45309"
                    />
                    <path
                      d="M 110 27 C 105 34 102 44 106 51 C 109 53 112 51 112 46 C 112 40 114 33 111 27 Z"
                      fill="#d97706"
                      opacity="0.6"
                    />
                  </g>
                </svg>
              </div>

              {/* Dynamic Ground Running Shadow under Dog */}
              <div className="absolute bottom-2 sm:bottom-3 w-28 sm:w-36 h-3 bg-black/10 rounded-full blur-[2px] animate-[dogShadow_0.42s_ease-in-out_infinite]" />

              {/* Cute Dust Puffs trailing behind the puppy's back paws */}
              <div className="absolute bottom-4 left-10 sm:left-14 flex items-center gap-1 pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-200/70 animate-[dustPuff_0.6s_ease-out_infinite]" />
                <span className="w-2 h-2 rounded-full bg-stone-300/80 animate-[dustPuff_0.6s_ease-out_0.2s_infinite]" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-200/60 animate-[dustPuff_0.6s_ease-out_0.4s_infinite]" />
              </div>

              {/* Fast moving grass / road dashes under the dog */}
              <div className="absolute bottom-1 w-full max-w-[280px] h-0.5 overflow-hidden flex items-center justify-around opacity-30">
                <div className="w-full flex gap-4 animate-[roadMove_0.6s_linear_infinite]">
                  <span className="w-6 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                  <span className="w-3 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                  <span className="w-8 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                  <span className="w-4 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                  <span className="w-7 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                  <span className="w-3 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                  <span className="w-8 h-0.5 bg-[#27ae60] rounded-full shrink-0" />
                </div>
              </div>

            </div>

            {/* ════════════════════════════════════════════════════
                PROGRESS BAR & PERCENTAGE COUNTER
               ════════════════════════════════════════════════════ */}
            <div className="w-full max-w-xs relative mb-3">
              {/* Background Track with soft glow */}
              <div className="w-full h-3 bg-[#e8ede3] rounded-full overflow-hidden p-0.5 shadow-inner border border-green-900/5">
                {/* Animated Gradient Bar */}
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#2ecc71] via-[#27ae60] to-[#1e8449] relative shadow-sm"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.08 }}
                >
                  {/* Shimmer light reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1.4s_infinite]" />
                </motion.div>
              </div>

              {/* Counter Row */}
              <div className="flex items-center justify-between mt-2.5 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5 text-[#27ae60] font-semibold text-xs">
                  <PawPrint className="w-3.5 h-3.5 fill-current animate-pulse" />
                  <span>Loading experience...</span>
                </span>
                <span className="font-mono font-bold text-gray-800 bg-white px-2.5 py-0.5 rounded-full border border-gray-200/80 shadow-xs text-xs">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Dynamic Wholesome Status Text */}
            <motion.p
              key={statusText}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-gray-600 font-['Caveat',cursive] text-lg sm:text-xl text-[#275d33] h-7 mt-1 font-semibold"
            >
              {statusText}
            </motion.p>

            {/* Skip Button for quick preview */}
            <button
              onClick={handleSkip}
              className="mt-4 inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-green-700 transition-colors uppercase tracking-wider font-semibold cursor-pointer py-1 px-3 rounded-full hover:bg-green-50"
            >
              <span>Skip to website</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Bottom subtle platform info */}
          <div className="absolute bottom-5 text-[11px] text-gray-400 font-medium tracking-wide flex items-center gap-1.5">
            <span>PawHome</span>
            <span>•</span>
            <span>Adopt · Board · Give Love</span>
          </div>

          {/* Inline CSS Keyframe Animations for Running Dog */}
          <style>{`
            @keyframes dogGallop {
              0%, 100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-8px) rotate(-1.5deg);
              }
            }

            @keyframes dogLegFrontNear {
              0%   { transform: rotate(-38deg); }
              50%  { transform: rotate(38deg); }
              100% { transform: rotate(-38deg); }
            }

            @keyframes dogLegFrontFar {
              0%   { transform: rotate(38deg); }
              50%  { transform: rotate(-38deg); }
              100% { transform: rotate(38deg); }
            }

            @keyframes dogLegBackNear {
              0%   { transform: rotate(32deg); }
              50%  { transform: rotate(-36deg); }
              100% { transform: rotate(32deg); }
            }

            @keyframes dogLegBackFar {
              0%   { transform: rotate(-36deg); }
              50%  { transform: rotate(32deg); }
              100% { transform: rotate(-36deg); }
            }

            @keyframes dogTail {
              0%, 100% {
                transform: rotate(-22deg);
              }
              50% {
                transform: rotate(26deg);
              }
            }

            @keyframes dogEar {
              0%, 100% {
                transform: rotate(-14deg);
              }
              50% {
                transform: rotate(18deg);
              }
            }

            @keyframes dogTongue {
              0%, 100% {
                transform: scaleY(1);
              }
              50% {
                transform: scaleY(1.35) translateY(1px);
              }
            }

            @keyframes dogShadow {
              0%, 100% {
                transform: scaleX(1);
                opacity: 0.18;
              }
              50% {
                transform: scaleX(0.78);
                opacity: 0.1;
              }
            }

            @keyframes dustPuff {
              0% {
                opacity: 0.8;
                transform: scale(0.6) translateX(0);
              }
              100% {
                opacity: 0;
                transform: scale(1.6) translateX(-18px);
              }
            }

            @keyframes treatFloat {
              0%, 100% {
                transform: translateY(0px) rotate(6deg);
              }
              50% {
                transform: translateY(-9px) rotate(-8deg);
              }
            }

            @keyframes heartFloat {
              0%, 100% {
                transform: translateY(0px) scale(1);
              }
              50% {
                transform: translateY(-6px) scale(1.15);
              }
            }

            @keyframes roadMove {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-40px);
              }
            }

            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(200%);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
