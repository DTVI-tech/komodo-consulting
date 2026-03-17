import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Database, TestTube, Shield, Server, Headphones, Kanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

const areas = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Full-stack, frontend, backend, and mobile engineering across modern frameworks and languages.",
    technologies: ["React", "Node.js", "TypeScript", "Python", "Java", ".NET", "Go", "Swift", "Kotlin"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure automation, CI/CD pipelines, container orchestration, and cloud-native architecture.",
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "ArgoCD"],
  },
  {
    icon: Database,
    title: "Data & AI",
    description: "Data engineering, machine learning, analytics pipelines, and AI-powered product features.",
    technologies: ["Python", "Spark", "Airflow", "TensorFlow", "PyTorch", "dbt", "Snowflake", "BigQuery"],
  },
  {
    icon: TestTube,
    title: "QA & Test Automation",
    description: "End-to-end quality assurance with automated testing frameworks and performance testing.",
    technologies: ["Selenium", "Cypress", "Playwright", "Jest", "k6", "Appium", "Postman", "JMeter"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Application security, penetration testing, compliance auditing, and secure development practices.",
    technologies: ["OWASP", "SOC 2", "ISO 27001", "SAST/DAST", "IAM", "Zero Trust", "SIEM"],
  },
  {
    icon: Server,
    title: "ERP & Business Apps",
    description: "Enterprise application development, CRM and ERP customization, and business process automation.",
    technologies: ["SAP", "Salesforce", "Microsoft Dynamics", "ServiceNow", "Oracle", "Workday"],
  },
  {
    icon: Headphones,
    title: "IT Support & Infrastructure",
    description: "Managed IT services, infrastructure monitoring, help desk operations, and system administration.",
    technologies: ["ServiceNow", "Jira SM", "Datadog", "PagerDuty", "Zabbix", "Ansible"],
  },
  {
    icon: Kanban,
    title: "Product & Project Delivery",
    description: "Technical product management, agile coaching, delivery leadership, and program management.",
    technologies: ["Jira", "Confluence", "Linear", "Notion", "Miro", "Productboard"],
  },
];

const Technologies = () => (
  <PageShell>
    <PageHero
      label="Technologies"
      title="Technical depth across modern delivery"
      subtitle="Talent and teams across the technology domains that matter most to your product and platform execution."
    />

    {/* Technology Areas */}
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative">
        <div className="space-y-5">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/15 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center flex-shrink-0 border border-primary/[0.06]">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
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
            Need talent in a specific technology?
          </h2>
          <p className="text-secondary-foreground/50 mb-10 text-base leading-relaxed">
            Tell us your stack and we'll match you with the right engineers.
          </p>
          <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
            Request Talent <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  </PageShell>
);

export default Technologies;
