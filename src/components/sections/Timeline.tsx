'use client';
import { motion } from 'framer-motion';
import { Sprout, Sun, Trophy, Leaf, Snowflake } from 'lucide-react';

const Timeline = () => {
  return (
    <section id="tournaments" className="bg-tcl-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16 md:mb-20">
         <div className="w-16 h-1 bg-tcl-gold mx-auto mb-4"></div>
         <span className="font-rajdhani font-bold text-tcl-crimson uppercase tracking-widest text-sm block mb-2">Season Calendar</span>
         <h2 className="font-oswald font-bold text-4xl md:text-5xl text-tcl-navy mb-4">A Year of Cricket</h2>
         <p className="font-roboto text-tcl-gray-700">Our tournament season runs year-round, building toward the National Championship.</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Desktop Line - Vertically Centered */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-tcl-gold via-tcl-crimson to-tcl-gold origin-left z-0 -translate-y-1/2"
        />

        {/* Mobile Line */}
        <div className="md:hidden absolute top-0 left-[19px] bottom-0 w-1 bg-tcl-gold/30"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
          {[
            { season: "Spring", months: "FEB - APR", icon: Sprout, title: "Evaluation", pos: "top" },
            { season: "Summer", months: "MAY - JUL", icon: Sun, title: "Regionals", pos: "bottom" },
            { season: "Nationals", months: "JUL - AUG", icon: Trophy, title: "Championships", pos: "top", featured: true },
            { season: "Fall", months: "SEP - OCT", icon: Leaf, title: "Qualifiers", pos: "bottom" },
            { season: "Winter", months: "NOV - JAN", icon: Snowflake, title: "Development", pos: "top" },
          ].map((item, i) => (
             <div key={i} className="relative flex md:block md:h-[420px]">
                
                {/* Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className={`
                    shrink-0 rounded-full border-4 border-tcl-white shadow-md z-20 
                    md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2
                    ${item.featured ? 'bg-tcl-crimson w-8 h-8 md:w-8 md:h-8' : 'bg-tcl-gold w-6 h-6 md:w-6 md:h-6'}
                    /* Mobile positioning relative to flex container */
                    mt-8 md:mt-0 ml-[4px] md:ml-0
                  `}
                />

                {/* Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className={`bg-tcl-white p-6 rounded-lg shadow-lg border border-tcl-gray-200 w-full ml-6 md:ml-0 md:w-auto text-center relative
                    md:absolute md:left-0 md:right-0
                    ${item.featured ? 'border-l-4 border-l-tcl-crimson transform md:scale-110 z-10' : ''}
                    ${item.pos === 'top' ? 'md:bottom-1/2 md:mb-10' : 'md:top-1/2 md:mt-10'}
                  `}
                >
                   {/* Vertical Connector Line (Desktop) */}
                   <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-tcl-gray-200 h-10 -z-10 
                      ${item.pos === 'top' ? 'top-full' : 'bottom-full'}
                   `}></div>

                   {item.featured && (
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tcl-crimson text-tcl-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm shadow-sm">Flagship</div>
                   )}

                   <span className="font-rajdhani font-bold text-tcl-crimson text-sm block mb-2">{item.months}</span>
                   <item.icon className="w-8 h-8 text-tcl-navy mx-auto mb-3" />
                   <h3 className="font-oswald font-bold text-tcl-navy text-xl uppercase mb-1">{item.season}</h3>
                   <p className="font-roboto text-sm text-tcl-gray-700">{item.title}</p>
                </motion.div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
