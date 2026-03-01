'use client';
import { motion } from 'framer-motion';
import { Table, Flower2, Sun, Trophy, Leaf, Snowflake, Star } from 'lucide-react';

interface SeasonData {
  id: string;
  season: string;
  timeframe: string;
  icon: React.ElementType;
  color: string;
  bgTint: string;
  iconColor: string;
  events: string[];
  ageGroups: string;
  purpose: string;
  tiers: ('development' | 'regional' | 'national' | 'founding')[];
  isFlagship?: boolean;
}

const seasons: SeasonData[] = [
  {
    id: 'spring',
    season: 'SPRING',
    timeframe: 'Feb – Apr',
    icon: Flower2,
    color: 'border-l-tcl-green',
    bgTint: 'bg-tcl-green/10',
    iconColor: 'text-tcl-green',
    events: ['Spring Open', 'Regional Spring Qualifiers', 'U11 Development Festival'],
    ageGroups: 'U11–U17',
    purpose: 'Season kickoff, evaluation, early qualification',
    tiers: ['development', 'regional', 'national', 'founding']
  },
  {
    id: 'summer',
    season: 'SUMMER',
    timeframe: 'May – Jul',
    icon: Sun,
    color: 'border-l-tcl-gold',
    bgTint: 'bg-tcl-gold/10',
    iconColor: 'text-tcl-gold',
    events: ['Summer Prep Series', 'TCL Regional Championships', 'High-Performance Camp*'],
    ageGroups: 'U13–U19',
    purpose: 'High-level competition, national preparation',
    tiers: ['development', 'regional', 'national', 'founding']
  },
  {
    id: 'nationals',
    season: 'NATIONALS',
    timeframe: 'Jul – Aug',
    icon: Trophy,
    color: 'border-l-tcl-gold',
    bgTint: 'bg-tcl-gold/20',
    iconColor: 'text-tcl-gold',
    events: ['TCL National Championships', 'Elite Showcase Matches', 'Girls Invitational*'],
    ageGroups: 'U11–U19',
    purpose: 'Flagship national competition & recognition',
    tiers: ['development', 'regional', 'national', 'founding'],
    isFlagship: true
  },
  {
    id: 'fall',
    season: 'FALL',
    timeframe: 'Sep – Oct',
    icon: Leaf,
    color: 'border-l-tcl-crimson',
    bgTint: 'bg-tcl-crimson/10',
    iconColor: 'text-tcl-crimson',
    events: ['Fall Open', 'Regional Fall Qualifiers', 'Academy Showcase Weekend'],
    ageGroups: 'U11–U19',
    purpose: 'Continued development, exposure, progression',
    tiers: ['development', 'regional', 'national', 'founding']
  },
  {
    id: 'winter',
    season: 'WINTER',
    timeframe: 'Nov – Jan',
    icon: Snowflake,
    color: 'border-l-tcl-sky',
    bgTint: 'bg-tcl-sky/10',
    iconColor: 'text-tcl-sky',
    events: ['Winter Indoor Cup', 'Year-End Development Camp', 'Coaches Workshop*'],
    ageGroups: 'U11–U17',
    purpose: 'Skill development, indoor play, planning',
    tiers: ['development', 'regional', 'national', 'founding']
  }
];

const renderEvents = (events: string[]) => (
  <ul className="space-y-1.5">
    {events.map((evt, i) => (
      <li key={i} className="flex items-start gap-2.5 font-source-sans text-[14px] md:text-[15px] font-medium text-[#333] leading-snug">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tcl-gray-300 shrink-0"></span>
        <span>
          {evt.replace('*', '')}
          {evt.includes('*') && <sup className="text-tcl-crimson ml-0.5">✶</sup>}
        </span>
      </li>
    ))}
  </ul>
);

const renderTierDots = (rowTiers: string[]) => (
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center gap-1.5">
      <div className={`w-2 h-2 rounded-full ${rowTiers.includes('development') ? 'bg-tcl-green' : 'bg-tcl-gray-200'}`} aria-label="Development Partner"></div>
      <div className={`w-2 h-2 rounded-full ${rowTiers.includes('regional') ? 'bg-tcl-sky' : 'bg-tcl-gray-200'}`} aria-label="Regional Partner"></div>
      <div className={`w-2 h-2 rounded-full ${rowTiers.includes('national') ? 'bg-tcl-navy' : 'bg-tcl-gray-200'}`} aria-label="National Partner"></div>
      {rowTiers.includes('founding') ? (
        <Star className="w-2.5 h-2.5 text-tcl-gold fill-tcl-gold" aria-label="Founding Partner" />
      ) : (
        <div className="w-2 h-2 rounded-full bg-tcl-gray-200"></div>
      )}
    </div>
    <span className="text-[10px] text-[#AAA] font-source-sans">All Partners</span>
  </div>
);

const TournamentTable = () => {
  return (
    <section className="bg-tcl-off-white pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Label */}
        <div className="flex items-center gap-2 mb-4 md:mb-3">
          <Table className="w-[18px] h-[18px] text-tcl-navy" />
          <span className="font-barlow-condensed font-semibold text-[16px] text-tcl-navy uppercase tracking-widest">TCL One-Page Calendar</span>
        </div>

        {/* --- DESKTOP TABLE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block bg-white rounded-2xl shadow-xl border border-tcl-gray-200 overflow-hidden"
        >
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">TCL One-Page Calendar — Annual Tournament Schedule</caption>
            <thead>
              <tr className="bg-tcl-navy text-white">
                <th scope="col" className="px-5 py-4 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em]">Season</th>
                <th scope="col" className="px-5 py-4 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em]">Timeframe</th>
                <th scope="col" className="px-5 py-4 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] w-[28%]">Key Events</th>
                <th scope="col" className="px-5 py-4 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] text-center">Age Groups</th>
                <th scope="col" className="px-5 py-4 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] w-[25%]">Primary Purpose</th>
                <th scope="col" className="px-5 py-4 font-barlow-condensed font-semibold text-[13px] uppercase tracking-[0.06em] text-center">Partner Tier Access</th>
              </tr>
            </thead>
            <tbody>
              {seasons.map((season, i) => (
                <motion.tr
                  key={season.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border-b border-tcl-gray-200 last:border-0 transition-colors duration-200 hover:bg-tcl-warm-stone/20 group relative
                    ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF7]'}
                  `}
                >
                  {/* Season */}
                  <td className={`px-5 py-6 border-l-[4px] align-middle ${season.color}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${season.bgTint} flex items-center justify-center shrink-0`}>
                        <season.icon className={`w-6 h-6 ${season.iconColor}`} />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className={`font-barlow-condensed font-bold text-[16px] uppercase leading-none text-tcl-navy`}>
                          {season.season}
                        </span>
                        {season.isFlagship && (
                          <span className="inline-block mt-1.5 text-[10px] font-bold text-tcl-gold uppercase tracking-wider leading-none">Flagship</span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Timeframe */}
                  <td className="px-5 py-6 align-middle">
                    <span className="font-barlow font-semibold text-[14px] text-tcl-navy">{season.timeframe}</span>
                  </td>

                  {/* Events */}
                  <td className="px-5 py-6 align-middle">
                    {renderEvents(season.events)}
                  </td>

                  {/* Age Groups */}
                  <td className="px-5 py-6 align-middle text-center">
                    <span className="font-barlow font-semibold text-[14px] text-tcl-navy">{season.ageGroups}</span>
                  </td>

                  {/* Purpose */}
                  <td className="px-5 py-6 align-middle">
                    <span className="font-source-sans text-[13px] text-[#555]">{season.purpose}</span>
                  </td>

                  {/* Access */}
                  <td className="px-5 py-6 align-middle text-center">
                    {renderTierDots(season.tiers)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* --- MOBILE/TABLET CARDS --- */}
        <div className="lg:hidden flex flex-col gap-6">
          {seasons.map((season, i) => (
            <motion.article
              key={season.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-xl border border-tcl-gray-200 shadow-md p-5 border-l-[4px] relative overflow-hidden ${season.color}
                   ${season.isFlagship ? 'bg-gradient-to-br from-white to-tcl-gold/5 shadow-xl' : ''}
                 `}
            >
              {season.isFlagship && (
                <div className="absolute top-0 right-0 bg-tcl-gold text-tcl-navy font-barlow-condensed font-bold text-[10px] uppercase px-3 py-1 rounded-bl-lg shadow-sm">Flagship</div>
              )}

              {/* Header Row */}
              <div className="flex items-center mb-5 gap-3">
                <div className={`w-12 h-12 rounded-full ${season.bgTint} flex items-center justify-center shrink-0`}>
                  <season.icon className={`w-6 h-6 ${season.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-barlow-condensed font-bold text-[24px] text-tcl-navy uppercase leading-none mb-1">{season.season}</h3>
                  <span className="inline-block bg-tcl-navy/5 text-tcl-navy px-2 py-0.5 rounded text-[12px] font-barlow font-bold uppercase tracking-wider">{season.timeframe}</span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-tcl-gray-100 mb-5"></div>

              {/* Events Section */}
              <div className="mb-5 bg-tcl-gray-50/50 p-3 rounded-lg border border-tcl-gray-100">
                <span className="block font-barlow-condensed font-bold text-[11px] text-[#999] uppercase tracking-widest mb-2.5">Key Events</span>
                {renderEvents(season.events)}
              </div>

              {/* Grid Details */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-5">
                <div>
                  <span className="block font-barlow-condensed font-bold text-[11px] text-[#999] uppercase tracking-widest mb-1">Age Groups</span>
                  <span className="font-barlow font-bold text-[16px] text-tcl-navy">{season.ageGroups}</span>
                </div>
                <div>
                  <span className="block font-barlow-condensed font-bold text-[11px] text-[#999] uppercase tracking-widest mb-1">Purpose</span>
                  <p className="font-source-sans text-[13px] text-[#555] leading-snug">{season.purpose}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-tcl-navy/5 rounded-lg p-3 flex items-center justify-between">
                <span className="font-barlow-condensed font-bold text-[11px] text-tcl-navy uppercase tracking-widest">Partner Access</span>
                <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-full shadow-sm border border-tcl-gray-200">
                  <div className="w-2 h-2 rounded-full bg-tcl-green"></div>
                  <div className="w-2 h-2 rounded-full bg-tcl-sky"></div>
                  <div className="w-2 h-2 rounded-full bg-tcl-navy"></div>
                  <Star className="w-2.5 h-2.5 text-tcl-gold fill-tcl-gold" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TournamentTable;
