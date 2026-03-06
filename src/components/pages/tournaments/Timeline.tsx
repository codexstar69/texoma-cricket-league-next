'use client';
import { motion } from 'framer-motion';
import { Flower2, Sun, Trophy, Leaf, Snowflake } from 'lucide-react';

const timelineData = [
   { icon: Flower2, title: "Spring", range: "Feb – Apr", count: "3 Events" },
   { icon: Sun, title: "Summer", range: "May – Jul", count: "3 Events" },
   { icon: Trophy, title: "Nationals", range: "Jul – Aug", count: "3 Events", isFlagship: true },
   { icon: Leaf, title: "Fall", range: "Sep – Oct", count: "3 Events" },
   { icon: Snowflake, title: "Winter", range: "Nov – Jan", count: "3 Events" }
];

const Timeline = () => {
   return (
      <section className="bg-tcl-off-white py-20 md:py-32 relative overflow-hidden border-t border-tcl-light-gray">
         {/* Texture */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
         <div className="absolute inset-0 bg-radial-gradient from-white to-transparent pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Header */}
            <div className="text-center mb-16 md:mb-20">
               <span className="font-barlow-condensed font-medium text-[13px] text-tcl-crimson uppercase tracking-widest block mb-2">Season Overview</span>
               <h2 className="font-barlow-condensed font-bold text-[40px] md:text-[44px] text-tcl-navy uppercase">The Year At A Glance</h2>
            </div>

            {/* Desktop Horizontal Timeline */}
            <div className="hidden md:block relative">
               {/* Line */}
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-tcl-navy/10 -translate-y-1/2"></div>
               <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-tcl-crimson -translate-y-1/2 origin-left"
               />

               <div className="flex justify-between items-center relative">
                  {timelineData.map((item, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.2) }}
                        className="flex flex-col items-center group cursor-pointer"
                     >
                        {item.isFlagship && (
                           <span className="absolute -top-8 font-barlow-condensed font-medium text-[10px] text-tcl-crimson uppercase tracking-widest animate-pulse">Flagship</span>
                        )}

                        <div className={`
                       rounded-full border-2 flex items-center justify-center relative z-10 transition-all duration-300 shadow-sm bg-white
                       ${item.isFlagship
                              ? 'w-[72px] h-[72px] bg-tcl-crimson border-tcl-crimson shadow-[0_0_20px_rgba(184,28,34,0.3)]'
                              : 'w-[52px] h-[52px] border-tcl-crimson group-hover:bg-tcl-off-white'}
                    `}>
                           <item.icon className={`
                          ${item.isFlagship ? 'w-8 h-8 text-white' : 'w-6 h-6 text-tcl-crimson'}
                       `} strokeWidth={2.5} />
                        </div>

                        <div className="mt-6 text-center">
                           <span className="block font-barlow-condensed font-bold text-[18px] text-tcl-navy uppercase mb-1">{item.title}</span>
                           <span className="block font-barlow font-semibold text-[13px] text-tcl-crimson mb-1">{item.range}</span>
                           <span className="block font-source-sans text-[12px] text-tcl-navy/60">{item.count}</span>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="md:hidden relative pl-6 border-l-2 border-tcl-crimson/30 space-y-10 ml-4">
               {timelineData.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="relative"
                  >
                     <div className={`
                    absolute -left-[35px] top-0 rounded-full border-2 flex items-center justify-center bg-white
                    ${item.isFlagship
                           ? 'w-10 h-10 bg-tcl-crimson border-tcl-crimson -left-[42px] shadow-[0_0_15px_rgba(184,28,34,0.3)]'
                           : 'w-8 h-8 border-tcl-crimson'}
                 `}>
                        <item.icon className={`
                       ${item.isFlagship ? 'w-5 h-5 text-white' : 'w-4 h-4 text-tcl-crimson'}
                    `} />
                     </div>

                     <div className={`
                    bg-white rounded-lg p-5 border border-tcl-light-gray shadow-sm
                    ${item.isFlagship ? 'border-tcl-crimson/30 bg-tcl-crimson/5' : ''}
                 `}>
                        <div className="flex justify-between items-start mb-1.5">
                           <h3 className="font-barlow-condensed font-bold text-xl text-tcl-navy uppercase tracking-wide">{item.title}</h3>
                           {item.isFlagship && <span className="text-[10px] bg-tcl-crimson text-white px-2 py-0.5 rounded font-bold uppercase tracking-wide">Flagship</span>}
                        </div>
                        <p className="font-barlow font-semibold text-sm text-tcl-crimson mb-1.5">{item.range}</p>
                        <p className="font-source-sans text-[13px] text-tcl-navy/60">{item.count}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Timeline;
