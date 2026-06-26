import { motion } from "framer-motion";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does the checkout process work?", a: "Add services to cart → fill customer info → click 'Talk Now' → WhatsApp opens with your full order. We'll respond, confirm, and start your project after 50% advance." },
  { q: "What is the smart discount system?", a: "2 services = 5% off, 3 = 10%, 4 = 15%, and 5+ services get the cheapest one FREE. The discount auto-applies in your cart." },
  { q: "What are your payment terms?", a: "50% advance to start the project, 50% before final file delivery. We accept UPI, Bank Transfer, and PayPal." },
  { q: "How many revisions do I get?", a: "Each service includes 2-3 revisions based on the package. Additional revisions can be added at a nominal cost." },
  { q: "What file formats do you deliver?", a: "PNG, JPG, PDF, AI, PSD, CDR, SVG, MP4 — whatever your project needs. Source files included with most packages." },
  { q: "What is the delivery time?", a: "Most design work: 1-5 days. Websites: 15-25 days. Mobile apps: 30-45 days. Express delivery is available for urgent projects." },
  { q: "Do you offer monthly subscriptions?", a: "Yes! Monthly plans start at ₹3,499 with 8 designs/month. Perfect for brands needing consistent design support." },
  { q: "Can I hire a full-time designer?", a: "Absolutely. We offer part-time (₹12-18k/month), full-time (₹20-35k/month), and dedicated creative partner (₹40-70k/month) models." },
  { q: "Do you sign NDA?", a: "Yes, NDA is available for monthly and salary clients on request. Your project details remain confidential." },
  { q: "Can I get a refund?", a: "Full refund before work starts. 50% refund during initial concepts. No refund after concept approval. See our Cancellation & Refund policy." },
];

const FAQ = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageLayout>
      <SEO
        title="FAQ | DesignForge — Frequently Asked Questions"
        description="Answers to common questions about DesignForge services, pricing, delivery, revisions, refunds and more."
        canonical="/faq"
        jsonLd={jsonLd}
      />

      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-forge">Questions</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to know before getting started.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5">
                <AccordionTrigger className="text-left font-medium hover:text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
