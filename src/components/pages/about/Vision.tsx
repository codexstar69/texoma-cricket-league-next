'use client';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Users, CalendarCheck, Quote } from 'lucide-react';

const Vision = () => {
  return (
    <section className="bg-tcl-off-white py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* SEGMENT 3A: Header */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[3px] bg-tcl-gold"></div>
            <span className="font-barlow-condensed font-medium text-[13px] uppercase tracking-widest text-tcl-gold">Our Vision</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-barlow-condensed font-bold text-3xl md:text-5xl text-tcl-navy uppercase tracking-tight mb-8 md:mb-12"
          >
            Building The Future Of<br />American Cricket
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-source-sans text-lg md:text-2xl font-normal italic text-tcl-navy leading-relaxed max-w-3xl border-l-4 border-tcl-gold pl-6 py-1"
          >
            "To build a unified national pathway that connects grassroots participation to elite competition—bringing clarity, consistency, and aspiration to the cricket ecosystem."
          </motion.blockquote>
        </div>

        {/* SEGMENT 3B: Two-Column Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-[58%_42%] gap-10 md:gap-16 mb-16 md:mb-24">

          {/* Left Prose */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-source-sans text-[16px] md:text-[17px] text-[#444] leading-[1.75]"
          >
            <p className="mb-6">
              <span className="drop-cap">W</span>e envision a future where cricket in the United States is <span className="font-semibold text-tcl-navy">organized, accessible, and respected</span> at every level—from first exposure at the grassroots to elite competition on the national stage.
            </p>
            <p className="mb-6">
              At Cricket Texoma, our vision is to help build a strong, sustainable cricket ecosystem by providing structured competition, professional environments, and clear pathways for player development. We believe the long-term success of American cricket depends on <span className="font-semibold text-tcl-navy">consistent standards, centralized championship venues</span>, and community-driven participation, rather than fragmented, short-term events.
            </p>
            <p className="mb-6">
              Our focus begins at the grassroots, where <span className="font-semibold text-tcl-navy">passion for the game is formed</span> and fundamentals are built. From there, we aim to support the natural progression of players, teams, and officials through well-defined competitive tiers that encourage growth, accountability, and excellence.
            </p>
            <p>
              By anchoring national events at Sports Texoma, we seek to create <span className="font-semibold text-tcl-navy">a recognized home for major cricket championships</span> in the United States—a destination that reflects professionalism, fairness, and pride in the game.
            </p>
          </motion.div>

          {/* Right Visual + Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="relative">
              <img
                src="/tournament-finals.png"
                alt="Cricket Championship"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg"
              />
              <span className="block mt-2 font-barlow-condensed font-medium text-xs text-tcl-gray-500 uppercase tracking-widest text-center">Cricket Championship Match</span>
            </div>

            <div className="bg-tcl-gold/5 rounded-xl p-6 border border-tcl-gold/10">
              <Quote className="w-6 h-6 text-tcl-gold mb-3 fill-tcl-gold" />
              <p className="font-source-sans text-[15px] font-medium italic text-tcl-navy leading-relaxed">
                The long-term success of American cricket depends on consistent standards and community-driven participation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* SEGMENT 3C: Vision Pillars */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-source-sans text-lg font-medium text-tcl-navy mb-8"
          >
            Ultimately, our vision is to contribute meaningfully to an American cricket landscape where:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Sprout, title: "Players are developed, not rushed", sub: "Long-term growth over short-term results" },
              { icon: ShieldCheck, title: "Competition is challenging, not chaotic", sub: "Structured, fair, and meaningful matches" },
              { icon: Users, title: "Communities are united, not isolated", sub: "Connecting cricket families across the nation" },
              { icon: CalendarCheck, title: "Cricket is treated as a long-term sport", sub: "Year-round commitment, not seasonal activity" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl p-6 border border-tcl-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-tcl-navy/5 flex items-center justify-center mb-4 group-hover:bg-tcl-gold/10 transition-colors">
                  <item.icon className="w-8 h-8 text-tcl-gold stroke-[2px]" />
                </div>
                <h3 className="font-barlow-condensed font-semibold text-[17px] text-tcl-navy uppercase mb-1">{item.title}</h3>
                <p className="font-source-sans text-sm text-[#666]">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-source-sans text-[17px] font-medium text-[#444] max-w-2xl"
          >
            Through disciplined growth, collaboration, and a commitment to standards, Cricket Texoma aims to play a defining role in shaping the future of American cricket.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
