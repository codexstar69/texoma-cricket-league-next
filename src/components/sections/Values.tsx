'use client';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Compass, Heart } from 'lucide-react';

const Values = () => {
  return (
    <section className="bg-tcl-white py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-tcl-navy text-3xl uppercase inline-block border-b-4 border-tcl-crimson pb-1">What We Stand For</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: TrendingUp, title: "Raising The Standard", desc: "High-quality challenges nationwide." },
            { icon: Globe, title: "A National Stage", desc: "Exposure beyond local leagues." },
            { icon: Compass, title: "Purposeful Pathways", desc: "Regional to national progression." },
            { icon: Heart, title: "Player-First", desc: "Growth and sportsmanship above all." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-tcl-navy flex items-center justify-center mb-4 shadow-lg border border-tcl-navy-light">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-rajdhani font-bold text-tcl-navy text-base uppercase mb-2">{item.title}</h3>
              <p className="font-roboto text-sm text-tcl-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
