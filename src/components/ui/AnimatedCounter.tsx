'use client';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = "" }: { value: number | string, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 20 });
  
  useEffect(() => {
    if (inView && typeof value === 'number') {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current && typeof value === 'number') {
        ref.current.textContent = Math.floor(latest) + suffix;
      } else if (ref.current) {
        ref.current.textContent = value + suffix;
      }
    });
  }, [springValue, suffix, value]);

  return <span ref={ref} className="font-oswald">{typeof value === 'number' ? 0 : value}{suffix}</span>;
};

export default AnimatedCounter;
