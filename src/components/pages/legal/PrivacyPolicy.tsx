'use client';
import LegalPageLayout from './LegalPageLayout';

const PrivacyPolicy = () => {
  const tocItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'information-we-collect', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'childrens-privacy', label: "Children's Privacy (COPPA)" },
    { id: 'sharing-information', label: 'How We Share Information' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'cookies', label: 'Cookies and Tracking' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'photos-media', label: 'Photos and Media' },
    { id: 'third-party-links', label: 'Third-Party Links' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      effectiveDate="Effective: January 1, 2026 · Last Updated: January 1, 2026"
      tocItems={tocItems}
    >
      <h2 id="introduction" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        1. Introduction
      </h2>
      <p className="mb-4">
        Cricket Texoma ("TCL", "we", "us", or "our") is a sports organization based at Sports Texoma, dedicated to promoting and organizing cricket tournaments across the Texoma region. We respect your privacy and are committed to protecting the personal information of our players, parents, coaches, and website visitors.
      </p>
      <p className="mb-4">
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or register for our programs. By using our services, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2 id="information-we-collect" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        2. Information We Collect
      </h2>
      <p className="mb-4">
        We collect information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with you or your household. This includes:
      </p>
      <h3 className="font-source-sans text-[17px] font-semibold text-tcl-navy mt-6 mb-3">Personal Information</h3>
      <ul className="list-none pl-4 mb-4 space-y-2">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Contact Data:</strong> Name, email address, postal address, and phone number of parents/guardians and academy directors.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Player Data:</strong> Names, dates of birth, gender, playing role, and academy affiliation of players.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Health & Safety Data:</strong> Medical conditions, allergies, or emergency contact information provided voluntarily for player safety during events.
        </li>
      </ul>
      <h3 className="font-source-sans text-[17px] font-semibold text-tcl-navy mt-6 mb-3">Transaction Data</h3>
      <p className="mb-4">
        If you make payments for registration or membership, financial information is processed directly by our third-party payment processors. TCL does not store full credit card numbers on our servers.
      </p>

      <h2 id="how-we-use" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        3. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use the collected data for legitimate organizational purposes, including:
      </p>
      <ul className="list-none pl-4 mb-4 space-y-2">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Tournament Management:</strong> Organizing brackets, scheduling matches, verifying age eligibility, and recording statistics.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Communication:</strong> Sending transaction confirmations, event updates, schedule changes, and important league announcements.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Safety:</strong> Ensuring coaches and officials are aware of relevant medical conditions in emergencies.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Site Improvement:</strong> Analyzing website usage to improve user experience and functionality.
        </li>
      </ul>

      <h2 id="childrens-privacy" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        4. Children's Privacy (COPPA)
      </h2>
      <p className="mb-4">
        TCL complies with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information directly from children under the age of 13 without verifiable parental consent.
      </p>
      <ul className="list-none pl-4 mb-4 space-y-2">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Parental Consent:</strong> All data regarding minors is collected from parents, guardians, or authorized academy directors who certify they have parental permission.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Parental Rights:</strong> Parents have the right to review the information provided about their child, request its deletion, and refuse further collection.
        </li>
      </ul>
      <p className="mb-4">
        To exercise these rights, please contact us at <a href="mailto:info@crickettexoma.com" className="text-tcl-crimson underline hover:text-tcl-crimson-dark">info@crickettexoma.com</a>.
      </p>

      <h2 id="sharing-information" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        5. How We Share Information
      </h2>
      <p className="mb-4">
        <strong>We do not sell, trade, or rent your personal identification information to others.</strong> We may share information in the following limited circumstances:
      </p>
      <ul className="list-none pl-4 mb-4 space-y-2">
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Service Providers:</strong> With trusted third parties who assist us in operating our website, conducting our business, or serving our users (e.g., payment processors, email services), so long as those parties agree to keep this information confidential.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Tournament Operations:</strong> Player names and team rosters may be shared with officials, scorers, and published on our website as part of tournament statistics and results.
        </li>
        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-tcl-gold">
          <strong>Legal Requirements:</strong> When required by law or to protect the rights, property, or safety of TCL, our participants, or others.
        </li>
      </ul>

      <h2 id="data-security" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        6. Data Security
      </h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 id="cookies" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        7. Cookies and Tracking
      </h2>
      <p className="mb-4">
        Our website may use "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly. We may use third-party analytics services (such as Google Analytics) to understand website traffic patterns.
      </p>

      <h2 id="your-rights" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        8. Your Rights
      </h2>
      <p className="mb-4">
        You have the right to access, correct, or request deletion of your personal information held by TCL. You may also opt out of receiving marketing newsletters at any time by following the unsubscribe instructions included in those emails.
      </p>

      <h2 id="photos-media" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        9. Photos and Media
      </h2>
      <p className="mb-4">
        TCL events occur in public spaces where photography and video recording may take place. By registering for and attending our events, you consent to the use of your (or your child's) image in TCL promotional materials, website galleries, and social media. If you have specific privacy concerns regarding a photo, please contact us to request its removal.
      </p>

      <h2 id="third-party-links" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        10. Third-Party Links
      </h2>
      <p className="mb-4">
        Our website may contain links to external sites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
      </p>

      <h2 id="changes" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        11. Changes to This Policy
      </h2>
      <p className="mb-4">
        TCL has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage you to frequently check this page for any changes. Continued use of the website or participation in our league after any changes signifies your acceptance of the new terms.
      </p>

      <h2 id="contact" className="font-barlow-condensed font-semibold text-[22px] text-tcl-navy uppercase tracking-wide mt-10 mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-tcl-gold block"></span>
        12. Contact Us
      </h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or our data practices, please contact us:
      </p>
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

export default PrivacyPolicy;
