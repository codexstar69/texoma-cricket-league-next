'use client';
import { motion } from 'framer-motion';

/* ----- Tournament Data ----- */

const adultTournaments = [
  {
    name: 'The Grand Heritage T30 Cup',
    tagline: '"Celebrating Cricket, Honoring Legacy"',
    format: 'T30',
    ball: 'Red Ball',
    surface: 'High-Standard Natural Turf Wickets',
    accent: 'bg-tcl-crimson',
    statement:
      'The Grand Heritage T30 Cup is a premier red-ball tournament created for cricketers who value tradition, discipline, and competitive excellence. Played on high-quality natural turf wickets, this extended format emphasizes technique, temperament, strategic depth, and endurance. Blending the classical spirit of cricket with a professionally structured league environment, the tournament delivers an authentic red-ball experience while remaining efficient and time-conscious.',
  },
  {
    name: 'TX T20 Bash',
    tagline: 'Dynamic. High-Intensity. White-Ball Action.',
    format: 'T20',
    ball: 'White Ball',
    surface: 'Professional Natural Turf Wickets',
    accent: 'bg-tcl-gold',
    statement:
      'The TX T20 Bash is a dynamic, high-intensity white-ball tournament designed for competitive adult cricketers and club teams. Played on professional-grade natural turf wickets, it delivers the excitement and pace of modern T20 cricket within a structured league framework. Combining aggressive gameplay, organized scheduling, and competitive standings, the TX T20 Bash provides a premium short-format experience.',
  },
];

const holidayTournaments = [
  {
    name: 'Memorial Patriot Cup – T20',
    weekend: 'Memorial Day Weekend',
    statement:
      'The Memorial Patriot Cup is a premier T20 tournament held during Memorial Day weekend, offering young cricketers the opportunity to compete on professional natural turf wickets in a highly organized and competitive setting.',
  },
  {
    name: 'Liberty Shield – T20',
    weekend: 'Independence Day Weekend',
    statement:
      'The Liberty Shield is a marquee T20 tournament hosted during Independence Day weekend. Played on premium natural turf grounds, it provides a professional and competitive cricket experience for aspiring young athletes.',
  },
  {
    name: 'Labor Day Cup – T20',
    weekend: 'Labor Day Weekend',
    statement:
      'The Labor Day Cup serves as a late-summer championship event for cricketers seeking structured, high-quality T20 competition on natural turf.',
  },
  {
    name: 'Thanksgiving Champions Trophy – T20',
    weekend: 'Thanksgiving Weekend',
    statement:
      'The Thanksgiving Champions Trophy is a premier T20 tournament held over Thanksgiving weekend, bringing together competitive teams in a professionally organized natural turf environment.',
  },
];

/* ----- Component ----- */

const Programs = () => {
  return (
    <section id="programs" className="relative bg-tcl-off-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-1 bg-tcl-crimson"></div>
            <span className="font-barlow-condensed font-bold text-tcl-navy uppercase tracking-[0.2em] text-sm">
              Tournament Portfolio
            </span>
          </div>
          <h2 className="font-barlow-condensed font-bold text-3xl md:text-5xl text-tcl-navy uppercase mb-4">
            Cricket Texoma – Premier Tournament Portfolio
          </h2>
        </motion.div>

        {/* ── Adult Tournaments ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {adultTournaments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group relative flex flex-col"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full ${t.accent}`} />

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-barlow-condensed font-bold text-2xl text-tcl-navy mb-1">
                  {t.name}
                </h3>
                <p className="font-source-sans italic text-tcl-crimson text-sm mb-5">{t.tagline}</p>

                {/* Meta pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    { label: 'Format', value: t.format },
                    { label: 'Ball', value: t.ball },
                    { label: 'Surface', value: t.surface },
                  ].map((m, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 bg-tcl-navy/5 rounded-full px-3 py-1 text-xs font-barlow-condensed font-semibold text-tcl-navy uppercase tracking-wide"
                    >
                      <span className="text-tcl-crimson">{m.label}:</span> {m.value}
                    </span>
                  ))}
                </div>

                <p className="font-source-sans text-[#555] text-sm leading-relaxed flex-1">
                  {t.statement}
                </p>
              </div>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-0 h-1 bg-tcl-crimson w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* ── Premier Holiday Tournament Series ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-tcl-crimson"></div>
            <span className="font-barlow-condensed font-bold text-tcl-navy uppercase tracking-[0.2em] text-sm">
              Holiday Circuit
            </span>
          </div>
          <h3 className="font-barlow-condensed font-bold text-2xl md:text-3xl text-tcl-navy uppercase mb-2">
            Premier Holiday Tournament Series
          </h3>
          <p className="font-source-sans text-[#555] text-base max-w-3xl">
            A national-caliber circuit built around major U.S. holiday weekends, offering elite
            natural turf competition in a professionally managed tournament environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {holidayTournaments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group relative flex flex-col"
            >
              {/* Top accent */}
              <div className="h-1.5 w-full bg-tcl-crimson" />

              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block bg-tcl-navy text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-wide w-fit">
                  {t.weekend}
                </span>

                <h4 className="font-barlow-condensed font-bold text-lg text-tcl-navy mb-3">
                  {t.name}
                </h4>

                {/* Shared meta */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['T20', 'White Ball', 'Natural Turf'].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-tcl-navy/5 rounded-full px-2.5 py-0.5 text-[10px] font-barlow-condensed font-semibold text-tcl-navy/70 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-source-sans text-[#555] text-sm leading-relaxed flex-1">
                  {t.statement}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-tcl-crimson w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
