'use client';
import { motion } from 'framer-motion';
import { Check, MapPin } from 'lucide-react';
import Link from 'next/link';

const Membership = () => {
  // Hidden per user request
  return null;

  

  return (
    <section className="bg-tcl-gray-50 py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-1 bg-tcl-gold"></div>
            <span className="font-rajdhani font-bold text-tcl-crimson uppercase tracking-[0.2em] text-sm">Join The Community</span>
          </div>
          <h2 className="font-oswald font-bold text-3xl md:text-5xl text-tcl-navy uppercase mb-4">Membership Options</h2>
          <p className="font-roboto text-tcl-gray-700 text-lg">Whether you're a solo player, a family, or a full team — there's a tier built for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Individual */}
          <motion.div
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="bg-tcl-white rounded-xl shadow-md overflow-hidden border border-tcl-gray-200"
          >
            <div className="p-8 border-b border-tcl-gray-200 text-center">
              <h3 className="font-rajdhani font-bold text-tcl-navy text-lg uppercase tracking-wide mb-2">Individual</h3>
              <div className="flex items-baseline justify-center gap-1 font-oswald text-tcl-navy">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">45</span>
                <span className="font-roboto text-base text-tcl-gray-500 font-normal">/mo</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {['Practice facility access', 'Discounted tournament entries', 'Personal player profile', 'League statistics tracking'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-tcl-gray-700">
                    <Check className="w-5 h-5 text-tcl-green shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className="w-full py-3 border-2 border-tcl-navy text-tcl-navy font-rajdhani font-bold uppercase rounded-md hover:bg-tcl-navy hover:text-tcl-white transition-colors">Select Plan</Link>
            </div>
          </motion.div>

          {/* Family (Featured) */}
          <motion.div
            initial={{ scale: 1.0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-tcl-white rounded-xl shadow-xl overflow-hidden border-t-4 border-t-tcl-crimson relative z-10 md:-mt-4 my-4 md:my-0"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-tcl-gold text-tcl-navy font-bold text-[10px] uppercase py-1 px-8 transform rotate-45 translate-x-8 translate-y-4 shadow-sm">Most Popular</div>
            </div>
            <div className="p-8 border-b border-tcl-gray-200 text-center bg-tcl-gray-50/50">
              <h3 className="font-rajdhani font-bold text-tcl-navy text-lg uppercase tracking-wide mb-2">Family</h3>
              <div className="flex items-baseline justify-center gap-1 font-oswald text-tcl-navy">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">125</span>
                <span className="font-roboto text-base text-tcl-gray-500 font-normal">/mo</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {['Up to 4 family members', 'Priority booking', 'Monthly coaching sessions', 'VIP seating at events', 'All Individual benefits'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-tcl-gray-700">
                    <Check className="w-5 h-5 text-tcl-green shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="block w-full py-4 bg-tcl-crimson text-tcl-white font-rajdhani font-bold uppercase rounded-md shadow-lg text-center relative overflow-hidden"
              >
                <span className="relative z-10">Select Plan</span>
              </Link>
            </div>
          </motion.div>

          {/* Team Affiliate */}
          <motion.div
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="bg-tcl-white rounded-xl shadow-md overflow-hidden border border-tcl-gray-200"
          >
            <div className="p-8 border-b border-tcl-gray-200 text-center">
              <h3 className="font-rajdhani font-bold text-tcl-navy text-lg uppercase tracking-wide mb-2">Team Affiliate</h3>
              <div className="flex items-baseline justify-center gap-1 font-oswald text-tcl-navy">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">850</span>
                <span className="font-roboto text-base text-tcl-gray-500 font-normal">/season</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {['Full team registration', 'Guaranteed field availability', 'Team analytics dashboard', 'Priority tournament scheduling', 'Branded team page'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-tcl-gray-700">
                    <Check className="w-5 h-5 text-tcl-green shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className="w-full py-3 border-2 border-tcl-navy text-tcl-navy font-rajdhani font-bold uppercase rounded-md hover:bg-tcl-navy hover:text-tcl-white transition-colors">Select Plan</Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center flex flex-col md:flex-row items-center justify-center gap-2 text-tcl-gray-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>All memberships include access to Sports Texoma facility.</span>
        </div>
      </div>
    </section>
  );
};

export default Membership;
