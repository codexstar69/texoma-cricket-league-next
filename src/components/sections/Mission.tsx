'use client';
import { motion } from 'framer-motion';
import { Globe, Calendar, Map, Award, Radio } from 'lucide-react';

const Mission = () => {
  return (
    <section className="bg-tcl-navy py-20 md:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-tcl-gold/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-xl overflow-hidden border-2 border-tcl-gold shadow-2xl transform -rotate-2">
            <img
              src="/tournament-spring.png"
              alt="Cricket Tournament"
              className="h-[500px] w-full object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-0.5 bg-tcl-gold"></div>
            <span className="font-rajdhani font-bold text-tcl-gold uppercase tracking-wider">Our Purpose</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oswald font-bold text-3xl md:text-5xl text-tcl-white mb-6"
          >
            More Than A League
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-roboto text-tcl-white/70 text-lg mb-10 leading-relaxed"
          >
            We're building the infrastructure that cricket in America deserves. Every tournament we run, every standard we set, every young player we showcase — it all feeds into one vision: a national pathway from backyard cricket to the world stage.
          </motion.p>

          <div className="flex flex-col gap-6">
            {[
              { icon: Calendar, title: "National Tournaments", desc: "Professionally run events with consistent standards." },
              { icon: Map, title: "National Pathway", desc: "Connecting regional play to national championships." },
              { icon: Award, title: "Elevated Standards", desc: "Setting benchmarks for match formats and safety." },
              { icon: Radio, title: "Talent Showcase", desc: "Live scoring, streaming, and visibility." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-start gap-4 group border-b border-tcl-white/10 pb-4 last:border-0"
              >
                <div className="bg-tcl-navy-light w-12 h-12 flex items-center justify-center shrink-0 group-hover:bg-tcl-white/10 transition-colors" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)' }}>
                  <item.icon className="w-6 h-6 text-tcl-gold" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-tcl-white text-lg">{item.title}</h4>
                  <p className="font-roboto text-tcl-white/50 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
