'use client';
import { motion } from 'framer-motion';

const AcademyPartners = () => {
  return (
    <section id="academies" className="bg-tcl-navy py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-tcl-gold"></div>
            <span className="font-barlow-condensed font-bold text-tcl-gold uppercase tracking-[0.2em] text-sm">
              Partnerships
            </span>
            <div className="w-12 h-0.5 bg-tcl-gold"></div>
          </div>

          <h2 className="font-barlow-condensed font-bold text-4xl md:text-5xl text-white uppercase mb-6">
            Partner Programs Coming Soon
          </h2>

          <p className="font-source-sans text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We're building exciting partnership opportunities for academies and organizations. Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademyPartners;
