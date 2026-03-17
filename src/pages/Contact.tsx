import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

const contactPoints = [
  { icon: Mail, label: "Email", value: "hello@komodo.dev" },
  { icon: MapPin, label: "Location", value: "Lisbon, Portugal" },
  { icon: Clock, label: "Timezone", value: "CET (UTC+1)" },
];

const Contact = () => (
  <PageShell>
    <PageHero
      label="Contact"
      title="Let's start a conversation"
      subtitle="Whether you need a single engineer or a full delivery team — we're here to help you find the right fit."
    />

    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Send us a message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">Name</Label>
                  <Input id="name" placeholder="Your full name" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">Company</Label>
                <Input id="company" placeholder="Your company name" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">How can we help?</Label>
                <Textarea id="message" placeholder="Tell us about your project or staffing needs..." rows={5} />
              </div>
              <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/25">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-6">Get in touch</h3>
            <div className="space-y-5 mb-10">
              {contactPoints.map((point) => (
                <div key={point.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/[0.06]">
                    <point.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{point.label}</p>
                    <p className="text-sm font-medium text-foreground">{point.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl border border-border bg-muted/50 h-48 flex items-center justify-center overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <div className="relative text-center">
                <MapPin className="h-6 w-6 text-primary/30 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Lisbon, Portugal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Contact;
