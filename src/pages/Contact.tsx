import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { quickWhatsApp } from "@/lib/whatsapp";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(20),
  message: z.string().trim().min(5).max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Please check the form");
      return;
    }
    const msg = `Hello DesignForge,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;
    quickWhatsApp(msg);
    toast.success("Opening WhatsApp...");
  };

  return (
    <PageLayout>
      <SEO
        title="Contact DesignForge | Get in Touch"
        description="Contact DesignForge for design and digital services. Email vinkal93041@gmail.com or call +91 91182 45636. We respond within 24 hours."
        canonical="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "DesignForge",
          telephone: "+91-9118245636",
          email: "vinkal93041@gmail.com",
          url: "https://designforge123.lovable.app",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
        }}
      />

      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient-forge">Touch</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Let's discuss your project. We typically reply within 24 hours.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <a href="mailto:vinkal93041@gmail.com" className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
              <div><p className="text-xs text-muted-foreground">Email us</p><p className="font-medium">vinkal93041@gmail.com</p></div>
            </a>
            <a href="tel:+919118245636" className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
              <div><p className="text-xs text-muted-foreground">Call us</p><p className="font-medium">+91 91182 45636</p></div>
            </a>
            <button onClick={() => quickWhatsApp("Hello DesignForge!")} className="w-full flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-green-500/40 transition-all text-left">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center"><MessageCircle className="w-5 h-5 text-green-500" /></div>
              <div><p className="text-xs text-muted-foreground">WhatsApp</p><p className="font-medium">Chat instantly</p></div>
            </button>
            <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
              <div><p className="text-xs text-muted-foreground">Location</p><p className="font-medium">India — Remote service worldwide</p></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 bg-card border border-border rounded-2xl space-y-4">
            <h2 className="text-xl font-bold mb-2">Send a message</h2>
            <div><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} /></div>
            <div><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={120} /></div>
            <div><Label>Phone *</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength={20} /></div>
            <div><Label>Message *</Label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} rows={4} /></div>
            <Button type="submit" variant="forge" className="w-full"><Send className="w-4 h-4" /> Send via WhatsApp</Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
