import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  PawPrint,
  Home,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Quote,
  Sparkles,
  MapPin,
  Smile,
  Frown,
  CheckCircle2
} from 'lucide-react';

import beforeDog from '../assets/story-before-dog.jpg';
import afterDog from '../assets/story-after-dog.jpg';
import beforeAfterFull from '../assets/story-before-after.jpg';
import petsDoodle from '../assets/story-pets-doodle-transparent.png';

import avatar1 from '../assets/story-avatar-1.jpg';
import avatar2 from '../assets/story-avatar-2.jpg';
import avatar3 from '../assets/story-avatar-3.jpg';
import avatar4 from '../assets/story-avatar-4.jpg';
import avatar5 from '../assets/story-avatar-5.jpg';

// Multiple Before/After Stories for the top interactive carousel
const beforeAfterStories = [
  {
    id: 1,
    title: 'Rusty & The Golden Life',
    subtitle: 'From a lonely shelter cage to a warm family couch.',
    before: {
      tag: 'BEFORE',
      subtag: 'Shelter Days',
      image: beforeDog,
      note: 'Lonely days, waiting for a second chance.',
    },
    after: {
      tag: 'AFTER',
      subtag: 'Forever Home',
      image: afterDog,
      note: 'Loved, safe and finally home.',
    },
  },
  {
    id: 2,
    title: 'Luna The Tabby',
    subtitle: 'Rescued from the streets, now the queen of her home.',
    before: {
      tag: 'BEFORE',
      subtag: 'Street Rescue',
      image: beforeDog,
      note: 'Scared and hungry in the cold.',
    },
    after: {
      tag: 'AFTER',
      subtag: 'Loved Pet',
      image: afterDog,
      note: 'Spoiled, cherished and deeply loved.',
    },
  },
  {
    id: 3,
    title: 'Max The Gentle Giant',
    subtitle: 'Overcame illness and found a patient, loving parent.',
    before: {
      tag: 'BEFORE',
      subtag: 'Recovery Ward',
      image: beforeDog,
      note: 'Quiet and unsure of humans.',
    },
    after: {
      tag: 'AFTER',
      subtag: 'Thriving',
      image: afterDog,
      note: 'Playful, confident and full of joy.',
    },
  },
  {
    id: 4,
    title: 'Bella & Milo',
    subtitle: 'A bonded pair who refused to be separated.',
    before: {
      tag: 'BEFORE',
      subtag: 'Waiting Room',
      image: beforeDog,
      note: 'Hoping for a family together.',
    },
    after: {
      tag: 'AFTER',
      subtag: 'Double Joy',
      image: afterDog,
      note: 'Adopted together forever.',
    },
  },
  {
    id: 5,
    title: 'Coco The Brave',
    subtitle: 'A stray puppy who stole every volunteer’s heart.',
    before: {
      tag: 'BEFORE',
      subtag: 'Shelter Days',
      image: beforeDog,
      note: 'Waiting through long shelter nights.',
    },
    after: {
      tag: 'AFTER',
      subtag: 'Forever Home',
      image: afterDog,
      note: 'Endless cuddles and backyard fetch.',
    },
  },
];

// Adoption Stories
const adoptionTestimonials = [
  {
    id: 1,
    name: 'Sarah & Max',
    location: 'Lahore',
    avatar: avatar1,
    heartColor: 'text-rose-400',
    quote: 'We came looking for a dog and found a new member of our family.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ali & Leo',
    location: 'Karachi',
    avatar: avatar2,
    heartColor: 'text-[#275d33]',
    quote: "Adopting our cat was the best decision we've ever made.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Fatima',
    location: 'Islamabad',
    avatar: avatar3,
    heartColor: 'text-blue-400',
    quote: "He's not just a pet, he's my best friend.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Hamza & Toby',
    location: 'Lahore',
    avatar: avatar1,
    heartColor: 'text-amber-400',
    quote: 'The team guided us every step of the adoption process. Incredible!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Zainab & Bella',
    location: 'Rawalpindi',
    avatar: avatar2,
    heartColor: 'text-emerald-500',
    quote: 'We could not imagine our home without our playful bundle of joy.',
    rating: 5,
  },
];

// Boarding Reviews
const boardingTestimonials = [
  {
    id: 1,
    name: 'Ahmed R.',
    location: 'Lahore',
    avatar: avatar4,
    badgeColor: 'bg-[#eff4fb] text-[#3b71ca]',
    quote: 'Knowing our dog was in safe hands made going away so much easier.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Hira S.',
    location: 'Islamabad',
    avatar: avatar5,
    badgeColor: 'bg-[#fef4ea] text-[#d97706]',
    quote: 'Excellent care, regular updates, and a happy, relaxed cat.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bilal K.',
    location: 'Karachi',
    avatar: avatar4,
    badgeColor: 'bg-[#ebf3ec] text-[#275d33]',
    quote: 'Daily photo updates and video clips brought huge peace of mind.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ayesha M.',
    location: 'Lahore',
    avatar: avatar5,
    badgeColor: 'bg-[#fef4ea] text-[#d97706]',
    quote: 'Our cat usually hates new environments, but she purred the whole time!',
    rating: 5,
  },
];

export default function Testimonials() {
  // Before / After carousel index
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Before / After interactive slider percentage (default 50%)
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  // Carousel indexes for bottom panels
  const [adoptionPage, setAdoptionPage] = useState(0);
  const [boardingPage, setBoardingPage] = useState(0);

  // Handle Dragging / Sliding on Before & After Card
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const currentStory = beforeAfterStories[activeStoryIndex];

  return (
    <section id="stories" className="relative bg-[#FAF7F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] scroll-mt-20">
      <span id="testimonials" className="sr-only" />
      <span id="blog" className="sr-only" />
      
      {/* Decorative background paw watermarks */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-[0.05] select-none text-[#275d33]">
        <PawPrint className="w-28 h-28 -rotate-12" />
      </div>
      <div className="absolute top-28 right-8 pointer-events-none opacity-[0.05] select-none text-[#275d33]">
        <PawPrint className="w-32 h-32 rotate-12" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* ==============================================================
            TOP BLOCK: 3 Columns (Header & Nav | Before/After Slider | Impact Stats)
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Heading & Carousel Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#33683a] text-lg font-serif tracking-wide select-none">
                \\
              </span>
              <span className="font-serif italic text-base sm:text-lg text-stone-700 font-medium">
                Stories That Melt Hearts
              </span>
              <svg
                className="w-5 h-5 text-[#33683a] stroke-current fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#19231b] leading-[1.12] tracking-tight">
              From Shelter to <br />
              <span className="text-[#275d33] inline-flex items-center gap-2">
                Forever Home
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#33683a] stroke-current fill-none stroke-[2] inline-block -rotate-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Every rescue has a story. Every adoption creates a forever bond. See how love changes everything.
            </p>

            {/* Carousel Navigation Buttons & 5 Dots */}
            <div className="flex items-center gap-4 mt-7">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveStoryIndex((prev) =>
                    prev === 0 ? beforeAfterStories.length - 1 : prev - 1
                  )
                }
                className="w-12 h-12 rounded-full border border-stone-200 bg-white/80 hover:bg-white text-stone-700 flex items-center justify-center transition-all shadow-sm hover:shadow cursor-pointer active:scale-95"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* 5 Pagination Dots */}
              <div className="flex items-center gap-2">
                {beforeAfterStories.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStoryIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeStoryIndex === idx
                        ? 'w-7 h-2.5 bg-[#275d33]'
                        : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button (Solid Green) */}
              <button
                type="button"
                onClick={() =>
                  setActiveStoryIndex((prev) =>
                    prev === beforeAfterStories.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-12 h-12 rounded-full bg-[#275d33] hover:bg-[#1e4828] text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Column: Interactive Before / After Split Slider */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full max-w-[460px] h-[330px] sm:h-[350px] rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.08)] border border-stone-200/80 select-none cursor-ew-resize bg-stone-900 group"
            >
              {/* === AFTER IMAGE LAYER (Full Background) === */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={afterDog}
                  alt="Dog in forever home"
                  className="w-full h-full object-cover"
                />

                {/* Top Green Badge */}
                <div className="absolute top-4 right-4 z-10 flex flex-col items-end">
                  <div className="bg-[#275d33] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    AFTER
                  </div>
                  <span className="text-[10px] text-stone-800 bg-white/80 backdrop-blur-xs font-semibold px-2 py-0.5 rounded-full mt-1 shadow-xs">
                    Forever Home
                  </span>
                </div>

                {/* Doodle Rays above dog */}
                <div className="absolute top-14 right-28 pointer-events-none text-[#275d33] font-bold select-none text-lg">
                  \ | /
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#275d33]/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span className="font-medium">{currentStory.after.note}</span>
                </div>
              </div>

              {/* === BEFORE IMAGE LAYER (Clipped Left Side) === */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-[460px] h-full">
                  <img
                    src={beforeDog}
                    alt="Dog in shelter cage"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle dark tint to convey shelter mood */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                  {/* Top Black Badge */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col items-start">
                    <div className="bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      BEFORE
                    </div>
                    <span className="text-[10px] text-white/90 bg-black/50 backdrop-blur-xs font-medium px-2 py-0.5 rounded-full mt-1">
                      Shelter Days
                    </span>
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow max-w-[210px] truncate">
                    <Frown className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                    <span className="font-medium truncate">{currentStory.before.note}</span>
                  </div>
                </div>
              </div>

              {/* === INTERACTIVE SLIDER DIVIDER LINE & HANDLE === */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                {/* Vertical Divider Line */}
                <div className="w-[3px] h-full bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

                {/* Circular Center Handle with < > */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.25)] flex items-center justify-center text-stone-700 font-bold border border-stone-200 pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                  <div className="flex items-center text-xs tracking-tighter font-extrabold text-[#275d33]">
                    <span>&lsaquo;</span>
                    <span>&rsaquo;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Making a Difference Together" Stats Card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-stone-200/70">
              
              {/* Header */}
              <div className="mb-6">
                <span className="font-serif italic text-base text-stone-700 block">
                  Making a Difference
                </span>
                <span className="text-[#275d33] font-bold text-lg inline-flex items-center gap-1.5">
                  Together
                  <svg
                    className="w-4 h-4 text-[#33683a] stroke-current fill-none stroke-[2]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
              </div>

              {/* 4 Impact Statistics */}
              <div className="space-y-4">
                {/* Stat 1 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-stone-900 leading-tight">500+</h4>
                    <p className="text-xs text-stone-500 font-medium">Pets Adopted</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-stone-900 leading-tight">300+</h4>
                    <p className="text-xs text-stone-500 font-medium">Happy Families</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                    <PawPrint className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-stone-900 leading-tight">100%</h4>
                    <p className="text-xs text-stone-500 font-medium">Committed Care</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 leading-tight">Years of Trust</h4>
                    <p className="text-xs text-stone-500 font-medium">In Our Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* ==============================================================
            MIDDLE BLOCK: TWO SIDE-BY-SIDE PANELS (Adoption Stories & Boarding Reviews)
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* ================= PANEL 1: ADOPTION STORIES (Warm Green Theme) ================= */}
          <div className="lg:col-span-7 bg-[#f6f4ee]/80 rounded-[32px] p-6 sm:p-8 border border-stone-200/70 relative">
            
            {/* Soft paw print watermark on header */}
            <div className="flex items-center justify-between mb-6">
              <PawPrint className="w-6 h-6 text-[#275d33]/20" />
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 inline-flex items-center gap-2">
                  Adoption Stories
                  <svg
                    className="w-5 h-5 text-[#33683a] stroke-current fill-none stroke-[2]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">Real families. Real love.</p>
              </div>
              <PawPrint className="w-6 h-6 text-[#275d33]/20" />
            </div>

            {/* Testimonials Cards Grid */}
            <div className="relative">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() =>
                  setAdoptionPage((prev) => (prev > 0 ? prev - 1 : 0))
                }
                disabled={adoptionPage === 0}
                className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-stone-200 items-center justify-center text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous adoption testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setAdoptionPage((prev) =>
                    prev < adoptionTestimonials.length - 3 ? prev + 1 : prev
                  )
                }
                disabled={adoptionPage >= adoptionTestimonials.length - 3}
                className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-stone-200 items-center justify-center text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next adoption testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Cards List (3 on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {adoptionTestimonials.slice(adoptionPage, adoptionPage + 3).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col justify-between relative"
                  >
                    <div>
                      {/* Avatar with doodle heart */}
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full rounded-full object-cover shadow-sm border-2 border-white"
                        />
                        {/* Outlined heart doodle */}
                        <svg
                          className={`absolute -top-1 -right-1 w-5 h-5 ${item.heartColor} stroke-current fill-none stroke-[2]`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>

                      {/* Quote mark & text */}
                      <div className="text-[#275d33] mb-1 font-serif text-xl select-none leading-none">
                        “
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed min-h-[56px]">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 text-center">
                      {/* 5 Stars */}
                      <div className="flex items-center justify-center gap-0.5 text-amber-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <h5 className="text-xs font-bold text-stone-900">{item.name}</h5>
                      <div className="flex items-center justify-center gap-1 text-[11px] text-stone-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pagination & Read More CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-2">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      adoptionPage === idx ? 'w-5 bg-[#275d33]' : 'bg-stone-300'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-stone-300/80 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold shadow-xs transition-all cursor-pointer hover:border-stone-400"
              >
                <PawPrint className="w-3.5 h-3.5 text-[#275d33]" />
                <span>Read More Adoption Stories</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </div>
          </div>


          {/* ================= PANEL 2: BOARDING REVIEWS (Blue/Indigo Tint Theme) ================= */}
          <div className="lg:col-span-5 bg-[#f7f9fb]/90 rounded-[32px] p-6 sm:p-8 border border-stone-200/70 relative">
            
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 inline-flex items-center gap-2">
                Boarding Reviews
                <PawPrint className="w-5 h-5 text-[#3b71ca] fill-current" />
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">Peace of mind while you&apos;re away.</p>
            </div>

            {/* Testimonials Cards Grid */}
            <div className="relative">
              {/* Next and Prev Controls */}
              <button
                type="button"
                onClick={() =>
                  setBoardingPage((prev) => (prev > 0 ? prev - 1 : 0))
                }
                disabled={boardingPage === 0}
                className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-stone-200 items-center justify-center text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous boarding reviews"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setBoardingPage((prev) =>
                    prev < boardingTestimonials.length - 2 ? prev + 1 : prev
                  )
                }
                disabled={boardingPage >= boardingTestimonials.length - 2}
                className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-stone-200 items-center justify-center text-stone-600 hover:text-stone-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next boarding reviews"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Cards List (2 on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {boardingTestimonials.slice(boardingPage, boardingPage + 2).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col justify-between relative"
                  >
                    <div>
                      {/* Avatar */}
                      <div className="w-16 h-16 mx-auto mb-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full rounded-full object-cover shadow-sm border-2 border-white"
                        />
                      </div>

                      {/* Quote mark */}
                      <div className="flex justify-start mb-1">
                        <span className={`w-6 h-6 rounded-full ${item.badgeColor} flex items-center justify-center text-xs font-serif font-bold`}>
                          “
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed min-h-[56px]">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 text-center">
                      {/* 5 Stars */}
                      <div className="flex items-center justify-center gap-0.5 text-amber-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <h5 className="text-xs font-bold text-stone-900">{item.name}</h5>
                      <div className="flex items-center justify-center gap-1 text-[11px] text-stone-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pagination & Read More CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-2">
              <div className="flex items-center gap-1.5">
                {[0, 1].map((idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      boardingPage === idx ? 'w-5 bg-[#3b71ca]' : 'bg-stone-300'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-stone-300/80 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold shadow-xs transition-all cursor-pointer hover:border-stone-400"
              >
                <PawPrint className="w-3.5 h-3.5 text-[#3b71ca]" />
                <span>See More Boarding Reviews</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
              </button>
            </div>
          </div>

        </div>


        {/* ==============================================================
            BOTTOM BLOCK: 4 VALUE PILLARS & ILLUSTRATED MASCOT DUO
           ============================================================== */}
        <div className="relative">
          {/* Main White Card with 4 Pillars */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-stone-200/70">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
              
              {/* Pillar 1: Second Chances */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3 first:pt-0 first:px-0">
                <div className="w-11 h-11 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">Second Chances</h4>
                  <p className="text-xs text-stone-500 mt-0.5">We give hope to pets in need.</p>
                </div>
              </div>

              {/* Pillar 2: Happy Families */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-emerald-50 text-[#275d33] flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">Happy Families</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Creating lifelong bonds.</p>
                </div>
              </div>

              {/* Pillar 3: Trusted Care */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <PawPrint className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">Trusted Care</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Every step, always.</p>
                </div>
              </div>

              {/* Pillar 4: Forever Impact */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
                <div className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-snug">Forever Impact</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Changing lives, every day.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Illustrated Cat & Puppy Mascot at the bottom right */}
          <div className="absolute -bottom-2 right-2 sm:right-6 lg:right-10 pointer-events-none select-none z-20 w-24 sm:w-28 lg:w-32 translate-y-3 sm:translate-y-4">
            {/* Heart doodle above pets */}
            <div className="flex justify-center mb-1">
              <svg
                className="w-4 h-4 text-rose-400 stroke-current fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <img
              src={petsDoodle}
              alt="Cartoon kitten and puppy companion mascot"
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Dotted wave doodle on bottom left */}
          <div className="hidden sm:block absolute -bottom-5 left-4 pointer-events-none select-none text-stone-400/60 text-xs">
            <svg className="w-24 h-6 text-stone-300 stroke-current fill-none" viewBox="0 0 100 20">
              <path
                d="M0 10 Q 25 0, 50 10 T 100 10"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
