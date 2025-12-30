import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const CancellationRefund = () => {
  return (
    <>
      <Helmet>
        <title>Cancellation and Refund | DesignForge</title>
        <meta name="description" content="DesignForge Cancellation and Refund Policy - Understanding our refund and cancellation terms." />
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
                <RotateCcw className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">Cancellation and Refund</h1>
            </div>

            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">1. Cancellation Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may cancel your project at any time by contacting us. However, the refund amount 
                  will depend on the work completed at the time of cancellation.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">2. Refund Conditions</h2>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• <strong>Before work starts:</strong> Full refund of advance payment</li>
                  <li>• <strong>During initial concepts:</strong> 50% refund of advance payment</li>
                  <li>• <strong>After approval of concepts:</strong> No refund applicable</li>
                  <li>• <strong>Completed projects:</strong> No refund after final delivery</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">3. Monthly Plans</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Monthly subscription plans can be cancelled before the next billing cycle. 
                  No refunds will be provided for the current month. Unused designs do not carry 
                  over to the next month.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">4. Full-Time/Salary Model</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For salary-based hiring, a 15-day notice period is required for termination. 
                  Payment for work completed during the notice period is non-refundable.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">5. Refund Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Approved refunds will be processed within 7-10 business days. Refunds will be 
                  credited to the original payment method used during the transaction.
                </p>
              </section>

              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For cancellation requests or refund inquiries, please contact us at{" "}
                  <a href="mailto:vinkal93041@gmail.com" className="text-primary hover:underline">
                    vinkal93041@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+919118245636" className="text-primary hover:underline">
                    +91 91182 45636
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

export default CancellationRefund;
