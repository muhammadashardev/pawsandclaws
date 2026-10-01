import { motion } from 'framer-motion';
import { PawPrint, Heart, MapPin, Star, ArrowRight } from 'lucide-react';
import buddyImg from '../assets/buddy.jpg';
import lunaImg from '../assets/luna.jpg';
import maxImg from '../assets/max.jpg';
import miloImg from '../assets/milo.jpg';
import puppyImg from '../assets/puppy.jpg';
import catImg from '../assets/cat.jpg';

/* ==========================================
   FEATURED ANIMALS SECTION
   Pixel-perfect match to design reference:
   - Section header: "Featured Animals" badge + "Meet Your New Best Friend"
   - 4 pet cards with image, badge, heart, pet info, buttons
   - "View All Dogs" / "View All Cats" footer buttons
   - Cream background, green accents, decorative paw SVGs
   ========================================== */

/* ── Pet data ── */
const pets = [
  {
    id: 'buddy',
    name: 'Buddy',
    age: '2 years old',
    type: 'Dog',
    breed: 'Golden Retriever',
    size: 'Large',
    city: 'Islamabad, PK',
    description: 'Friendly, playful, and loves everyone. Great with kids and other pets!',
    image: buddyImg,
  },
  {
    id: 'luna',
    name: 'Luna',
    age: '1 year old',
    type: 'Cat',
    breed: 'Domestic Shorthair',
    size: 'Medium',
    city: 'Lahore, PK',
    description: 'Sweet and curious girl who loves to explore and cuddle.',
    image: lunaImg,
  },
  {
    id: 'max',
    name: 'Max',
    age: '3 years old',
    type: 'Dog',
    breed: 'Labrador Retriever',
    size: 'Large',
    city: 'Karachi, PK',
    description: 'Loyal and energetic companion. Loves walks and outdoor adventures.',
    image: maxImg,
  },
  {
    id: 'milo',
    name: 'Milo',
    age: '6 months old',
    type: 'Cat',
    breed: 'Domestic Longhair',
    size: 'Small',
    city: 'Faisalabad, PK',
    description: 'Playful, gentle, and full of charm. Loves toys and tummy rubs!',
    image: miloImg,
  },
];

/* ── Stagger variants ── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

/* ── Decorative dashed paw SVG (top-right corner) ── */
function DecorativePaw() {
  return (
    <svg
      width="140"
      height="130"
      viewBox="0 0 140 130"
      fill="none"
      className="text-green-300"
    >
      {/* main paw pad – dashed circle */}
      <circle cx="80" cy="78" r="28" stroke="currentColor" strokeWidth="2.2" strokeDasharray="6 5" fill="none" />
      {/* toe pads */}
      <circle cx="55" cy="52" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" fill="none" />
      <circle cx="78" cy="42" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" fill="none" />
      <circle cx="102" cy="46" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" fill="none" />
      <circle cx="114" cy="66" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" fill="none" />
    </svg>
  );
}

/* ── Individual Pet Card ── */
function PetCard({ pet }) {
  const isDog = pet.type === 'Dog';

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.22 } }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300 flex flex-col"
    >
      {/* ── Image Container ── */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={pet.image}
          alt={`${pet.name} – ${pet.breed} available for adoption`}
          className="w-full h-full object-cover object-center"
        />

        {/* Top-right type badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-md">
            <PawPrint size={11} className="fill-white" />
            {pet.type}
          </span>
        </div>

        {/* Bottom-left heart outline */}
        <div className="absolute bottom-4 left-4">
          <Heart
            size={22}
            className="text-white drop-shadow-md"
            strokeWidth={2}
          />
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="p-5 flex flex-col flex-1">

        {/* Name + Age */}
        <div className="flex items-baseline gap-2 mb-3">
          <h3
            className="text-lg font-bold text-gray-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {pet.name}
          </h3>
          <span className="text-sm text-green-600 font-medium">{pet.age}</span>
        </div>

        {/* Breed + Size row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-1.5">
          <span className="flex items-center gap-1">
            <PawPrint size={11} className="text-green-400" />
            {pet.breed}
          </span>
          <span className="text-gray-300">·</span>
          <span className="flex items-center gap-1">
            <Star size={11} className="text-green-400" />
            {pet.size}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <MapPin size={11} className="text-green-400 flex-shrink-0" />
          {pet.city}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
          {pet.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-auto">
          {/* Meet button – outlined */}
          <motion.a
            href={`#${pet.id}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full hover:border-green-400 hover:text-green-600 transition-colors duration-200"
          >
            <PawPrint size={12} />
            Meet {pet.name}
          </motion.a>

          {/* Adopt Me button – green filled */}
          <motion.a
            href={`#adopt-${pet.id}`}
            whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(34,197,94,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-green-500 text-white text-xs font-semibold rounded-full shadow-md shadow-green-200 hover:bg-green-600 transition-colors duration-200"
          >
            <Heart size={12} className="fill-white" />
            Adopt Me
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedAnimals() {
  return (
    <section id="adopt" className="bg-[#f5f3ee] py-14 sm:py-20 scroll-mt-20 relative">
      <span id="featured-animals" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex items-start justify-between mb-10 sm:mb-12">

          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-xl"
          >
            {/* Badge line */}
            <div className="flex items-center gap-2 mb-3">
              <PawPrint size={14} className="text-green-500" />
              <span className="text-green-600 text-sm font-semibold italic">Featured Animals</span>
              <Heart size={14} className="text-green-400 fill-green-300" />
            </div>

            {/* Main heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Meet Your New{' '}
              <span className="text-green-500">Best Friend</span>{' '}
              <Heart
                size={28}
                className="inline text-green-300 fill-green-200 -mt-1"
              />
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
              These wonderful animals are waiting for someone to give
              them a second chance and a loving forever home.
            </p>
          </motion.div>

          {/* Right – Decorative paw (hidden on small screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block flex-shrink-0 -mt-2"
          >
            <DecorativePaw />
          </motion.div>
        </div>

        {/* ── Pet Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </motion.div>

        {/* ── Footer Buttons: View All Dogs / View All Cats ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14"
        >
          {/* View All Dogs */}
          <motion.a
            href="#dogs"
            whileHover={{ scale: 1.04, borderColor: '#22c55e' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-3.5 border-2 border-gray-200 rounded-full text-gray-700 font-semibold text-sm hover:text-green-600 hover:border-green-400 transition-all duration-200 bg-white shadow-sm"
          >
            {/* Small dog icon circle */}
            <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={puppyImg} alt="" className="w-full h-full object-cover" />
            </span>
            View All Dogs
            <ArrowRight size={15} />
          </motion.a>

          {/* View All Cats */}
          <motion.a
            href="#cats"
            whileHover={{ scale: 1.04, borderColor: '#22c55e' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-3.5 border-2 border-gray-200 rounded-full text-gray-700 font-semibold text-sm hover:text-green-600 hover:border-green-400 transition-all duration-200 bg-white shadow-sm"
          >
            {/* Small cat icon circle */}
            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src={catImg} alt="" className="w-full h-full object-cover" />
            </span>
            View All Cats
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
