'use client';
import Hero from './Hero';
import ContextBar from './ContextBar';
import Vision from './Vision';
import ImageBreak from './ImageBreak';
import Mission from './Mission';
import Values from './Values';
import Facility from './Facility';
import CTA from './CTA';

const AboutPage = () => {
  return (
    <div className="bg-tcl-off-white min-h-screen">
      <Hero />
      <ContextBar />
      <Vision />
      <ImageBreak />
      <Mission />
      <Values />
      <Facility />
      <CTA />
    </div>
  );
};

export default AboutPage;
