import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PawPrint,
  Heart,
  ShieldCheck,
  Camera,
  Calendar,
  CalendarDays,
  User,
  Users,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  RotateCcw
} from 'lucide-react';

import petsImage from '../assets/boarding-enquiry-pets.jpg';
import leavesImage from '../assets/boarding-enquiry-leaves.png';

export default function BoardingEnquiry() {
  const [formData, setFormData] = useState({
    petType: '',
    petName: '',
    checkIn: '',
    checkOut: '',
    numPets: '',
    ownerName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      petType: '',
      petName: '',
      checkIn: '',
      checkOut: '',
      numPets: '',
      ownerName: '',
      email: '',
      phone: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section className="relative bg-[#FAF7F0] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Decorative leaf branch in bottom-left */}
      <div className="absolute bottom-0 left-0 pointer-events-none z-10 hidden sm:block w-36 sm:w-48 lg:w-56 select-none opacity-95">
        <img
          src={leavesImage}
          alt="Decorative leaves"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Background subtle paw watermark top right */}
      <div className="absolute top-10 right-12 pointer-events-none opacity-[0.07] select-none text-[#275d33]">
        <PawPrint className="w-36 h-36 rotate-12" />
      </div>

      <div className="max-w-[1280px] mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Header / Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3 text-[#275d33]">
                <PawPrint className="w-5 h-5 fill-[#275d33]" />
                <span className="font-serif italic text-base sm:text-lg text-stone-700 font-medium">
                  Boarding Enquiry
                </span>
                {/* Outlined heart doodle */}
                <svg
                  className="w-5 h-5 text-[#33683a] stroke-current fill-none stroke-[2]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#19231b] leading-[1.1] tracking-tight">
                Planning Your <br />
                <span className="text-[#275d33] inline-flex items-center gap-2">
                  Pet&apos;s Stay?
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#33683a] stroke-current fill-none stroke-[2] inline-block -rotate-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg">
                We&apos;d love to care for your pet while you&apos;re away. Send us a few details and we&apos;ll get back to you to confirm availability and answer any questions.
              </p>
            </motion.div>

            {/* Left Content Area: Features Card & Pets Image Below */}
            <div className="mt-7 flex flex-col gap-6">
              
              {/* Feature Highlights Card (Full width, responsive 2x2 grid) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] w-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Item 1 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">Safe &amp; Secure</h4>
                      <p className="text-xs text-stone-500 leading-normal mt-0.5">
                        Clean &amp; secure peace of mind.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 stroke-[2] fill-none" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">Loving Care</h4>
                      <p className="text-xs text-stone-500 leading-normal mt-0.5">
                        Personal attention &amp; daily love.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                      <PawPrint className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">Daily Fun</h4>
                      <p className="text-xs text-stone-500 leading-normal mt-0.5">
                        Playtime &amp; walks included.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0">
                      <Camera className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">Photo Updates</h4>
                      <p className="text-xs text-stone-500 leading-normal mt-0.5">
                        Daily photos so you never miss out.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pets sitting on cushion image - Placed NEECHE (below), cleanly centered with NO overflow into form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full flex items-center justify-center pt-2 select-none"
              >
                <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
                  <img
                    src={petsImage}
                    alt="Golden retriever and cat cozy on a cushion"
                    className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md"
                  />
                </div>
              </motion.div>
            </div>
          </div>


          {/* ================= RIGHT COLUMN: BOARDING ENQUIRY FORM CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.04)] border border-stone-200/70 relative overflow-hidden">
              
              {/* Soft paw prints decorative watermark on top right inside card */}
              <div className="absolute top-4 right-6 pointer-events-none opacity-[0.08] select-none text-[#275d33]">
                <div className="flex gap-2">
                  <PawPrint className="w-12 h-12 -rotate-12" />
                  <PawPrint className="w-8 h-8 rotate-12 mt-2" />
                </div>
              </div>

              {/* Form Card Header */}
              <div className="flex items-center gap-4 mb-7 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#ebf3ec] text-[#275d33] flex items-center justify-center shrink-0 shadow-sm">
                  <CalendarDays className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                    Boarding Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                    Tell us about your pet and your preferred stay dates.
                  </p>
                </div>
              </div>

              {/* Form Body or Success State */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#ebf3ec] text-[#275d33] flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-stone-900 mb-2">
                      Enquiry Submitted!
                    </h4>
                    <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                      Thank you, <span className="font-semibold text-stone-800">{formData.ownerName || 'Pet Parent'}</span>! We have received your request for <span className="font-semibold text-stone-800">{formData.petName || 'your pet'}</span> and will confirm availability shortly.
                    </p>
                    <div className="bg-[#FAF7F0] rounded-2xl p-4 w-full max-w-md text-left text-xs sm:text-sm text-stone-700 space-y-1.5 mb-6 border border-stone-200">
                      <p><span className="font-semibold">Pet Type:</span> {formData.petType || 'Not specified'}</p>
                      <p><span className="font-semibold">Dates:</span> {formData.checkIn || 'TBD'} to {formData.checkOut || 'TBD'}</p>
                      <p><span className="font-semibold">Contact:</span> {formData.email || formData.phone || 'Email / Phone'}</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 bg-[#275d33] hover:bg-[#1e4828] text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Send Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5 relative z-10"
                  >
                    {/* Row 1: Pet Type & Pet Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Pet Type */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Pet Type
                        </label>
                        <div className="relative flex items-center">
                          <PawPrint className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <select
                            name="petType"
                            value={formData.petType}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-9 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="text-stone-400">Select pet type</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog & Cat">Dog &amp; Cat</option>
                            <option value="Small Animals">Rabbit / Small Pet</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 pointer-events-none" />
                        </div>
                      </div>

                      {/* Pet Name */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Pet Name
                        </label>
                        <div className="relative flex items-center">
                          <User className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <input
                            type="text"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your pet's name"
                            className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Check-in Date & Check-out Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Check-in Date */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Check-in Date
                        </label>
                        <div className="relative flex items-center">
                          <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Check-out Date */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Check-out Date
                        </label>
                        <div className="relative flex items-center">
                          <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Number of Pets & Owner Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Number of Pets */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Number of Pets
                        </label>
                        <div className="relative flex items-center">
                          <Users className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <select
                            name="numPets"
                            value={formData.numPets}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-9 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="text-stone-400">Select number of pets</option>
                            <option value="1">1 Pet</option>
                            <option value="2">2 Pets</option>
                            <option value="3">3 Pets</option>
                            <option value="4+">4+ Pets</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-stone-400 absolute right-3.5 pointer-events-none" />
                        </div>
                      </div>

                      {/* Owner Name */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Owner Name
                        </label>
                        <div className="relative flex items-center">
                          <User className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Email
                        </label>
                        <div className="relative flex items-center">
                          <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                            className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                          Phone
                        </label>
                        <div className="relative flex items-center">
                          <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                            className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Message (Optional) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                        Message (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us anything we should know about your pet or their stay..."
                          className="w-full pl-10 pr-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl sm:rounded-2xl text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#275d33] focus:ring-2 focus:ring-[#275d33]/15 transition-all resize-none"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit CTA Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#275d33] hover:bg-[#1e4828] active:scale-[0.99] text-white font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_8px_20px_rgba(39,93,51,0.22)] hover:shadow-[0_12px_28px_rgba(39,93,51,0.32)] cursor-pointer disabled:opacity-70"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <PawPrint className="w-5 h-5 fill-white" />
                            <span>Request a Boarding Stay</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Reassurance text */}
                    <div className="flex items-center justify-center gap-2 pt-1 text-xs text-stone-500">
                      <ShieldCheck className="w-4 h-4 text-[#275d33]" />
                      <span>We&apos;ll get back to you to confirm availability and details.</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
