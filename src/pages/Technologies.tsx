import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Cloud,
  Database,
  TestTube,
  Shield,
  Server,
  Headphones,
  Kanban,
  CheckCircle2,
  Users,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

/* ─── Capability Data ─── */

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Full-stack, frontend, backend, and mobile engineering across modern frameworks and languages.",
    technologies: [
      "Java",
      ".NET",
      "Node.js",
      "React",
      "Angular",
      "TypeScript",
      "Python",
      "Swift",
      "Kotlin",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure automation, CI/CD pipelines, container orchestration, and cloud-native architecture.",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "ArgoCD",
    ],
  },
  {
    icon: Database,
    title: "Data & AI",
    description:
      "Data engineering, analytics pipelines, machine learning, and AI-powered product features.",
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Databricks",
      "dbt",
      "Azure Data Factory",
      "Snowflake",
      "BigQuery",
    ],
  },
  {
    icon: TestTube,
    title: "QA & Test Automation",
    description:
      "End-to-end quality assurance with automated testing frameworks and performance testing.",
    technologies: [
      "Selenium",
      "Cypress",
      "Playwright",
      "Postman",
      "JMeter",
      "Jest",
      "Appium",
      "k6",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Application security, vulnerability management, compliance auditing, and secure development practices.",
    technologies: [
      "IAM",
      "SIEM",
      "SOC",
      "Vulnerability Management",
      "Cloud Security",
      "OWASP",
      "Zero Trust",
    ],
  },
  {
    icon: Server,
    title: "ERP & Business Apps",
    description:
      "Enterprise application development, CRM and ERP customization, and business process automation.",
    technologies: [
      "SAP",
      "Salesforce",
      "Dynamics 365",
      "Oracle",
      "ServiceNow",
      "Power Platform",
    ],
  },
  {
    icon: Headphones,
    title: "IT Support & Infrastructure",
    description:
      "Managed IT services, infrastructure monitoring, system administration, and help desk operations.",
    technologies: [
      "Linux",
      "Windows Server",
      "Microsoft 365",
      "Networking",
      "ITSM",
      "VMware",
      "Ansible",
    ],
  },
  {
    icon: Kanban,
    title: "Product & Project Delivery",
    description:
      "Technical product management, agile coaching, delivery leadership, and program management.",
    technologies: [
      "Agile",
      "Scrum",
      "Jira",
      "Confluence",
      "Product Discovery",
      "PMO",
      "Miro",
    ],
  },
];

/* ─── Roles Data ─── */

const roleGroups = [
  {
    icon: Code2,
    title: "Engineering",
    roles: [
      "Backend Engineers",
      "Frontend Engineers",
      "Full-Stack Developers",
      "Mobile Engineers",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    roles: [
      "DevOps Engineers",
      "Cloud Engineers",
      "SRE Engineers",
      "Infrastructure Specialists",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    roles: [
      "Data Engineers",
      "BI Developers",
      "ML / AI Engineers",
      "Data Architects",
    ],
  },
  {
    icon: Shield,
    title: "Quality & Security",
    roles: [
      "QA Engineers",
      "Test Automation Engineers",
      "Security Engineers",
      "Performance Engineers",
    ],
  },
  {
    icon: Server,
    title: "Enterprise & Apps",
    roles: [
      "ERP Consultants",
      "Salesforce Developers",
      "Business Analysts",
      "Solution Architects",
    ],
  },
  {
    icon: Layers,
    title: "Product & Delivery",
    roles: [
      "Product Managers",
      "Project Managers",
      "Scrum Masters",
      "Delivery Leads",
    ],
  },
];

/* ─── Delivery Outcomes ─── */

const outcomes = [
  {
    title: "Stack-Agnostic Flexibility",
    description:
      "Whatever your tech stack, we match talent with deep, hands-on experience — not surface-level familiarity.",
  },
  {
    title: "Scalable Team Extension",
    description:
      "Add individual specialists or full squads across any domain. Scale up or down as your project evolves.",
  },
  {
    title: "Integrated Delivery Culture",
    description:
      "Our engineers work inside your tools, follow your methodology, and communicate as part of your team — not as outsiders.",
  },
  {
    title: "Quality Built In",
    description:
      "From code review standards to automated testing pipelines, quality assurance is embedded in every engagement.",
  },
];

/* ─── Page ─── */

const Technologies = () => (
  <PageShell>
    {/* Hero */}
    <PageHero
      label="Technologies"
      title="Technical depth across modern delivery"
      subtitle="Talent and teams across the technology domains that matter most to your product and platform execution."
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="text-base px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
          >
            Request Talent <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/services">
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 h-12 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            View Service Models
          </Button>
        </Link>
      </motion.div>
    </PageHero>

    {/* Capability Groups with Tech Clusters */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="section-label">Capabilities</span>
          <h2 className="section-title mb-5">
            Eight domains. One delivery standard.
          </h2>
          <p className="section-subtitle mx-auto">
            We deliver talent and teams across the core technology domains that
            drive modern product and platform execution.
          </p>
        </motion.div>

        <div className="space-y-5">
          {capabilities.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-7 md:p-8 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center flex-shrink-0 border border-primary/[0.06] group-hover:scale-105 transition-transform duration-300">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground mb-2 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1.5 rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Typical Roles */}
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-primary/[0.04] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="section-label">Roles We Provide</span>
          <h2 className="section-title mb-5">
            The talent you need, ready to deliver
          </h2>
          <p className="section-subtitle mx-auto">
            Pre-vetted professionals across engineering, cloud, data, security,
            enterprise applications, and delivery management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roleGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-7 rounded-xl border border-border bg-card"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/[0.1] to-accent/[0.05] flex items-center justify-center mb-5 border border-primary/[0.06]">
                <group.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-base font-display font-bold text-foreground mb-4 tracking-tight">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.roles.map((role) => (
                  <li key={role} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How This Supports Delivery */}
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full border border-secondary-foreground/[0.04] pointer-events-none hidden lg:block" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="section-label !text-accent">
            Technology × Delivery
          </span>
          <h2 className="text-3xl md:text-[2.75rem] md:leading-[1.15] font-display font-bold tracking-tight mb-5">
            Capability that drives outcomes
          </h2>
          <p className="text-secondary-foreground/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Deep technical expertise is the foundation — but delivery discipline
            is what turns capability into results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-7 rounded-xl bg-secondary-foreground/[0.04] border border-secondary-foreground/[0.06] hover:border-secondary-foreground/[0.12] hover:bg-secondary-foreground/[0.06] transition-all duration-300"
            >
              <h3 className="font-display font-bold text-sm mb-3 tracking-tight">
                {outcome.title}
              </h3>
              <p className="text-[13px] text-secondary-foreground/50 leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Get Started</span>
          <h2 className="section-title mb-6">
            Talk about your tech needs
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Tell us your stack, your challenges, and your goals — we'll match
            you with the right talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="text-base px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all"
              >
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/nearshore-portugal">
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                Nearshore from Portugal
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default Technologies;
