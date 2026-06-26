import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";
import { z } from "zod";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { quickWhatsApp } from "@/lib/whatsapp";
import { toast } from "sonner";

const openings = [
  { title: "Graphic Designer", type: "Full-time", location: "Remote", level: "1-3 years", skills: ["Photoshop", "Illustrator", "Figma"] },
  { title: "UI/UX Designer", type: "Full-time", location: "Remote", level: "2-4 years", skills: ["Figma", "Wireframing", "User research"] },
  { title: "Frontend Developer", type: "Full-time", location: "Remote", level: "2-4 years", skills: ["React", "TypeScript", "Tailwind"] },
  { title: "Design Intern", type: "Internship", location: "Remote", level: "Fresher", skills: ["Photoshop", "Creativity"] },
];

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(20),
  position: z.string().trim().min(2).max(80),
  experience: z.string().trim().max(40).optional(),
  expectedSalary: z.string().trim().max(40).optional(),
  portfolio: z.string().trim().max(200).optional(),
  message: z.string().trim().max(1000).optional(),
});

const Careers = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", experience: "", expectedSalary: "", portfolio: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.errors[0]?.message || "Please check the form"); return; }
    const msg = `Hello DesignForge,\n\nJob Application\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPosition: ${form.position}\nExperience: ${form.experience}\nExpected Salary: ${form.expectedSalary}\nPortfolio: ${form.portfolio}\n\nMessage:\n${form.message}`;
    quickWhatsApp(msg);
    toast.success("Opening WhatsApp...");
  };

  return (
    <PageLayout>
      <SEO
        title="Careers | Join DesignForge Team"
        description="Join DesignForge as a designer, developer or intern. Remote-first culture, exciting projects, growth opportunities."
        canonical="/careers"
      />

      <section className="py-16 border-b border-border bg-secondary/20">
        <div className="container px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-gradient-forge">DesignForge</span> Team
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Build, design, and grow with us. Remote-first, output-driven culture.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {openings.map((o) => (
              <div key={o.title} className="p-5 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{o.title}</h3>
                    <p className="text-xs text-primary">{o.level}</p>
                  </div>
                  <Briefcase className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{o.type}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{o.location}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {o.skills.map((s) => <span key={s} className="text-[10px] px-2 py-0.5 bg-secondary rounded-full">{s}</span>)}
                </div>
                <Button variant="forgeOutline" size="sm" className="w-full mt-4" onClick={() => setForm({ ...form, position: o.title })}>Apply Now</Button>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-card border border-border rounded-2xl space-y-4">
            <h2 className="text-xl font-bold">Apply Online</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} /></div>
              <div><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={120} /></div>
              <div><Label>Phone *</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength={20} /></div>
              <div><Label>Position *</Label><Input value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} required maxLength={80} /></div>
              <div><Label>Experience</Label><Input value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} maxLength={40} placeholder="e.g. 2 years" /></div>
              <div><Label>Expected Salary</Label><Input value={form.expectedSalary} onChange={(e) => setForm({ ...form, expectedSalary: e.target.value })} maxLength={40} placeholder="e.g. ₹25,000/month" /></div>
              <div className="md:col-span-2"><Label>Portfolio URL</Label><Input value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} maxLength={200} placeholder="https://..." /></div>
              <div className="md:col-span-2"><Label>Cover Note</Label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={3} /></div>
            </div>
            <Button type="submit" variant="forge" className="w-full"><Send className="w-4 h-4" /> Submit Application</Button>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
