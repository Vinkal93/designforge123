import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import PageLayout from "@/components/common/PageLayout";
import SEO from "@/components/common/SEO";

const posts = [
  { title: "10 Branding Mistakes Small Businesses Make", excerpt: "Avoid these common pitfalls when building your brand from scratch.", date: "Dec 2024", readTime: "5 min" },
  { title: "Why Every Startup Needs a Pitch Deck", excerpt: "How a great pitch deck can be the difference between funded and ignored.", date: "Dec 2024", readTime: "7 min" },
  { title: "Choosing the Right Logo for Your Business", excerpt: "A practical guide to logo design that actually works.", date: "Nov 2024", readTime: "6 min" },
  { title: "Monthly Design Subscription vs Freelancer", excerpt: "Which model fits your business better? We break it down.", date: "Nov 2024", readTime: "8 min" },
  { title: "Website vs Mobile App: What Do You Really Need?", excerpt: "Decoding the choice every founder faces eventually.", date: "Oct 2024", readTime: "10 min" },
  { title: "Design Trends to Watch in 2025", excerpt: "From bold typography to AI-assisted design — what's hot.", date: "Oct 2024", readTime: "6 min" },
];

const Blog = () => (
  <PageLayout>
    <SEO
      title="Blog | DesignForge Insights"
      description="Design and business insights from the DesignForge team. Branding tips, design trends, and growth strategies."
      canonical="/blog"
    />

    <section className="py-16 border-b border-border bg-secondary/20">
      <div className="container px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
          DesignForge <span className="text-gradient-forge">Blog</span>
        </motion.h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Insights, tips, and strategies for building a stronger brand.</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime} read</span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              <p className="text-xs text-primary mt-4 group-hover:underline">Read more →</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Blog;
