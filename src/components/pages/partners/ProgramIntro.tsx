'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Users } from 'lucide-react';

const ProgramIntro = () => {
   return (
      <section className="bg-tcl-off-white py-24 md:py-28">
         <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 lg:gap-20 items-start">

            {/* Left Content */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-[3px] bg-tcl-crimson"></div>
                  <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-navy">TCL Academy Partner Program</span>
               </div>

               <h2 className="font-barlow-condensed font-bold text-[40px] text-tcl-navy uppercase leading-[1.1] mb-8">
                  Partner With Cricket Academies Nationwide
               </h2>

               <div className="font-source-sans text-[17px] text-[#444] leading-[1.75] space-y-6">
                  <p>
                     Cricket Texoma (TCL) partners with cricket academies that are <span className="font-semibold text-tcl-navy">committed to raising standards, developing players, and competing beyond local leagues</span> on a national stage.
                  </p>
                  <p>
                     Our Academy Partner program connects academies across the United States to a <span className="font-semibold text-tcl-navy">nationally respected competition platform</span>—designed to help cricket grow into a mainstream sport in America.
                  </p>
               </div>
            </motion.div>

            {/* Right Checklist Card */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-2xl border border-tcl-gray-200 shadow-xl p-8 border-l-[4px] border-l-tcl-crimson relative"
            >
               <div className="w-[52px] h-[52px] rounded-lg bg-tcl-navy/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-tcl-crimson stroke-[2.5px]" />
               </div>

               <h3 className="font-barlow-condensed font-semibold text-[16px] text-tcl-navy uppercase mb-2">Who This Program Is For</h3>
               <p className="font-source-sans text-[15px] text-[#555] mb-6">This program is ideal for academies that:</p>

               <ul className="space-y-3.5">
                  {[
                     "Field organized teams (U11–U19)",
                     "Value structured, competitive development",
                     "Seek national-level competition and exposure",
                     "Believe in fair play, professionalism, and long-term growth",
                     "Want clear pathways beyond local tournaments"
                  ].map((item, i) => (
                     <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-3"
                     >
                        <CheckCircle2 className="w-5 h-5 text-tcl-green shrink-0 mt-0.5" />
                        <span className="font-source-sans text-[15px] font-medium text-[#333] leading-snug">{item}</span>
                     </motion.li>
                  ))}
               </ul>
            </motion.div>
         </div>
      </section>
   );
};

export default ProgramIntro;
