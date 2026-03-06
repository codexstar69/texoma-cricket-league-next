'use client';
import { motion } from 'framer-motion';

const AcademyPartners = () => {
  return (
    <section id="academies" className="bg-tcl-off-white py-20 md:py-32 border-t border-tcl-light-gray">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-tcl-crimson"></div>
            <span className="font-barlow-condensed font-bold text-tcl-navy uppercase tracking-[0.2em] text-sm">
              Partnerships
            </span>
            <div className="w-12 h-0.5 bg-tcl-crimson"></div>
          </div>

          <h2 className="font-barlow-condensed font-bold text-4xl md:text-5xl text-tcl-navy uppercase mb-6">
            Partner Programs Coming Soon
          </h2>

          <p className="font-source-sans text-tcl-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re building exciting partnership opportunities for academies and organizations. Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademyPartners;
