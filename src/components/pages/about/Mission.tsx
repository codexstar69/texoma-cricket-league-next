'use client';
import { motion } from 'framer-motion';
import { Trophy, Waypoints, Medal } from 'lucide-react';

const Mission = () => {
  return (
    <section className="bg-tcl-navy-dark py-20 md:py-32 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-stripe-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient from-tcl-navy-light/30 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <div className="w-10 h-[3px] bg-tcl-gold"></div>
          <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Our Mission</span>
        </motion.div>

        {/* Quote */}
        <div className="relative inline-block mb-16">
          <span className="absolute -top-6 -left-2 md:-top-12 md:-left-16 font-barlow-condensed text-[48px] md:text-[64px] text-tcl-gold opacity-20 pointer-events-none leading-none">"</span>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="font-barlow-condensed font-medium text-[20px] md:text-[28px] text-tcl-white leading-[1.5] max-w-3xl mx-auto px-4 md:px-0"
          >
            To unite cricket teams from across the United States through a nationally respected tournament platform that delivers meaningful competition, clear development pathways, and consistently high standards—creating positive, accessible, and inspiring experiences for players, families, and the broader cricket community.
          </motion.p>
          <span className="absolute -bottom-10 -right-2 md:-bottom-12 md:-right-16 font-barlow-condensed text-[48px] md:text-[64px] text-tcl-gold opacity-20 pointer-events-none leading-none">"</span>
        </div>

        {/* Keywords */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {[
            { icon: Trophy, text: "Meaningful Competition" },
            { icon: Waypoints, text: "Clear Pathways" },
            { icon: Medal, text: "High Standards" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.15) }}
              className="flex items-center gap-3"
            >
              <item.icon className="w-5 h-5 text-tcl-gold stroke-[2.5px]" />
              <span className="font-barlow-condensed font-medium text-sm text-tcl-white/70 uppercase tracking-widest">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
