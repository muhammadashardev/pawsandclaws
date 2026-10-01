import { motion } from 'framer-motion';
import { ArrowRight, PawPrint, Heart, Home } from 'lucide-react';
import puppyImg from '../assets/puppy.jpg';
import catImg from '../assets/cat.jpg';
import boardingImg from '../assets/boarding.jpg';

/* ==========================================
   SERVICES SECTION COMPONENT
   - 3 cards: Adopt a Dog, Adopt a Cat, Pet Boarding
   - Each card has icon, decorations, title, description,
     CTA arrow button, and a floating pet image
   - Framer Motion scroll-triggered animations
   - Fully responsive (mobile stacks, desktop 3-col)
   ========================================== */

/* Service card data */
const services = [
  {
    id: 'adopt-dog',
    icon: PawPrint,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    accentColor: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-100',
    dotColor: 'bg-amber-400',
    lineColor: 'bg-amber-200',
    title: 'Adopt a Dog',
    description: 'Find your new best friend.',
    image: puppyImg,
    imgAlt: 'Golden retriever puppy available for adoption',
    href: '#adopt-dog',
  },
  {
    id: 'adopt-cat',
    icon: Heart,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500',
    accentColor: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-100',
    dotColor: 'bg-green-400',
    lineColor: 'bg-green-200',
    title: 'Adopt a Cat',
    description: 'Meet cats looking for loving homes.',
    image: catImg,
    imgAlt: 'Tabby cat available for adoption',
    href: '#adopt-cat',
  },
  {
    id: 'pet-boarding',
    icon: Home,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    accentColor: 'from-blue-50 to-sky-50',
    borderColor: 'border-blue-100',
    dotColor: 'bg-blue-400',
    lineColor: 'bg-blue-200',
    title: 'Pet Boarding',
    description: 'Safe, comfortable care while you\'re away.',
    image: boardingImg,
    imgAlt: 'Cozy pet boarding house with toys',
    href: '#boarding',
  },
];

/* Framer Motion variants */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* Individual Service Card */
function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative rounded-3xl border ${service.borderColor} bg-gradient-to-br ${service.accentColor} p-6 overflow-hidden flex flex-col min-h-[320px] sm:min-h-[340px] cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-black/8 transition-shadow duration-300`}
    >
      {/* ── Decorative background paw ── */}
      <div className="absolute top-4 right-14 opacity-10">
        <PawPrint size={32} className="text-gray-500" />
      </div>

      {/* ── Decorative heart ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: index * 0.4 }}
        className="absolute top-4 right-4 opacity-40"
      >
        <Heart size={18} className="text-green-500 fill-green-400" />
      </motion.div>

      {/* ── Decorative sparkle lines ── */}
      <div className="absolute top-12 right-6 flex flex-col gap-1 opacity-30">
        <span className={`block w-4 h-0.5 rounded-full ${service.lineColor}`} />
        <span className={`block w-2.5 h-0.5 rounded-full ${service.lineColor} ml-1`} />
      </div>

      {/* ── Icon circle ── */}
      <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-sm mb-4 flex-shrink-0`}>
        <service.icon size={24} className={service.iconColor} />
      </div>

      {/* ── Text content ── */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {service.title}
        </h3>

        {/* Green underline accent */}
        <div className={`w-10 h-0.5 rounded-full ${service.dotColor} mb-3`} />

        <p className="text-gray-500 text-sm leading-relaxed max-w-[55%]">
          {service.description}
        </p>
      </div>

      {/* ── CTA Arrow Button ── */}
      <motion.a
        href={service.href}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-5 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200 group-hover:bg-green-600 transition-colors duration-200"
        aria-label={`Go to ${service.title}`}
      >
        <ArrowRight size={18} className="text-white" />
      </motion.a>

      {/* ── Pet Image (bottom-right, overflowing) ── */}
      <div className="absolute bottom-0 right-0 w-36 sm:w-40 h-48 sm:h-52 pointer-events-none">
        <img
          src={service.image}
          alt={service.imgAlt}
          className="w-full h-full object-cover object-top"
          style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)' }}
        />
      </div>
    </motion.div>
  );
}

/* Main exported component */
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#f5f3ee] py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Optional Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            <PawPrint size={12} />
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What We Offer
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-md mx-auto">
            From adoption to boarding — everything your pet family needs.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
