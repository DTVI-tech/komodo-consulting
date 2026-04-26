import { useEffect, useRef } from "react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import SEOHead, { buildBreadcrumbs } from "@/components/SEOHead";

const CookieDeclaration = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src = "https://consent.cookiebot.com/decb2f98-205a-499a-8238-551595294750/cd.js";
    script.type = "text/javascript";
    script.async = true;
    containerRef.current.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return <div ref={containerRef} />;
};

const EFFECTIVE_DATE = "23 April 2026";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Information We Collect",
    body: (
      <>
        <p>We may collect and process the following categories of information:</p>
        <ul>
          <li>
            Personal information, such as your name, work email address, phone number, company details, and any
            other information you choose to provide through contact forms, emails, or other communications.
          </li>
          <li>
            Technical and usage information, such as your IP address, browser type and version, device information,
            pages viewed, time spent on the Website, referring websites, and similar interaction data.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "2. How We Use Your Information",
    body: (
      <>
        <p>We may use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and improve our Website and services.</li>
          <li>Respond to inquiries, requests, or business communications.</li>
          <li>Personalize and enhance your experience on the Website.</li>
          <li>
            Send updates, newsletters, or marketing communications where you have requested or consented to receive
            them.
          </li>
          <li>Monitor usage, performance, and functionality of the Website.</li>
          <li>Comply with legal, regulatory, and contractual obligations.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. How We Share Your Information",
    body: (
      <>
        <p>We do not sell or rent your personal information.</p>
        <p>We may share information only where necessary, including with:</p>
        <ul>
          <li>
            Service providers and technology partners that help us host, maintain, analyze, or support the Website
            or our services.
          </li>
          <li>
            Professional advisers, authorities, regulators, or other third parties where disclosure is required by
            law or needed to protect our rights, property, or safety.
          </li>
          <li>
            Relevant parties in connection with a merger, acquisition, restructuring, sale of assets, or similar
            business transaction.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Cookies and Similar Technologies",
    body: (
      <>
        <p>
          We may use cookies and similar technologies to improve functionality, remember preferences, understand
          Website usage, and support analytics or marketing activities where applicable.
        </p>
        <p>These technologies may include session cookies, persistent cookies, and third-party cookies.</p>
        <p>
          You can manage or disable cookies through your browser settings. Where legally required, non-essential
          cookies should be subject to your consent preferences.
        </p>
      </>
    ),
  },
  {
    heading: "5. Data Retention",
    body: (
      <p>
        We keep personal data only for as long as reasonably necessary for the purposes described in this Privacy
        Policy, including to meet legal, regulatory, tax, accounting, or reporting requirements.
      </p>
    ),
  },
  {
    heading: "6. Security",
    body: (
      <>
        <p>
          We use appropriate technical and organizational measures designed to protect personal data against
          unauthorized access, loss, misuse, alteration, or disclosure.
        </p>
        <p>
          However, no method of transmission over the internet or electronic storage is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    heading: "7. Your Rights",
    body: (
      <>
        <p>
          Depending on the laws that apply to you, you may have rights in relation to your personal data, including
          the right to access, correct, update, delete, restrict, or object to certain processing, as well as the
          right to withdraw consent where processing is based on consent.
        </p>
        <p>You may also have the right to lodge a complaint with a competent data protection authority.</p>
        <p>To exercise your rights or make a privacy-related request, please contact us using the details below.</p>
      </>
    ),
  },
  {
    heading: "8. Third-Party Links",
    body: (
      <p>
        The Website may contain links to third-party websites or services. We are not responsible for the privacy
        practices, content, or security of those third-party sites. We encourage you to review their privacy policies
        before providing personal data.
      </p>
    ),
  },
  {
    heading: "9. Changes to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page together with
        an updated effective date. We encourage you to review this page periodically.
      </p>
    ),
  },
  {
    heading: "10. Contact Us",
    body: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or how your personal data
          is handled, please contact:
        </p>
        <address className="not-italic mt-4 space-y-1 text-foreground/80">
          <div className="font-semibold text-foreground">Komodo Consulting</div>
          <div>
            Email:{" "}
            <a href="mailto:privacy@komodo-consulting.pt" className="text-primary hover:underline">
              privacy@komodo-consulting.pt
            </a>
          </div>
          <div>Address: EN 9, 15, 2565-161 Carvoeira TVD</div>
          <div>
            Website:{" "}
            <a href="https://komodo-consulting.pt" className="text-primary hover:underline">
              komodo-consulting.pt
            </a>
          </div>
        </address>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <PageShell>
      <SEOHead
        title="Privacy Policy"
        description="Read the Komodo Consulting Privacy Policy to understand how we collect, use, and protect personal data when you interact with our website and services."
        jsonLd={buildBreadcrumbs([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />

      <PageHero label="Legal" title="Privacy Policy">
        <p className="mt-4 text-sm text-secondary-foreground/50">
          Effective Date: {EFFECTIVE_DATE}
        </p>
      </PageHero>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <article className="mx-auto max-w-2xl text-foreground/80 leading-relaxed text-[15px] md:text-base">
            <div className="space-y-5">
              <p>
                Komodo Consulting ("Komodo Consulting", "we", "us", or "our") respects your privacy and is committed
                to protecting the personal data you share with us.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and protect information when you visit{" "}
                <a href="https://komodo-consulting.pt" className="text-primary hover:underline">
                  komodo-consulting.pt
                </a>{" "}
                (the "Website"), contact us, or otherwise interact with our services.
              </p>
              <p>
                By using the Website, you acknowledge the practices described in this Privacy Policy. If you do not
                agree with this Privacy Policy, please do not use the Website.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section key={section.heading} className="border-t border-border pt-10">
                  <h2 className="text-xl md:text-2xl font-display font-semibold tracking-tight text-foreground mb-5">
                    {section.heading}
                  </h2>
                  <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul>li]:leading-relaxed">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
};

export default PrivacyPolicy;
