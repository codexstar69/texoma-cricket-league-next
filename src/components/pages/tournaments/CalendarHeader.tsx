'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Star } from 'lucide-react';

const CalendarHeader = () => {
   return (
      <section className="bg-tcl-off-white pt-16 md:pt-24 pb-10 md:pb-12">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">

               {/* Header Text */}
               <div className="flex-1">
                  <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="flex items-center gap-3 mb-4"
                  >
                     <div className="w-10 h-[3px] bg-tcl-gold"></div>
                     <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Annual Calendar</span>
                  </motion.div>

                  <motion.h2
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="font-barlow-condensed font-bold text-[32px] md:text-[40px] text-tcl-navy uppercase leading-tight mb-4"
                  >
                     Cricket Texoma<br className="hidden md:block" /> Tournament Schedule
                  </motion.h2>

                  <motion.p
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="font-source-sans text-lg text-[#555]"
                  >
                     Plan your season with our comprehensive tournament calendar
                  </motion.p>
               </div>

               {/* Legend Card — compact on mobile, card on desktop */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-full lg:w-auto bg-white/60 lg:bg-white rounded-lg lg:rounded-xl border border-tcl-gray-100 lg:border-tcl-gray-200 lg:shadow-lg p-3 md:p-6"
               >
                  <div className="flex items-center gap-2 mb-2 md:mb-4 pb-2 md:pb-3 border-b border-tcl-gray-100">
                     <ShieldCheck className="w-4 h-4 text-tcl-gold flex-shrink-0" />
                     <span className="font-barlow-condensed font-semibold text-xs md:text-sm text-tcl-navy uppercase tracking-wide">Academy Partner Access Included</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-3">
                     <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-2 h-2 rounded-full bg-tcl-green"></div>
                        <span className="font-source-sans text-[11px] md:text-[13px] font-medium text-[#555]">Development Partner</span>
                     </div>
                     <div className="w-[1px] h-3 bg-tcl-gray-200 hidden sm:block"></div>

                     <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-2 h-2 rounded-full bg-tcl-sky"></div>
                        <span className="font-source-sans text-[11px] md:text-[13px] font-medium text-[#555]">Regional Partner</span>
                     </div>
                     <div className="w-[1px] h-3 bg-tcl-gray-200 hidden sm:block"></div>

                     <div className="flex items-center gap-1.5 md:gap-2">
                        <div className="w-2 h-2 rounded-full bg-tcl-navy"></div>
                        <span className="font-source-sans text-[11px] md:text-[13px] font-medium text-[#555]">National Partner</span>
                     </div>
                     <div className="w-[1px] h-3 bg-tcl-gray-200 hidden sm:block"></div>

                     <div className="flex items-center gap-1.5 md:gap-2">
                        <Star className="w-3 h-3 text-tcl-gold fill-tcl-gold" />
                        <span className="font-source-sans text-[11px] md:text-[13px] font-medium text-[#555]">Founding Partner</span>
                     </div>
                  </div>

                  <div className="mt-2 md:mt-3 pt-1 md:pt-2 border-t border-tcl-gray-50 md:border-0 md:pt-0 text-right">
                     <span className="font-source-sans text-[10px] text-[#AAA] uppercase tracking-wider">Tier Legend</span>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
};

export default CalendarHeader;
