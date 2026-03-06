'use client';
import { motion } from 'framer-motion';
import { Target, Star, Building2 } from 'lucide-react';

const ContextBar = () => {
  return (
    <section className="bg-tcl-off-white py-12 border-b border-tcl-light-gray relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-tcl-light-gray">
          {[
            { icon: Target, title: "National Platform", desc: "Unifying cricket communities across the US" },
            { icon: Star, title: "Talent Showcase", desc: "National visibility for emerging young cricketers" },
            { icon: Building2, title: "Championship Venue", desc: "Sports Texoma as America's cricket home" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center px-4"
            >
              <item.icon className="w-7 h-7 text-tcl-crimson mb-3 stroke-[2.5px]" />
              <h3 className="font-barlow-condensed font-semibold text-base text-tcl-navy uppercase tracking-wide mb-1">{item.title}</h3>
              <p className="font-source-sans text-sm text-[#555] max-w-[240px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextBar;
