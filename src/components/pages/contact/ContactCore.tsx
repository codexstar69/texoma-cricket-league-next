'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt, CheckCircle, CaretDown, WarningCircle, CircleNotch, ArrowSquareOut } from '@phosphor-icons/react';

const ContactCore = () => {
   const [formState, setFormState] = useState({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
   });
   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
   const [errors, setErrors] = useState<Record<string, string>>({});

   const validate = () => {
      const newErrors: Record<string, string> = {};
      if (!formState.name.trim()) newErrors.name = "Full name is required";
      if (!formState.email.trim()) {
         newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
         newErrors.email = "Please enter a valid email address";
      }
      if (!formState.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
      if (!formState.message.trim()) newErrors.message = "Message is required";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setStatus('submitting');

      // Simulate API call
      setTimeout(() => {
         setStatus('success');
         setFormState({ name: '', email: '', phone: '', inquiryType: '', message: '' });
         setErrors({});
      }, 1500);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
      if (errors[e.target.name]) {
         setErrors(prev => {
            const rest = { ...prev };
            delete rest[e.target.name];
            return rest;
         });
      }
   };

   return (
      <section className="bg-tcl-off-white py-16 md:py-32 relative z-10 grain">
         <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Contact Channels & Location Preview */}
            <div className="flex flex-col gap-10">

               {/* Channel Blocks */}
               <div className="flex flex-col gap-6">
                  {/* Email */}
                  <motion.div
                     initial={{ opacity: 0, x: -25 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex items-start gap-5 group"
                  >
                     <div className="w-12 h-12 rounded-xl bg-tcl-navy/10 flex items-center justify-center shrink-0 group-hover:bg-tcl-gold/15 transition-colors">
                        <EnvelopeSimple weight="bold" size={24} className="text-tcl-navy" />
                     </div>
                     <div>
                        <span className="block font-barlow-condensed font-semibold text-[12px] text-tcl-gold uppercase tracking-[0.1em] mb-1">Email</span>
                        <a href="mailto:info@texomacricket.com" className="block font-source-sans font-semibold text-[17px] text-tcl-navy hover:text-tcl-crimson hover:underline decoration-2 underline-offset-4 transition-colors mb-1">
                           info@texomacricket.com
                        </a>
                        <span className="block font-source-sans text-[13px] text-[#999]">We typically respond within 24 hours</span>
                     </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                     initial={{ opacity: 0, x: -25 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="flex items-start gap-5 group"
                  >
                     <div className="w-12 h-12 rounded-xl bg-tcl-navy/10 flex items-center justify-center shrink-0 group-hover:bg-tcl-gold/15 transition-colors">
                        <Phone weight="bold" size={24} className="text-tcl-navy" />
                     </div>
                     <div>
                        <span className="block font-barlow-condensed font-semibold text-[12px] text-tcl-gold uppercase tracking-[0.1em] mb-1">Phone</span>
                        <a href="tel:469-246-7342" className="block font-source-sans font-semibold text-[17px] text-tcl-navy hover:text-tcl-crimson hover:underline decoration-2 underline-offset-4 transition-colors mb-1">
                           469-246-7342
                        </a>
                        <span className="block font-source-sans text-[13px] text-[#999]">Mon – Fri, 9 AM – 6 PM CST</span>
                     </div>
                  </motion.div>

                  {/* Visit */}
                  <motion.div
                     initial={{ opacity: 0, x: -25 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="flex items-start gap-5 group"
                  >
                     <div className="w-12 h-12 rounded-xl bg-tcl-navy/10 flex items-center justify-center shrink-0 group-hover:bg-tcl-gold/15 transition-colors">
                        <MapPin weight="bold" size={24} className="text-tcl-navy" />
                     </div>
                     <div>
                        <span className="block font-barlow-condensed font-semibold text-[12px] text-tcl-gold uppercase tracking-[0.1em] mb-1">Visit Us</span>
                        <span className="block font-source-sans font-semibold text-[17px] text-tcl-navy">Sports Texoma</span>

                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="font-barlow-condensed font-medium text-[13px] text-tcl-crimson uppercase hover:underline">Get Directions →</a>
                     </div>
                  </motion.div>
               </div>

               <div className="w-full h-[1px] bg-tcl-gold/20 md:hidden"></div>

               {/* Location Preview */}
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
               >
                  <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-tcl-navy-light border border-tcl-light-gray group shadow-layered">
                     {/* Topographic pattern simulation */}
                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, transparent 20%, #0B2C4D 20%, #0B2C4D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0B2C4D 20%, #0B2C4D 80%, transparent 80%, transparent)', backgroundSize: '20px 20px, 30px 30px', backgroundPosition: '0 0, 15px 15px' }}></div>

                     <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <MapPin weight="bold" size={32} className="text-tcl-gold mb-2" />
                        <span className="font-barlow-condensed font-bold text-[14px] text-white uppercase tracking-wide">Sports Texoma</span>
                        <span className="font-source-sans text-[12px] text-white/60">Sports Texoma</span>
                     </div>

                     {/* Interactive overlay hint */}
                     <a
                        href="https://maps.google.com/?q=Sports+Texoma,Pottsboro,TX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-tcl-navy/0 group-hover:bg-tcl-navy/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300"
                     >
                        <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full font-barlow-condensed font-semibold text-white uppercase text-xs border border-white/20 flex items-center gap-1.5">
                           Open Map <ArrowSquareOut weight="bold" size={14} />
                        </span>
                     </a>
                  </div>
                  <p className="font-source-sans text-[12px] text-[#AAA] italic mt-3 flex items-center gap-1.5">
                     <span className="w-1.5 h-1.5 rounded-full bg-tcl-green"></span>
                     Serving Texas & Oklahoma — Texoma Region
                  </p>
               </motion.div>

            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-2xl border border-tcl-light-gray shadow-layered p-6 md:p-10 border-t-[3px] border-t-tcl-gold relative overflow-hidden"
            >
               <AnimatePresence mode='wait'>
                  {status === 'success' ? (
                     <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center text-center h-full py-20"
                     >
                        <motion.div
                           initial={{ scale: 0 }}
                           animate={{ scale: 1 }}
                           transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                           <CheckCircle weight="fill" size={56} className="text-tcl-green mb-6" />
                        </motion.div>
                        <h3 className="font-barlow-condensed font-bold text-[24px] text-tcl-navy uppercase mb-2">Message Sent!</h3>
                        <p className="font-source-sans text-[16px] text-[#555] max-w-xs mb-8">
                           Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <button
                           onClick={() => setStatus('idle')}
                           className="text-tcl-crimson font-barlow-condensed font-semibold text-[14px] uppercase underline hover:text-tcl-crimson-dark"
                        >
                           Send Another Message
                        </button>
                     </motion.div>
                  ) : (
                     <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                     >
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-[52px] h-[52px] rounded-xl bg-tcl-navy/10 flex items-center justify-center shrink-0">
                              <PaperPlaneTilt weight="bold" size={28} className="text-tcl-gold -ml-0.5 mt-0.5" />
                           </div>
                           <div>
                              <h2 className="font-barlow-condensed font-bold text-[20px] text-tcl-navy uppercase leading-none mb-1">Send Us A Message</h2>
                              <p className="font-source-sans text-[15px] text-[#666]">Fill out the form below and we'll get back to you.</p>
                           </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                           <div>
                              <label htmlFor="name" className="block font-source-sans font-semibold text-[14px] text-tcl-navy mb-2">
                                 Full Name <span className="text-tcl-crimson">*</span>
                              </label>
                              <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 value={formState.name}
                                 onChange={handleChange}
                                 placeholder="Your full name"
                                 className={`w-full rounded-xl border-[1.5px] bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] placeholder-[#BBB] font-source-sans transition-all duration-200 focus:outline-none focus:ring-[3px]
                              ${errors.name
                                       ? 'border-tcl-crimson focus:border-tcl-crimson focus:ring-tcl-crimson/10'
                                       : 'border-tcl-light-gray focus:border-tcl-gold focus:ring-tcl-gold/10'}
                           `}
                              />
                              {errors.name && (
                                 <div className="flex items-center gap-1.5 mt-2 text-tcl-crimson">
                                    <WarningCircle weight="bold" size={14} />
                                    <span className="text-[13px] font-source-sans">{errors.name}</span>
                                 </div>
                              )}
                           </div>

                           <div>
                              <label htmlFor="email" className="block font-source-sans font-semibold text-[14px] text-tcl-navy mb-2">
                                 Email Address <span className="text-tcl-crimson">*</span>
                              </label>
                              <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 value={formState.email}
                                 onChange={handleChange}
                                 placeholder="you@example.com"
                                 className={`w-full rounded-xl border-[1.5px] bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] placeholder-[#BBB] font-source-sans transition-all duration-200 focus:outline-none focus:ring-[3px]
                              ${errors.email
                                       ? 'border-tcl-crimson focus:border-tcl-crimson focus:ring-tcl-crimson/10'
                                       : 'border-tcl-light-gray focus:border-tcl-gold focus:ring-tcl-gold/10'}
                           `}
                              />
                              {errors.email && (
                                 <div className="flex items-center gap-1.5 mt-2 text-tcl-crimson">
                                    <WarningCircle weight="bold" size={14} />
                                    <span className="text-[13px] font-source-sans">{errors.email}</span>
                                 </div>
                              )}
                           </div>

                           <div>
                              <label htmlFor="phone" className="block font-source-sans font-semibold text-[14px] text-tcl-navy mb-2">
                                 Phone Number <span className="font-normal text-[#AAA] text-[12px]">(optional)</span>
                              </label>
                              <input
                                 type="tel"
                                 id="phone"
                                 name="phone"
                                 value={formState.phone}
                                 onChange={handleChange}
                                 placeholder="Your phone number"
                                 className="w-full rounded-xl border-[1.5px] border-tcl-light-gray bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] placeholder-[#BBB] font-source-sans transition-all duration-200 focus:border-tcl-gold focus:outline-none focus:ring-[3px] focus:ring-tcl-gold/10"
                              />
                           </div>

                           <div>
                              <label htmlFor="inquiryType" className="block font-source-sans font-semibold text-[14px] text-tcl-navy mb-2">
                                 I'm reaching out as... <span className="text-tcl-crimson">*</span>
                              </label>
                              <div className="relative">
                                 <select
                                    id="inquiryType"
                                    name="inquiryType"
                                    value={formState.inquiryType}
                                    onChange={handleChange}
                                    className={`w-full rounded-xl border-[1.5px] bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] font-source-sans transition-all duration-200 focus:outline-none focus:ring-[3px] appearance-none
                                 ${!formState.inquiryType ? 'text-[#BBB]' : 'text-[#333]'}
                                 ${errors.inquiryType
                                          ? 'border-tcl-crimson focus:border-tcl-crimson focus:ring-tcl-crimson/10'
                                          : 'border-tcl-light-gray focus:border-tcl-gold focus:ring-tcl-gold/10'}
                              `}
                                 >
                                    <option value="" disabled>Select an option</option>
                                    <option value="parent">Parent / Guardian</option>
                                    <option value="player">Player</option>
                                    <option value="coach">Coach</option>
                                    <option value="director">Academy Director</option>
                                    <option value="umpire">Umpire / Scorer</option>
                                    <option value="sponsor">Sponsor / Partner</option>
                                    <option value="other">Other</option>
                                 </select>
                                 <CaretDown weight="bold" size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
                              </div>
                              {errors.inquiryType && (
                                 <div className="flex items-center gap-1.5 mt-2 text-tcl-crimson">
                                    <WarningCircle weight="bold" size={14} />
                                    <span className="text-[13px] font-source-sans">{errors.inquiryType}</span>
                                 </div>
                              )}
                           </div>

                           <div>
                              <label htmlFor="message" className="block font-source-sans font-semibold text-[14px] text-tcl-navy mb-2">
                                 Message <span className="text-tcl-crimson">*</span>
                              </label>
                              <textarea
                                 id="message"
                                 name="message"
                                 value={formState.message}
                                 onChange={handleChange}
                                 rows={5}
                                 placeholder="How can we help you?"
                                 className={`w-full rounded-xl border-[1.5px] bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] placeholder-[#BBB] font-source-sans transition-all duration-200 focus:outline-none focus:ring-[3px] resize-y
                              ${errors.message
                                       ? 'border-tcl-crimson focus:border-tcl-crimson focus:ring-tcl-crimson/10'
                                       : 'border-tcl-light-gray focus:border-tcl-gold focus:ring-tcl-gold/10'}
                           `}
                              />
                              {errors.message && (
                                 <div className="flex items-center gap-1.5 mt-2 text-tcl-crimson">
                                    <WarningCircle weight="bold" size={14} />
                                    <span className="text-[13px] font-source-sans">{errors.message}</span>
                                 </div>
                              )}
                           </div>

                           <button
                              type="submit"
                              disabled={status === 'submitting'}
                              className="w-full h-14 bg-tcl-crimson text-white rounded-xl font-barlow-condensed font-semibold text-[15px] uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-tcl-crimson-dark hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none mt-2 shadow-lg shadow-tcl-crimson/20"
                           >
                              {status === 'submitting' ? (
                                 <>
                                    <span>Sending...</span>
                                    <CircleNotch weight="bold" size={18} className="animate-spin" />
                                 </>
                              ) : (
                                 <>
                                    <span>Send Message</span>
                                    <PaperPlaneTilt weight="bold" size={18} />
                                 </>
                              )}
                           </button>
                        </form>
                     </motion.div>
                  )}
               </AnimatePresence>
            </motion.div>

         </div>
      </section>
   );
};

export default ContactCore;
