'use client';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, GitMerge, Heart, ShieldCheck } from 'lucide-react';

const Values = () => {
  return (
    <section className="bg-tcl-off-white py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[3px] bg-tcl-gold"></div>
            <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Our Values</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-barlow-condensed font-bold text-4xl md:text-5xl text-tcl-navy uppercase tracking-tight mb-4"
          >
            What Drives Texoma Cricket
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-source-sans text-lg text-[#555] max-w-xl"
          >
            The principles that shape every tournament, every match, and every decision we make.
          </motion.p>
        </div>

        {/* Rows */}
        <div className="space-y-12 md:space-y-16 mb-16">
          {/* Value 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-center border-b border-tcl-gray-200 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-xl bg-tcl-navy/5 flex items-center justify-center mb-6">
                <TrendingUp className="w-9 h-9 text-tcl-gold stroke-[2.5px]" />
              </div>
              <h3 className="font-barlow-condensed font-bold text-[28px] text-tcl-navy uppercase mb-4">Raising The Standard</h3>
              <p className="font-source-sans text-[17px] text-[#444] leading-[1.7] max-w-lg">
                We deliver consistent, high-quality competition that challenges players to perform at their best nationwide. Every tournament, every match format, every officiating decision is held to the highest standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              <img src="/gallery-pitch.png" alt="Cricket Stumps" className="rounded-xl shadow-md w-full aspect-video md:aspect-[4/3] object-cover" />
            </motion.div>
          </div>

          {/* Value 2 (Reversed Visual) */}
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center border-b border-tcl-gray-200 pb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="block order-2 md:order-1"
            >
              <img src="/vision-team-celebration.png" alt="Cricket Teams" className="rounded-xl shadow-md w-full aspect-video md:aspect-[4/3] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-1 md:order-2 md:pl-12"
            >
              <div className="w-16 h-16 rounded-xl bg-tcl-navy/5 flex items-center justify-center mb-6">
                <Globe className="w-9 h-9 text-tcl-gold stroke-[2.5px]" />
              </div>
              <h3 className="font-barlow-condensed font-bold text-[28px] text-tcl-navy uppercase mb-4">A National Stage</h3>
              <p className="font-source-sans text-[17px] text-[#444] leading-[1.7] max-w-lg">
                We bring together teams from across the United States, creating meaningful national exposure and competition. No more isolated local leagues — TCL connects communities through cricket.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: GitMerge, title: "Purposeful Pathways", desc: "Our tournaments follow clear progression—from regional competition to national championships. Every match matters.", color: "border-t-tcl-gold" },
            { icon: Heart, title: "Player-First Development", desc: "We prioritize skill growth, sportsmanship, and long-term development alongside competitive success. Players grow here.", color: "border-t-tcl-green" },
            { icon: ShieldCheck, title: "Professional & Trusted", desc: "We operate with professionalism, integrity, and transparency—earning the trust of players, families, and the cricket community.", color: "border-t-tcl-crimson" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-2xl p-8 border border-tcl-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 border-t-[3px] ${item.color}`}
            >
              <div className="w-14 h-14 rounded-xl bg-tcl-navy/5 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-tcl-navy stroke-[2px]" />
              </div>
              <h3 className="font-barlow-condensed font-semibold text-[20px] text-tcl-navy uppercase mb-3">{item.title}</h3>
              <p className="font-source-sans text-[15px] text-[#666] leading-[1.6]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
