import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PageShell from "@/components/PageShell";

const NotFound = () => (
  <PageShell>
    <SEOHead
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Return to the Komodo Consulting homepage."
      noindex
    />
    <section className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      <div className="container relative text-center max-w-md mx-auto py-24">
        <p className="text-8xl font-display font-extrabold text-primary/20 mb-6">404</p>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="text-base px-8 h-12">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </section>
  </PageShell>
);

export default NotFound;
