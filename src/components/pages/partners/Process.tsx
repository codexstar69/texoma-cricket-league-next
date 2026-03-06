'use client';
import { motion } from 'framer-motion';

const steps = [
   { title: "Apply", desc: "Submit an application with details about your academy, age groups, and competitive goals." },
   { title: "Review", desc: "TCL reviews applications based on player development focus, coaching structure, age-group depth, and alignment with TCL values." },
   { title: "Placement", desc: "Accepted academies are placed into the appropriate partner tier: Founding, National, Regional, or Development." },
   { title: "Compete & Grow", desc: "Partner academies participate in TCL events, progress through pathways, and build long-term presence within the national TCL ecosystem.", final: true }
];

const Process = () => {
   return (
      <section className="bg-tcl-off-white py-24 md:py-32 relative overflow-hidden border-t border-b border-tcl-light-gray">
         {/* Texture */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
         <div className="absolute inset-0 bg-radial-gradient from-white to-transparent pointer-events-none"></div>

         <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
               <span className="font-barlow-condensed font-medium text-[13px] text-tcl-navy uppercase tracking-widest block mb-2">Process</span>
               <h2 className="font-barlow-condensed font-bold text-[44px] text-tcl-navy uppercase">How The Partnership Works</h2>
            </div>

            {/* Desktop Horizontal Flow */}
            <div className="hidden md:block relative">
               {/* Connecting Line */}
               <div className="absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-tcl-navy/10"></div>
               <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-tcl-crimson origin-left"
               />

               <div className="grid grid-cols-4 gap-8">
                  {steps.map((step, i) => (
                     <div key={i} className="flex flex-col items-center text-center relative">
                        <motion.div
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.5 + (i * 0.2) }}
                           className={`w-14 h-14 rounded-full border-2 flex items-center justify-center relative z-10 mb-6 bg-white
                           ${step.final ? 'border-tcl-crimson shadow-[0_0_20px_rgba(184,28,34,0.2)] bg-tcl-crimson' : 'border-tcl-crimson'}
                        `}
                        >
                           <span className={`font-barlow font-bold text-2xl ${step.final ? 'text-white' : 'text-tcl-crimson'}`}>{i + 1}</span>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.8 + (i * 0.2) }}
                        >
                           <h3 className="font-barlow-condensed font-semibold text-[20px] text-tcl-navy uppercase mb-3">{step.title}</h3>
                           <p className="font-source-sans text-[14px] text-tcl-navy/75 leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                        </motion.div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Mobile Vertical Flow */}
            <div className="md:hidden relative pl-8 border-l-2 border-tcl-crimson/30 space-y-12">
               {steps.map((step, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="relative"
                  >
                     <div className={`absolute -left-[44px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 bg-white
                      ${step.final ? 'border-tcl-crimson bg-tcl-crimson shadow-[0_0_15px_rgba(184,28,34,0.2)]' : 'border-tcl-crimson'}
                  `}>
                        <span className={`font-barlow font-bold text-sm ${step.final ? 'text-white' : 'text-tcl-crimson'}`}>{i + 1}</span>
                     </div>

                     <div>
                        <h3 className="font-barlow-condensed font-semibold text-[20px] text-tcl-navy uppercase mb-2">{step.title}</h3>
                        <p className="font-source-sans text-[14px] text-tcl-navy/75 leading-relaxed">{step.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Process;
