'use client';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Testimonial = () => {
  // Hidden per user request
  return null;

  return (
    <section className="bg-tcl-green-surface py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block">
          <span className="absolute -top-16 -left-12 font-oswald font-bold text-[120px] md:text-[160px] text-tcl-gold opacity-20 pointer-events-none leading-none">"</span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold italic text-xl md:text-2xl lg:text-3xl text-tcl-navy leading-relaxed relative z-10"
          >
            TCL gave our academy something we couldn't build alone — a national stage. Our U-14 squad went from local friendlies to competing against the best teams in the country. The professionalism and consistency is unlike anything else in US cricket.
          </motion.blockquote>
        </div>

        <div className="w-20 h-0.5 bg-tcl-gold mx-auto my-8"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-tcl-navy flex items-center justify-center">
            <User className="w-6 h-6 text-tcl-gold" />
          </div>
          <div className="text-left">
            <div className="font-rajdhani font-bold text-tcl-navy text-lg uppercase">Rajesh Patel</div>
            <div className="font-roboto text-tcl-gray-500 text-sm">Head Coach, DFW Cricket Academy</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <p className="font-rajdhani font-medium text-tcl-gray-500 text-xs tracking-widest uppercase mb-6">Trusted By Academies Nationwide</p>
          <div className="flex flex-wrap justify-center gap-4 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-28 bg-tcl-gray-200 rounded-md flex items-center justify-center hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-tcl-gray-500 font-bold uppercase">Logo {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
