import { motion } from "framer-motion";
import { Award, Users, Sparkles, Target, Heart, Zap } from "lucide-react";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";

const values = [
  { icon: Target, title: "Quality First", desc: "Every pixel matters. We craft designs that elevate your brand." },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround without compromising on quality." },
  { icon: Heart, title: "Customer Focus", desc: "Your success is our success. We listen, iterate, and deliver." },
  { icon: Sparkles, title: "Creative Excellence", desc: "Unique, modern designs that stand out in the market." },
];

const About = () => (
  <PageLayout>
    <SEO
      title="About DesignForge | Creative Design Agency"
      description="DesignForge is a creative design agency by Vinkal Prajapati offering 60+ services — branding, marketing, web, mobile apps and more. Trusted by startups, businesses & agencies."
      canonical="/about"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DesignForge",
        url: "https://designforge123.lovable.app",
        founder: { "@type": "Person", name: "Vinkal Prajapati" },
        contactPoint: { "@type": "ContactPoint", telephone: "+91-9118245636", email: "vinkal93041@gmail.com", contactType: "Customer Service" },
      }}
    />

    <section className="py-20 border-b border-border bg-secondary/20">
      <div className="container px-4 text-center max-w-3xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-gradient-forge">DesignForge</span>
        </motion.h1>
        <p className="text-lg text-muted-foreground">
          Where ideas become brand assets. A creative agency built to help businesses look professional, communicate clearly, and grow faster.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { num: "500+", label: "Projects Delivered" },
            { num: "200+", label: "Happy Clients" },
            { num: "60+", label: "Services Offered" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 bg-card border border-border rounded-2xl">
              <p className="text-4xl font-bold text-gradient-forge mb-2">{s.num}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h2>
        <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
          <p>DesignForge started with a simple belief: every business — big or small — deserves world-class design. We saw too many founders struggling with inconsistent branding, expensive agencies, and unreliable freelancers.</p>
          <p>So we built a one-stop creative partner. From your first business card to a full-fledged mobile app, we handle it all with transparent pricing and predictable delivery.</p>
          <p>Founded by <span className="text-foreground font-medium">Vinkal Prajapati</span>, DesignForge is now trusted by startups, coaching institutes, e-commerce stores, and growing brands across India.</p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-6 bg-card border border-border rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
