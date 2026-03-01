'use client';
import { Building2, Map, Users } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const StatsBar = () => {
   return (
      <section className="bg-tcl-navy py-12 relative overflow-hidden">
         <div className="absolute inset-0 bg-radial-gradient from-tcl-navy-light/30 to-transparent pointer-events-none"></div>

         <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-tcl-gold/20">
               {[
                  { value: 50, suffix: "+", label: "Partner Academies", icon: Building2 },
                  { value: 12, suffix: "", label: "States Covered", icon: Map },
                  { value: 5, suffix: "K+", label: "Players", icon: Users } // AnimatedCounter needs numeric input for counting, passing 5 then handling K+ in suffix
               ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center text-center px-4 border-b border-tcl-gold/10 md:border-b-0 pb-8 md:pb-0 last:border-0 last:pb-0">
                     <stat.icon className="w-6 h-6 text-tcl-gold mb-2 stroke-[2.5px]" />
                     <div className="font-barlow font-bold text-[40px] md:text-[48px] text-tcl-gold leading-none mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                     </div>
                     <span className="font-source-sans text-[13px] font-medium text-white/70 uppercase tracking-widest">{stat.label}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default StatsBar;
