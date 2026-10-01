import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Heart, PawPrint, Calendar, Ruler, Users,
  Zap, RotateCcw, ArrowRight, ChevronLeft, ChevronRight,
  Shield, Lock, Star, BadgeCheck, Sparkles, Dog, Cat, Baby
} from 'lucide-react';
import buddyImg from '../assets/buddy.jpg';
import lunaImg  from '../assets/luna.jpg';
import maxImg   from '../assets/max.jpg';
import miloImg  from '../assets/milo.jpg';
import puppyImg from '../assets/puppy.jpg';
import catImg   from '../assets/cat.jpg';

/* ==========================================
   FIND YOUR PERFECT COMPANION SECTION
   Pixel-perfect match to reference design:
   LEFT  – filter panel (tabs + filter rows + toggles + CTA)
   RIGHT – trust badges bar + results card (featured pet + 3 small)
   Fully interactive: tabs, pills, toggles, nav arrows
   Responsive: stacks on mobile
   ========================================== */

/* ── Data ── */
const petTypes = [
  { id: 'dog',    label: 'Dog',     icon: Dog },
  { id: 'cat',    label: 'Cat',     icon: Cat },
  { id: 'any',    label: 'Any Pet', icon: PawPrint },
];

const ageOptions    = ['Any Age',    'Puppy\n0 – 1 yr', 'Young\n1 – 3 yrs', 'Adult\n3 – 7 yrs', 'Senior\n7+ yrs'];
const sizeOptions   = ['Any Size',   'Small\n0 – 10 kg', 'Medium\n10 – 25 kg', 'Large\n25+ kg'];
const genderOptions = ['Any Gender', 'Male', 'Female'];
const energyOptions = ['Any Level',  'Calm\nLow', 'Balanced\nMedium', 'Playful\nHigh'];

const trustBadges = [
  { icon: BadgeCheck, color: 'text-green-500',  title: '100% Safe',           sub: 'Verified & healthy pets'    },
  { icon: Heart,      color: 'text-green-500',  title: 'Personalized Match',  sub: 'Based on your lifestyle'    },
  { icon: Lock,       color: 'text-green-500',  title: 'Privacy First',       sub: 'Your data is secure'        },
];

const pets = [
  {
    id: 'buddy', name: 'Buddy', type: 'Dog',
    age: '2 years old', gender: 'Male', size: 'Large',
    tags: ['High Energy', 'Good with Kids', 'Good with Pets'],
    desc: 'Friendly, playful and loves everyone. Great with kids and other pets.',
    img: buddyImg, featured: true,
  },
  { id: 'luna',  name: 'Luna',  type: 'Cat', age: '1 year',   gender: 'Female', energy: 'Medium Energy', img: lunaImg  },
  { id: 'max',   name: 'Max',   type: 'Dog', age: '3 years',  gender: 'Male',   energy: 'High Energy',   img: maxImg   },
  { id: 'milo',  name: 'Milo',  type: 'Cat', age: '6 months', gender: 'Male',   energy: 'Medium Energy', img: miloImg  },
];

/* ── Pill selector ── */
function PillGroup({ options, value, onChange, icon: Icon }) {
  return (
    <div className="flex items-start gap-2 flex-wrap">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center mt-0.5">
        <Icon size={14} className="text-green-500" />
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const label = opt.split('\n')[0];
          const sub   = opt.split('\n')[1];
          const active = value === label;
          return (
            <button
              key={opt}
              onClick={() => onChange(label)}
              className={`flex flex-col items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                ${active
                  ? 'bg-green-500 text-white border-green-500 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-600'
                }`}
            >
              <span>{label}</span>
              {sub && <span className={`text-[9px] leading-none mt-0.5 ${active ? 'text-green-100' : 'text-gray-400'}`}>{sub}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Toggle Switch ── */
function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-10 h-5.5 rounded-full transition-colors duration-300 flex-shrink-0 ${value ? 'bg-green-500' : 'bg-gray-200'}`}
      style={{ height: '22px', width: '40px' }}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] bg-white rounded-full shadow transition-transform duration-300 ${value ? 'translate-x-[18px]' : 'translate-x-0'}`}
      />
    </button>
  );
}

/* ── Main Component ── */
export default function FindCompanion() {
  /* Filter state */
  const [petType,    setPetType]    = useState('dog');
  const [age,        setAge]        = useState('Any Age');
  const [size,       setSize]       = useState('Any Size');
  const [gender,     setGender]     = useState('Any Gender');
  const [energy,     setEnergy]     = useState('Any Level');
  const [goodKids,   setGoodKids]   = useState(true);
  const [goodPets,   setGoodPets]   = useState(true);
  const [likedPets,  setLikedPets]  = useState({});

  const resetFilters = () => {
    setAge('Any Age'); setSize('Any Size');
    setGender('Any Gender'); setEnergy('Any Level');
    setGoodKids(true); setGoodPets(true);
  };

  const toggleLike = (id) => setLikedPets(p => ({ ...p, [id]: !p[id] }));

  return (
    <section id="find-companion" className="bg-[#f5f3ee] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════
            TWO-COLUMN LAYOUT
            Left: filters  |  Right: results
            ═══════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">

          {/* ╔══════════════╗
              ║  LEFT PANEL  ║
              ╚══════════════╝ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Search tag */}
            <div className="flex items-center gap-2 mb-4">
              <Search size={14} className="text-gray-500" />
              <span className="text-sm font-semibold italic text-gray-700">Find Your Perfect Companion</span>
              <Heart size={14} className="text-green-400 fill-green-300" />
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Find the Right<br />
              <span className="text-green-500">Companion</span>{' '}
              <span className="text-gray-900">for You</span>{' '}
              <Heart size={28} className="inline text-green-300 fill-green-200 -mt-1" />
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-sm">
              Every pet is unique. Tell us your preferences and
              we'll help you find a companion who's the perfect match.
            </p>

            {/* ── Filter Card ── */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-6">

              {/* Pet type tabs */}
              <div className="flex items-center gap-1 border-b border-gray-100 mb-5 pb-0">
                {petTypes.map((pt) => {
                  const Icon = pt.icon;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setPetType(pt.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all duration-200 border-b-2 -mb-px cursor-pointer
                        ${petType === pt.id
                          ? 'text-green-600 border-green-500 bg-green-50/60 font-bold'
                          : 'text-gray-500 border-transparent hover:text-gray-800'
                        }`}
                    >
                      <Icon size={16} className={petType === pt.id ? 'text-green-600' : 'text-gray-400'} />
                      <span>{pt.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Filter rows */}
              <div className="flex flex-col gap-4">
                <PillGroup icon={Calendar} options={ageOptions}    value={age}    onChange={setAge} />
                <PillGroup icon={Ruler}    options={sizeOptions}   value={size}   onChange={setSize} />
                <PillGroup icon={Users}    options={genderOptions} value={gender} onChange={setGender} />
                <PillGroup icon={Zap}      options={energyOptions} value={energy} onChange={setEnergy} />

                {/* Toggles row */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                  {/* Good with Kids */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 border border-amber-100/80 flex items-center justify-center shrink-0">
                      <Baby size={14} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Good with Kids</span>
                    <span className="text-gray-400 text-xs cursor-help" title="Friendly with children">?</span>
                    <Toggle value={goodKids} onChange={setGoodKids} />
                  </div>
                  {/* Good with Pets */}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-green-50 text-green-600 border border-green-100/80 flex items-center justify-center shrink-0">
                      <PawPrint size={14} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">Good with Other Pets</span>
                    <span className="text-gray-400 text-xs cursor-help" title="Friendly with other pets">?</span>
                    <Toggle value={goodPets} onChange={setGoodPets} />
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3 mt-5">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(34,197,94,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl shadow-md shadow-green-200 transition-colors duration-200 text-sm"
                >
                  <PawPrint size={16} className="fill-white" />
                  Find My Match
                  <ArrowRight size={15} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-4 py-3 border border-gray-200 rounded-2xl text-gray-600 text-sm font-medium hover:border-gray-300 transition-colors"
                >
                  <RotateCcw size={13} />
                  Reset Filters
                </motion.button>
              </div>
            </div>

            {/* Footer note */}
            <div className="flex items-center gap-2 mt-4">
              <Sparkles size={13} className="text-green-500" />
              <p className="text-gray-500 text-xs">Over <span className="font-semibold text-gray-700">500+</span> pets are waiting to meet you!</p>
            </div>
          </motion.div>

          {/* ╔═══════════════╗
              ║  RIGHT PANEL  ║
              ╚═══════════════╝ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >

            {/* ── Trust Badges Bar ── */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl px-3 py-3 flex flex-col items-start gap-1 border border-gray-100 shadow-sm"
                >
                  <b.icon size={16} className={b.color} />
                  <span className="text-xs font-bold text-gray-800 leading-tight">{b.title}</span>
                  <span className="text-[10px] text-gray-400 leading-snug">{b.sub}</span>
                </div>
              ))}
            </div>

            {/* ── Results Card ── */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Results header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles size={14} className="text-amber-500" />
                    <span className="text-xs text-gray-500 font-medium italic">Great news!</span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-extrabold text-gray-900"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    We found{' '}
                    <span className="text-green-500 relative">
                      23
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-green-300 rounded-full" />
                    </span>{' '}
                    perfect matches
                  </h3>
                </div>
                {/* Nav arrows */}
                <div className="flex items-center gap-1.5">
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-400 hover:text-green-500 transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-400 hover:text-green-500 transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Featured Pet */}
              <div className="px-5 pb-4">
                <div className="flex gap-4 bg-gray-50 rounded-2xl overflow-hidden">

                  {/* Pet image */}
                  <div className="relative w-44 sm:w-48 flex-shrink-0">
                    <img
                      src={buddyImg}
                      alt="Buddy – Best Match golden retriever"
                      className="w-full h-full object-cover"
                      style={{ minHeight: '200px' }}
                    />
                    {/* Heart button */}
                    <button
                      onClick={() => toggleLike('buddy')}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                    >
                      <Heart
                        size={14}
                        className={likedPets['buddy'] ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}
                      />
                    </button>
                  </div>

                  {/* Pet details */}
                  <div className="flex flex-col justify-between py-4 pr-4 flex-1 min-w-0">
                    {/* Best Match badge */}
                    <div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-600 text-[10px] font-semibold mb-2">
                        <Star size={9} className="fill-amber-400 text-amber-400" />
                        Best Match
                      </span>

                      <div className="flex items-center gap-2 mb-1">
                        <h4
                          className="text-xl font-extrabold text-gray-900"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          Buddy
                        </h4>
                        <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                          <PawPrint size={10} className="text-green-400" />
                          Dog
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mb-3">
                        2 years old · Male · Large
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {[
                          { icon: Zap, label: 'High Energy' },
                          { icon: Baby, label: 'Good with Kids' },
                          { icon: PawPrint, label: 'Good with Pets' },
                        ].map((tag) => {
                          const TagIcon = tag.icon;
                          return (
                            <span
                              key={tag.label}
                              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-50 text-green-700 text-[11px] font-medium rounded-full border border-green-100"
                            >
                              <TagIcon size={12} className="text-green-600" />
                              {tag.label}
                            </span>
                          );
                        })}
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed mb-4">
                        Friendly, playful and loves everyone.
                        Great with kids and other pets.
                      </p>
                    </div>

                    {/* Action row */}
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.04, boxShadow: '0 6px 18px rgba(34,197,94,0.35)' }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-1.5 px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-xl shadow-sm hover:bg-green-600 transition-colors"
                      >
                        View Profile
                        <ArrowRight size={12} />
                      </motion.button>

                      <button
                        onClick={() => toggleLike('buddy-heart')}
                        className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center hover:border-rose-300 transition-colors"
                      >
                        <Heart size={14} className={likedPets['buddy-heart'] ? 'fill-rose-500 text-rose-500' : 'text-gray-400'} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Pet Cards Row */}
              <div className="grid grid-cols-3 gap-3 px-5 pb-5">
                {[
                  { id: 'luna', name: 'Luna',  type: 'Cat', age: '1 year',   gender: 'Female', energy: '⚡ Medium Energy', img: lunaImg },
                  { id: 'max',  name: 'Max',   type: 'Dog', age: '3 years',  gender: 'Male',   energy: '⚡ High Energy',   img: maxImg  },
                  { id: 'milo', name: 'Milo',  type: 'Cat', age: '6 months', gender: 'Male',   energy: '⚡ Medium Energy', img: miloImg },
                ].map((pet) => (
                  <div key={pet.id} className="relative bg-gray-50 rounded-2xl overflow-hidden group">
                    {/* Image */}
                    <div className="relative w-full aspect-square">
                      <img
                        src={pet.img}
                        alt={pet.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Heart */}
                      <button
                        onClick={() => toggleLike(pet.id)}
                        className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm"
                      >
                        <Heart size={10} className={likedPets[pet.id] ? 'fill-rose-500 text-rose-500' : 'text-gray-400'} />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="p-2">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-xs font-bold text-gray-900">{pet.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <PawPrint size={8} className="text-green-400 flex-shrink-0" />
                        <span className="text-[9px] text-gray-500">{pet.type}</span>
                      </div>
                      <p className="text-[9px] text-gray-400 mt-0.5">{pet.age} · {pet.gender}</p>
                      <p className="text-[9px] text-green-600 mt-0.5 font-medium">{pet.energy}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dot pagination */}
              <div className="flex items-center justify-center gap-1.5 pb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
