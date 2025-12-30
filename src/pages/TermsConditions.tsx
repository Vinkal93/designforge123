import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | DesignForge</title>
        <meta name="description" content="DesignForge Terms and Conditions - Understanding your rights and responsibilities when using our design services." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="py-6 border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
          <div className="container px-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="container px-4 py-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-forge flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
            </div>

            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using DesignForge services, you accept and agree to be bound by these 
                  Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DesignForge provides graphic design services including but not limited to logo design, 
                  social media graphics, banners, posters, and brand identity design. The scope of each 
                  project will be defined in the project agreement.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">3. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  50% advance payment is required before project commencement. The remaining 50% is due 
                  upon project completion before final files are delivered. Payment can be made via UPI, 
                  Bank Transfer, or PayPal.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">4. Revisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The number of revisions included depends on the selected package. Additional revisions 
                  beyond the package limit may incur extra charges. Major scope changes may require a 
                  revised quote.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, you receive commercial rights to use the final approved designs. 
                  DesignForge retains the right to showcase completed work in portfolio and marketing materials.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">6. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, contact us at{" "}
                  <a href="mailto:vinkal93041@gmail.com" className="text-primary hover:underline">
                    vinkal93041@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default TermsConditions;
