'use client';
import { motion } from 'framer-motion';

/* ----- Tournament Data ----- */

const adultTournaments = [
    {
        name: 'The Grand Heritage T30 Cup',
        tagline: '\u201CCelebrating Cricket, Honoring Legacy\u201D',
        format: 'T30',
        ball: 'Red Ball',
        surface: 'High-Standard Natural Turf Wickets',
        accent: 'bg-tcl-crimson',
        image: '/tournaments/heritage-cup.png',
        statement:
            'The Grand Heritage T30 Cup is a premier red-ball tournament created for cricketers who value tradition, discipline, and competitive excellence. Played on high-quality natural turf wickets, this extended format emphasizes technique, temperament, strategic depth, and endurance. Blending the classical spirit of cricket with a professionally structured league environment, the tournament delivers an authentic red-ball experience while remaining efficient and time-conscious. It is the ideal platform for serious adult players seeking meaningful, structured competition on true turf surfaces.',
    },
    {
        name: 'TX T20 Bash',
        tagline: 'Dynamic. High-Intensity. White-Ball Action.',
        format: 'T20',
        ball: 'White Ball',
        surface: 'Professional Natural Turf Wickets',
        accent: 'bg-tcl-navy',
        image: '/tournaments/t20-bash.png',
        statement:
            'The TX T20 Bash is a dynamic, high-intensity white-ball tournament designed for competitive adult cricketers and club teams. Played on professional-grade natural turf wickets, it delivers the excitement and pace of modern T20 cricket within a structured league framework. Combining aggressive gameplay, organized scheduling, and competitive standings, the TX T20 Bash provides a premium short-format experience that showcases skill, strategy, and entertainment at the highest level.',
    },
];

const holidayTournaments = [
    {
        name: 'Memorial Patriot Cup – T20',
        weekend: 'Memorial Day Weekend',
        image: '/tournaments/memorial-cup.png',
        statement:
            'The Memorial Patriot Cup is a premier T20 tournament held during Memorial Day weekend, offering young cricketers the opportunity to compete on professional natural turf wickets in a highly organized and competitive setting. Designed to attract top academies and travel teams, the tournament combines elite competition with the visibility and energy of a major holiday weekend, creating a high-quality platform for performance, development, and exposure.',
    },
    {
        name: 'Liberty Shield – T20',
        weekend: 'Independence Day Weekend',
        image: '/tournaments/liberty-shield.png',
        statement:
            'The Liberty Shield is a marquee T20 tournament hosted during Independence Day weekend. Played on premium natural turf grounds, it provides a professional and competitive cricket experience for aspiring young athletes. Bringing together strong academies and club teams, the Liberty Shield blends patriotic celebration with high-level competition, delivering an event that is both festive and performance-driven.',
    },
    {
        name: 'Labor Day Cup – T20',
        weekend: 'Labor Day Weekend',
        image: '/tournaments/labor-day-cup.png',
        statement:
            'The Labor Day Cup serves as a late-summer championship event for cricketers seeking structured, high-quality T20 competition on natural turf. The tournament maintains strong competitive standards while providing a professionally managed and engaging tournament atmosphere. It offers teams a valuable opportunity to elevate performance as the competitive season approaches its final stretch.',
    },
    {
        name: 'Thanksgiving Champions Trophy – T20',
        weekend: 'Thanksgiving Weekend',
        image: '/tournaments/thanksgiving-trophy.png',
        statement:
            'The Thanksgiving Champions Trophy is a premier T20 tournament held over Thanksgiving weekend, bringing together competitive teams in a professionally organized natural turf environment. Serving as a season-ending championship platform, the event combines competitive intensity with the spirit of community and celebration, giving young athletes the opportunity to conclude their season on a high note.',
    },
];

/* ----- Component ----- */

const TournamentPortfolio = () => {
    return (
        <section className="relative bg-tcl-off-white py-20 md:py-28">
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
                        CRICKET TEXOMA &ndash; Premier Tournament Portfolio
                    </h2>
                </motion.div>

                {/* ── Adult Tournaments ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {adultTournaments.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group relative flex flex-col"
                        >
                            {/* Hero Image Banner */}
                            <div className="relative h-56 md:h-64 overflow-hidden">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                {/* Tournament name overlaid on image */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                    <h3 className="font-barlow-condensed font-bold text-2xl md:text-3xl text-white drop-shadow-lg leading-tight">
                                        {t.name}
                                    </h3>
                                    <p className="font-source-sans italic text-white/80 text-sm mt-1 drop-shadow-sm">{t.tagline}</p>
                                </div>
                                {/* Top accent bar */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 ${t.accent}`} />
                            </div>

                            <div className="p-6 md:p-8 flex-1 flex flex-col">
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
                            <div className="absolute bottom-0 left-0 h-1 bg-tcl-crimson w-0 group-hover:w-full transition-all duration-500" />
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
                            className="bg-white rounded-2xl shadow-md overflow-hidden group relative flex flex-col"
                        >
                            {/* Hero Image */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                {/* Weekend badge overlaid on image */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-tcl-crimson text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                                        {t.weekend}
                                    </span>
                                </div>
                                {/* Tournament name on image */}
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h4 className="font-barlow-condensed font-bold text-lg text-white drop-shadow-lg leading-tight">
                                        {t.name}
                                    </h4>
                                </div>
                                {/* Top accent */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-tcl-crimson" />
                            </div>

                            <div className="p-5 flex-1 flex flex-col">
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

                            <div className="absolute bottom-0 left-0 h-1 bg-tcl-crimson w-0 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TournamentPortfolio;
