import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PawPrint, Heart } from 'lucide-react';

/* ==========================================
   HEADER COMPONENT
   - Transparent → Blurred on scroll
   - Animated hamburger menu for mobile
   - Framer Motion nav link animations
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

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
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

  return (
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
            href="#"
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
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group
                    ${scrolled ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* ── CTA Button (Desktop) ── */}
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

          {/* ── Hamburger (Mobile) ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ── Mobile Menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mx-2 mb-4 px-4 py-3">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                      >
                        <PawPrint size={14} className="text-green-400" />
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-3 pb-1 border-t border-gray-100 mt-2">
                  <a
                    href="#adopt"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-md shadow-green-200"
                  >
                    <PawPrint size={15} />
                    Adopt Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
