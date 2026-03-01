'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera } from 'lucide-react';

const ImageBreak = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1.05, 1.0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.45], [0.6, 1]);

  return (
    <section className="relative h-[40vh] md:h-[60vh] overflow-hidden bg-tcl-navy w-full">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/gallery-celebration.png"
          alt="Team Celebration"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tcl-navy/60 to-transparent"></div>
      </motion.div>

      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10 flex items-center gap-2">
        <Camera className="w-4 h-4 text-white/80" />
        <span className="font-barlow-condensed font-medium text-sm text-white uppercase tracking-wider">Team Celebration · Sports Texoma</span>
      </div>
    </section>
  );
};

export default ImageBreak;
