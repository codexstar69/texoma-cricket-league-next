'use client';
import Hero from './Hero';
import CalendarHeader from './CalendarHeader';
import TournamentTable from './TournamentTable';
import PlanningNotes from './PlanningNotes';
import Timeline from './Timeline';
import CTA from './CTA';
import TournamentPortfolio from './TournamentPortfolio';

const TournamentsPage = () => {
  return (
    <div className="bg-tcl-off-white min-h-screen">
      <Hero />
      <TournamentPortfolio />
      <CalendarHeader />
      <TournamentTable />
      <PlanningNotes />
      <Timeline />
      <CTA />
    </div>
  );
};

export default TournamentsPage;
