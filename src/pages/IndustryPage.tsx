import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

const industryData: Record<string, { label: string; title: string; subtitle: string; capabilities: string[]; challenges: { title: string; description: string }[] }> = {
  fintech: {
    label: "Fintech & Banking",
    title: "Engineering talent for financial technology",
    subtitle: "Secure, compliant, and high-performance engineering teams for banking, payments, insurance, and financial platforms.",
    capabilities: [
      "Payment processing systems",
      "Regulatory compliance (PSD2, GDPR)",
      "Core banking modernization",
      "Risk & fraud detection",
      "Mobile banking applications",
      "API-first architecture",
    ],
    challenges: [
      { title: "Security-First Development", description: "Engineers experienced in building secure financial systems with encryption, tokenization, and audit compliance." },
      { title: "Regulatory Awareness", description: "Teams familiar with financial regulation requirements across European and global markets." },
      { title: "High-Availability Systems", description: "Expertise in building fault-tolerant, real-time transaction processing at scale." },
    ],
  },
  healthcare: {
    label: "Healthcare & Life Sciences",
    title: "Technology teams for health innovation",
    subtitle: "HIPAA-aware, detail-oriented engineering for healthtech platforms, clinical systems, and life sciences applications.",
    capabilities: [
      "EHR/EMR integrations",
      "Telehealth platforms",
      "Clinical data pipelines",
      "HL7/FHIR compliance",
      "Patient engagement apps",
      "Medical device software",
    ],
    challenges: [
      { title: "Compliance & Privacy", description: "Deep experience with healthcare data regulations including HIPAA, GDPR, and MDR." },
      { title: "Interoperability", description: "Building systems that integrate with existing healthcare infrastructure through standard protocols." },
      { title: "Patient-Centric Design", description: "User experience expertise focused on accessibility, clarity, and trust in health interfaces." },
    ],
  },
  saas: {
    label: "SaaS & Technology",
    title: "Scale your product engineering",
    subtitle: "Product-minded engineers for SaaS companies that need to ship faster without compromising quality.",
    capabilities: [
      "Full-stack product development",
      "Multi-tenant architecture",
      "CI/CD and DevOps automation",
      "Performance optimization",
      "API design and integration",
      "Data pipeline engineering",
    ],
    challenges: [
      { title: "Product Velocity", description: "Engineers who understand product metrics and can ship iteratively with quality." },
      { title: "Scalable Architecture", description: "Building systems designed to grow — from startup scale to enterprise-grade infrastructure." },
      { title: "Developer Experience", description: "Teams that maintain clean codebases, strong documentation, and efficient development workflows." },
    ],
  },
};

const fallback = industryData["saas"];

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = (slug && industryData[slug]) || fallback;

  return (
    <PageShell>
      <PageHero label={industry.label} title={industry.title} subtitle={industry.subtitle}>
        <div className="mt-8">
          <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
            Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </PageHero>

      {/* Capabilities */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">What we deliver</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">Industry-specific expertise</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {industry.challenges.map((challenge, i) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border bg-card"
              >
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
        <div className="container relative text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Build your {industry.label.toLowerCase()} engineering team
            </h2>
            <p className="text-secondary-foreground/50 mb-10 text-base leading-relaxed">
              Let's discuss how we can support your specific delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link to="/services">
                <Button size="lg" variant="outlineDark" className="text-base px-8 h-12">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default IndustryPage;
