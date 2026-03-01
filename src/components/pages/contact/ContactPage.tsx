'use client';
import Hero from './Hero';
import ContactCore from './ContactCore';
import QuickLinks from './QuickLinks';

const ContactPage = () => {
  return (
    <div className="bg-tcl-off-white min-h-screen">
      <Hero />
      <ContactCore />
      <QuickLinks />
    </div>
  );
};

export default ContactPage;
