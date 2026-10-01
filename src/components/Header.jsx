import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PawPrint, Heart, ChevronRight, ArrowRight, Phone } from 'lucide-react';

/* ==========================================
   HEADER COMPONENT
   - Transparent → Blurred on scroll
   - Off-canvas side drawer on mobile / small screens
   - Smooth navigation linking
   ========================================== */

const navLinks = [
  { label: 'Adopt a Pet', href: '#adopt' },
  { label: 'Boarding', href: '#boarding' },
  { label: 'About Us', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

/* Animation variants */
const navContainerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Track scroll position */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile off-canvas drawer is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* Close on Escape key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">

            {/* ── Logo ── */}
            <motion.a
              href="#hero"
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-md shadow-green-200">
                <PawPrint size={20} className="text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Heart size={9} className="text-green-500 fill-green-500" />
                </div>
              </div>
              <div className="leading-tight">
                <div className={`text-lg font-800 transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white drop-shadow'}`}>
                  <span className="font-semibold">Paw</span>
                  <span className="text-green-400 font-bold">Home</span>
                </div>
                <div className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/70'}`}>
                  Adopt · Board · Give Love
                </div>
              </div>
            </motion.a>

            {/* ── Desktop Nav Links ── */}
            <motion.ul
              variants={navContainerVariants}
              initial="hidden"
              animate="show"
              className="hidden lg:flex items-center gap-1"
            >
              {navLinks.map((link) => (
                <motion.li key={link.label} variants={navItemVariants}>
                  <a
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      scrolled
                        ? 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* ── Desktop CTA Button ── */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="#adopt"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(34,197,94,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-green-200 transition-all"
              >
                <PawPrint size={15} />
                Adopt Now
              </motion.a>
            </div>

            {/* ── Hamburger Trigger (Mobile / SM Screens) ── */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* ── Off-Canvas Side Drawer Menu (Mobile / Small Screens) ── */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Side-sliding Drawer Panel from Right */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 27, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[84vw] max-w-[340px] bg-[#faf9f5] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              {/* Drawer Top: Brand + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-gray-200/80 mb-6">
                  <a
                    href="#hero"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2.5"
                  >
                    <div className="relative w-10 h-10 bg-gradient-to-br from-[#2ecc71] to-[#1e7e34] rounded-xl flex items-center justify-center shadow-md shadow-green-200">
                      <PawPrint size={20} className="text-white" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-xs">
                        <Heart size={9} className="text-green-500 fill-green-500" />
                      </div>
                    </div>
                    <div className="leading-tight">
                      <div className="text-lg font-extrabold text-[#161c16]">
                        Paw<span className="text-[#27ae60]">Home</span>
                      </div>
                      <div className="text-[9px] tracking-widest uppercase text-gray-400 font-semibold">
                        Adopt · Board
                      </div>
                    </div>
                  </a>

                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 active:scale-95 text-gray-700 flex items-center justify-center transition-all shadow-xs border border-gray-200"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links with icons */}
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.04 }}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-semibold text-gray-800 hover:text-[#275d33] hover:bg-[#eaf4e8] transition-all group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#27ae60] shadow-xs group-hover:bg-[#27ae60] group-hover:text-white transition-colors">
                          <PawPrint size={15} />
                        </span>
                        {link.label}
                      </span>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-[#275d33] group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom CTA & Quick Help */}
              <div className="pt-6 border-t border-gray-200/80 mt-6 space-y-3.5">
                <a
                  href="#adopt"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-2xl shadow-lg shadow-green-500/25 hover:from-green-600 hover:to-green-700 transition-all text-sm active:scale-98"
                >
                  <PawPrint size={17} />
                  Adopt Now
                  <ArrowRight size={15} />
                </a>

                {/* Shelter Helpline */}
                <div className="bg-white rounded-2xl p-3.5 border border-gray-200/70 flex items-center gap-3 text-xs text-gray-500 shadow-xs">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#27ae60] flex items-center justify-center shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">+92 300 1234567</div>
                    <div className="text-[11px] text-gray-400">Daily 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
