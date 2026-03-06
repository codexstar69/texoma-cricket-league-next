'use client';
import LegalPageLayout from './LegalPageLayout';

const Disclaimer = () => {
  const tocItems = [
    { id: 'general', label: 'General Disclaimer' },
    { id: 'professional', label: 'No Professional Advice' },
    { id: 'physical', label: 'Physical Activity Disclaimer' },
    { id: 'event', label: 'Event & Schedule Disclaimer' },
    { id: 'third-party', label: 'Third-Party Content' },
    { id: 'results', label: 'Results & Rankings' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'changes', label: 'Changes to This Disclaimer' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <LegalPageLayout
      title="Disclaimer"
      effectiveDate="Effective: January 1, 2026 · Last Updated: January 1, 2026"
      tocItems={tocItems}
    >
      <h2 id="general" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        1. General Disclaimer
      </h2>
      <p className="mb-4">
        The information provided on the Cricket Texoma (&ldquo;TCL&rdquo;) website and in our communications is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site. Use of the site and reliance on any information is solely at your own risk.
      </p>

      <h2 id="professional" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        2. No Professional Advice
      </h2>
      <p className="mb-4">
        The content on this website does not constitute medical, legal, or other professional advice. Coaching tips, training guidelines, and safety information are general in nature. You should consult with appropriate professionals (such as a physician or certified trainer) for specific advice tailored to your or your child&apos;s situation.
      </p>

      <h2 id="physical" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        3. Physical Activity Disclaimer
      </h2>
      <p className="mb-4">
        Cricket and associated physical training involve strenuous physical activity and carry an inherent risk of injury. By participating in TCL programs, you acknowledge these risks. TCL recommends that all participants consult a physician before beginning any new sports program. TCL is not responsible for any physical injury or health issue that may result from participation in our events.
      </p>

      <h2 id="event" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        4. Event & Schedule Disclaimer
      </h2>
      <p className="mb-4">
        Tournament dates, match formats, and schedules are subject to change due to weather conditions, venue availability, team withdrawals, or other factors beyond our control.
      </p>
      <p className="mb-4">
        TCL will make reasonable efforts to communicate changes promptly but is not liable for any costs incurred by participants or spectators (such as travel or accommodation expenses) resulting from schedule changes or event cancellations.
      </p>

      <h2 id="third-party" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        5. Third-Party Content & Links
      </h2>
      <p className="mb-4">
        Our website may contain links to third-party websites or content. Such external links are not investigated, monitored, or checked for accuracy or validity by us. TCL does not endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site.
      </p>

      <h2 id="results" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        6. Results & Rankings
      </h2>
      <p className="mb-4">
        Match results, player statistics, and team rankings are recorded and published in good faith based on official scorecards. While we strive for accuracy, errors may occur. TCL will correct verified errors brought to our attention but makes no guarantee regarding the use of these statistics for external purposes (e.g., college applications or third-party scouting).
      </p>

      <h2 id="liability" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        7. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the fullest extent permitted by Texas law, Cricket Texoma shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the website or participation in any TCL event. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
      </p>

      <h2 id="indemnification" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        8. Indemnification
      </h2>
      <p className="mb-4">
        You agree to defend, indemnify, and hold harmless TCL and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) resulting from your violation of this Disclaimer or your use of the website and services.
      </p>

      <h2 id="changes" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        9. Changes to This Disclaimer
      </h2>
      <p className="mb-4">
        TCL may update this Disclaimer at any time without prior notice. Changes are effective immediately upon posting to the website. Your continued use of the site or participation in events constitutes your acceptance of the revised Disclaimer.
      </p>

      <h2 id="contact" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-crimson block"></span>
        10. Contact Us
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

export default Disclaimer;
