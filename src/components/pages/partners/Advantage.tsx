'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Advantage = () => {
   return (
      <section className="bg-tcl-off-white py-20 md:py-28 relative overflow-hidden border-t border-tcl-light-gray">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
         <div className="absolute inset-0 bg-radial-gradient from-white to-transparent pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">

            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start">

               {/* Left: Heading + Points */}
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-[3px] bg-tcl-crimson"></div>
                     <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-navy">The TCL Advantage</span>
                  </div>
                  <h2 className="font-barlow-condensed font-bold text-[44px] text-tcl-navy uppercase mb-10">Why Academies Choose TCL</h2>

                  <div className="space-y-6">
                     {[
                        "A <span class='font-semibold'>clear national competition pathway</span> connecting regional play to national championships",
                        "Well-organized, <span class='font-semibold'>professional tournaments with consistent standards</span> and execution",
                        "<span class='font-semibold'>Meaningful competition beyond local leagues</span>, bringing teams together from across the country",
                        "A platform built for <span class='font-semibold'>long-term growth</span>, not one-off events or isolated tournaments",
                        "Alignment with a mission to make cricket a <span class='font-semibold'>mainstream sport in America</span>"
                     ].map((point, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="pl-5 border-l-[3px] border-tcl-crimson"
                        >
                           <p
                              className="font-source-sans text-[17px] text-tcl-navy/90 leading-[1.7]"
                              dangerouslySetInnerHTML={{ __html: point }}
                           />
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* Right Image */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative mt-2"
               >
                  <img
                     src="/vision-team-celebration.png"
                     alt="Cricket Team"
                     className="rounded-2xl border border-tcl-light-gray shadow-xl w-full aspect-[3/4] object-cover"
                  />
               </motion.div>
            </div>

            {/* Fee Breakdown */}
            <div className="border-t border-tcl-light-gray pt-12">
               <div className="w-24 h-[1px] bg-tcl-crimson mb-8"></div>

               <div className="mb-8">
                  <h3 className="font-barlow-condensed font-semibold text-[20px] text-tcl-navy uppercase mb-1">What Your Fees Pay For</h3>
                  <p className="font-source-sans text-[15px] text-tcl-navy/70 italic">Annual membership, not individual event fees</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {[
                     "Membership benefits as mentioned in the subscription",
                     "Recognition as a TCL Academy Partner",
                     "Consistent rules, officiating standards, and competition pathways",
                     "Preferred access to Sports Texoma facilities and development opportunities",
                     "Priority consideration for high-performance camps and showcases"
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        className="flex items-start gap-3"
                     >
                        <CheckCircle2 className="w-5 h-5 text-tcl-crimson shrink-0 mt-0.5" />
                        <span className="font-source-sans text-[15px] text-tcl-navy/85 leading-snug">{item}</span>
                     </motion.div>
                  ))}
               </div>
            </div>

         </div>
      </section>
   );
};

export default Advantage;
