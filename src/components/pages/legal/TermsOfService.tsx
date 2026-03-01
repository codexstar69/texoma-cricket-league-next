'use client';
import LegalPageLayout from './LegalPageLayout';

const TermsOfService = () => {
  const tocItems = [
    { id: 'acceptance', label: 'Introduction & Acceptance' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'registration', label: 'Registration & Membership' },
    { id: 'conduct', label: 'Code of Conduct' },
    { id: 'participation', label: 'Tournament Rules' },
    { id: 'fees', label: 'Fees & Payments' },
    { id: 'risk', label: 'Assumption of Risk' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'media', label: 'Photos & Media' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'modifications', label: 'Modifications' },
    { id: 'termination', label: 'Termination' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      effectiveDate="Effective: January 1, 2026 · Last Updated: January 1, 2026"
      tocItems={tocItems}
    >
      <h2 id="acceptance" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        1. Introduction & Acceptance
      </h2>
      <p className="mb-4">
        Welcome to Cricket Texoma ("TCL"). These Terms of Service ("Terms") govern your use of our website and your participation in all TCL tournaments, events, and programs.
      </p>
      <p className="mb-4">
        By accessing our website, registering for an event, or paying membership fees, you agree to be bound by these Terms. If you are registering a minor (under 18 years of age), you agree to these Terms on their behalf as their parent or legal guardian.
      </p>

      <h2 id="eligibility" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        2. Eligibility
      </h2>
      <ul className="list-none pl-4 mb-4 space-y-2">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Programs:</strong> Open to players aged 6–18. Players must meet specific age cut-off dates for their respective age groups (e.g., U11, U13, U15).
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Adult Programs:</strong> Open to participants 18 years of age or older.
        </li>
      </ul>
      <p className="mb-4">
        TCL reserves the right to verify age and eligibility through birth certificates or government-issued IDs. Providing false eligibility information may result in immediate disqualification without refund.
      </p>

      <h2 id="registration" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        3. Registration & Membership
      </h2>
      <p className="mb-4">
        You agree to provide accurate, current, and complete information during the registration process. Each individual may only hold one active player registration per season.
      </p>
      <p className="mb-4">
        TCL reserves the right to accept or deny any registration at its sole discretion. Registration for the league does not guarantee placement in specific tournaments, which may have limited capacity and separate entry requirements.
      </p>

      <h2 id="conduct" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        4. Code of Conduct
      </h2>
      <p className="mb-4">
        All participants—including players, parents, coaches, and spectators—must adhere to the TCL Code of Conduct. We enforce a zero-tolerance policy regarding:
      </p>
      <ul className="list-none pl-4 mb-4 space-y-2">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          Abuse, harassment, or discrimination of any kind.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          Physical violence or threats toward officials, players, or staff.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          Unsportsmanlike conduct, including cheating or match-fixing.
        </li>
      </ul>
      <p className="mb-4">
        Violations may result in warnings, suspension, or permanent ban from TCL events, at the discretion of the disciplinary committee.
      </p>

      <h2 id="participation" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        5. Tournament Rules & Participation
      </h2>
      <p className="mb-4">
        TCL establishes all tournament formats, match rules, and officiating standards. Participants must comply with event-specific rules distributed prior to each tournament. We reserve the right to modify schedules, formats, or venues due to weather, field availability, or safety concerns without liability for travel costs incurred.
      </p>

      <h2 id="fees" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        6. Fees & Payments
      </h2>
      <p className="mb-4">
        Membership fees and tournament entry fees are separate. All fees must be paid in full by the stated deadlines.
      </p>
      <p className="mb-4">
        <strong>Refund Policy:</strong> Refunds are generally not provided once a schedule has been published or a season has commenced. Specific refund terms for individual tournaments will be listed on the registration page for that event.
      </p>

      <h2 id="risk" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        7. Assumption of Risk
      </h2>
      <p className="mb-4">
        You acknowledge that cricket is a physical sport that involves inherent risks of injury, including but not limited to being struck by the ball or bat, collisions, and environmental factors (heat, field conditions).
      </p>
      <p className="mb-4">
        By participating, you voluntarily assume all such risks on behalf of yourself or your minor child. You certify that the participant is physically fit to compete and have adequate health insurance to cover any potential injuries.
      </p>

      <h2 id="liability" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        8. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the fullest extent permitted by Texas law, Cricket Texoma, its directors, officers, employees, volunteers, and venue partners shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your participation in our events or use of our website. You agree to indemnify and hold TCL harmless from any claims arising out of your participation.
      </p>

      <h2 id="intellectual-property" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        9. Intellectual Property
      </h2>
      <p className="mb-4">
        The TCL name, logo, website content, and tournament formats are the intellectual property of Cricket Texoma. You may not reproduce, distribute, or create derivative works without express written permission.
      </p>

      <h2 id="media" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        10. Photos, Videos & Media
      </h2>
      <p className="mb-4">
        TCL reserves the right to photograph and record video of events for promotional, educational, and archival purposes. By participating, you grant TCL a non-exclusive, royalty-free license to use your image and likeness in such media without compensation.
      </p>

      <h2 id="privacy" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        11. Privacy
      </h2>
      <p className="mb-4">
        Your submission of personal information is governed by our <a href="/privacy" className="text-tcl-crimson underline">Privacy Policy</a>. By using our services, you consent to the data practices described therein.
      </p>

      <h2 id="modifications" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        12. Modifications to Terms
      </h2>
      <p className="mb-4">
        TCL may update these Terms at any time. Material changes will be communicated via email or website notice. Continued participation after such changes constitutes acceptance of the new Terms.
      </p>

      <h2 id="termination" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        13. Termination
      </h2>
      <p className="mb-4">
        TCL reserves the right to terminate your membership or participation for violations of these Terms or the Code of Conduct. You may withdraw from the league at any time, subject to the Refund Policy.
      </p>

      <h2 id="governing-law" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        14. Governing Law
      </h2>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of the State of Texas. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in the appropriate jurisdiction for the Texoma region.
      </p>

      <h2 id="contact" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        15. Contact Us
      </h2>
      <div className="bg-tcl-navy/5 p-5 rounded-lg border border-tcl-light-gray">
        <ul className="space-y-1 font-source-sans font-medium text-tcl-navy">
          <li><strong>Email:</strong> <a href="mailto:info@crickettexoma.com" className="text-tcl-crimson hover:underline">info@crickettexoma.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:469-246-7342" className="text-tcl-crimson hover:underline">469-246-7342</a></li>
          <li><strong>Address:</strong> Sports Texoma</li>
        </ul>
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfService;
