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
    <section className="bg-tcl-navy py-20 md:py-32 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-stripe-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-tcl-navy-light/30 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
           <span className="font-barlow-condensed font-medium text-[13px] text-tcl-gold uppercase tracking-widest block mb-2">Season Overview</span>
           <h2 className="font-barlow-condensed font-bold text-[40px] md:text-[44px] text-white uppercase">The Year At A Glance</h2>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:block relative">
           {/* Line */}
           <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2"></div>
           <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="absolute top-1/2 left-0 w-full h-[2px] bg-tcl-gold -translate-y-1/2 origin-left"
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
                       <span className="absolute -top-8 font-barlow-condensed font-medium text-[10px] text-tcl-gold uppercase tracking-widest animate-pulse">Flagship</span>
                    )}
                    
                    <div className={`
                       rounded-full border-2 flex items-center justify-center relative z-10 transition-all duration-300
                       ${item.isFlagship 
                          ? 'w-[72px] h-[72px] bg-tcl-gold border-tcl-gold shadow-[0_0_20px_rgba(244,180,0,0.4)]' 
                          : 'w-[52px] h-[52px] bg-tcl-navy border-tcl-gold group-hover:bg-tcl-navy-light'}
                    `}>
                       <item.icon className={`
                          ${item.isFlagship ? 'w-8 h-8 text-tcl-navy' : 'w-6 h-6 text-tcl-gold'}
                       `} strokeWidth={2.5} />
                    </div>

                    <div className="mt-6 text-center">
                       <span className="block font-barlow-condensed font-bold text-[18px] text-white uppercase mb-1">{item.title}</span>
                       <span className="block font-barlow font-semibold text-[13px] text-tcl-gold mb-1">{item.range}</span>
                       <span className="block font-source-sans text-[12px] text-white/60">{item.count}</span>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative pl-6 border-l-2 border-tcl-gold/30 space-y-10 ml-4">
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
                    absolute -left-[35px] top-0 rounded-full border-2 flex items-center justify-center
                    ${item.isFlagship 
                       ? 'w-10 h-10 bg-tcl-gold border-tcl-gold -left-[42px] shadow-[0_0_15px_rgba(244,180,0,0.4)]' 
                       : 'w-8 h-8 bg-tcl-navy border-tcl-gold'}
                 `}>
                    <item.icon className={`
                       ${item.isFlagship ? 'w-5 h-5 text-tcl-navy' : 'w-4 h-4 text-tcl-gold'}
                    `} />
                 </div>

                 <div className={`
                    bg-white/5 rounded-lg p-5 border border-white/10 backdrop-blur-sm
                    ${item.isFlagship ? 'border-tcl-gold/30 bg-tcl-gold/5' : ''}
                 `}>
                    <div className="flex justify-between items-start mb-1.5">
                       <h3 className="font-barlow-condensed font-bold text-xl text-white uppercase tracking-wide">{item.title}</h3>
                       {item.isFlagship && <span className="text-[10px] bg-tcl-gold text-tcl-navy px-2 py-0.5 rounded font-bold uppercase tracking-wide">Flagship</span>}
                    </div>
                    <p className="font-barlow font-semibold text-sm text-tcl-gold mb-1.5">{item.range}</p>
                    <p className="font-source-sans text-[13px] text-white/50">{item.count}</p>
                 </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
