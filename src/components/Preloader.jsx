import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, Heart, ArrowRight } from "lucide-react";
import buddyImg from "../assets/buddy.jpg";
import lunaImg from "../assets/luna.jpg";

const statusMessages = [
  { at: 0,  text: "Waking up sleepy shelter pets..." },
  { at: 22, text: "Preparing healthy treats and toys..." },
  { at: 50, text: "Finding loving families..." },
  { at: 78, text: "Almost there, tails are wagging!" },
  { at: 98, text: "Welcome to PawHome!" },
];

const pawTrail = [
  { x: "4%",  y: 56, rot: -18 },
  { x: "11%", y: 62, rot:  12 },
  { x: "18%", y: 55, rot: -15 },
  { x: "25%", y: 63, rot:  10 },
  { x: "32%", y: 56, rot: -20 },
  { x: "39%", y: 61, rot:   8 },
  { x: "46%", y: 55, rot: -12 },
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress]       = useState(0);
  const [statusText, setStatusText]   = useState(statusMessages[0].text);
  const [isDone, setIsDone]           = useState(false);
  const [pawsVisible, setPawsVisible] = useState([]);
  const intervalRef                   = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    pawTrail.forEach((_, i) => {
      setTimeout(() => {
        setPawsVisible((prev) => [...prev, i]);
      }, 200 + i * 160);
    });

    const startTime = Date.now();
    const duration  = 2400;

    intervalRef.current = setInterval(() => {
      const elapsed     = Date.now() - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);
      const ease        = Math.round(rawProgress);
      setProgress(ease);

      for (let i = statusMessages.length - 1; i >= 0; i--) {
        if (ease >= statusMessages[i].at) {
          setStatusText(statusMessages[i].text);
          break;
        }
      }

      if (ease >= 100) {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        }, 380);
      }
    }, 24);

    return () => {
      clearInterval(intervalRef.current);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const handleSkip = () => {
    clearInterval(intervalRef.current);
    setIsDone(true);
    document.body.style.overflow = "";
    if (onComplete) onComplete();
  };

  const bounceStyle = {
    animation: "dogBounce 1.15s cubic-bezier(0.37,0,0.63,1) infinite",
  };

  const spinStyle = {
    position: "absolute",
    top: "-16px",
    left: "-16px",
    width: "calc(100% + 32px)",
    height: "calc(100% + 32px)",
    animation: "slowSpin 14s linear infinite",
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.78, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "linear-gradient(145deg, #f0fdf4 0%, #faf9f5 40%, #fef9ee 100%)" }}
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {pawTrail.map((paw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 12 }}
                animate={pawsVisible.includes(i) ? { opacity: 0.18, scale: 1, y: 0 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.35, ease: "backOut" }}
                className="absolute"
                style={{ left: paw.x, bottom: paw.y + "px", transform: "rotate(" + paw.rot + "deg)" }}
              >
                <PawPrint style={{ width: 22, height: 22 }} className="text-green-600" />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-5 w-full max-w-sm">

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2.5 mb-8"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2ecc71] to-[#1a7a33] flex items-center justify-center shadow-lg shadow-green-500/25">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-xl font-extrabold text-[#161c16] tracking-tight">
                  Paw<span className="text-[#27ae60]">Home</span>
                </div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-gray-400 font-semibold">
                  Adopt . Board . Give Love
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.52, delay: 0.15, type: "spring", stiffness: 180 }}
              className="relative mb-7"
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-green-300/35 via-amber-200/25 to-green-400/15 blur-2xl animate-pulse pointer-events-none" />

              <svg className="absolute text-green-400/35" style={spinStyle} viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" strokeLinecap="round" />
              </svg>

              <div
                className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 shadow-2xl shadow-green-500/25"
                style={{ background: "linear-gradient(135deg, #2ecc71, #27ae60 50%, #f59e0b)" }}
              >
                <div className="w-full h-full rounded-full p-1 bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden" style={bounceStyle}>
                    <img
                      src={buddyImg}
                      alt="Buddy the golden retriever"
                      className="w-full h-full object-cover object-top scale-110"
                    />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -7, 0], scale: [1, 1.18, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="absolute -top-1 -right-1 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-rose-50"
              >
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut", delay: 0.6 }}
                className="absolute -bottom-1 -left-2 w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xl"
              >
                <img src={lunaImg} alt="Luna the cat" className="w-full h-full object-cover" />
              </motion.div>

              <div className="absolute bottom-2.5 right-1.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-md animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-[13px] text-gray-500 font-medium mb-5"
            >
              Meet <span className="text-[#27ae60] font-bold">Buddy</span> and friends, waiting for you
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full mb-3"
            >
              <div className="w-full h-2.5 bg-gray-200/80 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full relative overflow-hidden transition-all duration-75"
                  style={{
                    width: progress + "%",
                    background: "linear-gradient(90deg, #2ecc71, #27ae60, #1a7a33)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    style={{ animation: "shimmer 1.6s linear infinite" }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 px-0.5">
                <span className="flex items-center gap-1.5 text-[11px] text-[#27ae60] font-semibold">
                  <PawPrint className="w-3 h-3 fill-current" />
                  Loading experience
                </span>
                <span className="text-[11px] font-mono font-bold text-gray-700 bg-white border border-gray-200 px-2 py-0.5 rounded-full">
                  {progress}%
                </span>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.p
                key={statusText}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
                className="text-[#3b6e4d] font-semibold h-7 mb-3"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem" }}
              >
                {statusText}
              </motion.p>
            </AnimatePresence>

            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-gray-400 hover:text-[#27ae60] transition-colors font-semibold px-4 py-1.5 rounded-full hover:bg-green-50 cursor-pointer"
            >
              Skip to website
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="absolute bottom-5 text-[11px] text-gray-400 tracking-wide font-medium">
            Pakistan's Premier Pet Adoption and Boarding Platform
          </div>

          <style>{"@keyframes dogBounce { 0%, 100% { transform: translateY(0px) scale(1); } 30% { transform: translateY(-10px) scale(1.03); } 60% { transform: translateY(-4px) scale(1.01); } } @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } @keyframes shimmer { 0% { transform: translateX(-130%); } 100% { transform: translateX(200%); } }"}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}