import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const PriceCalculator = () => {
  const [projectType, setProjectType] = useState<string>("poster");
  const [quantity, setQuantity] = useState<number>(1);
  const [revisions, setRevisions] = useState<number>(1);
  const [urgency, setUrgency] = useState<string>("normal");
  const [extras, setExtras] = useState<string[]>([]);

  const projectTypes = [
    { id: "poster", name: "Poster / Banner", basePrice: 499 },
    { id: "social", name: "Social Media Post", basePrice: 299 },
    { id: "logo", name: "Logo Design", basePrice: 1999 },
    { id: "brandkit", name: "Brand Kit", basePrice: 4999 },
    { id: "brochure", name: "Brochure / Flyer", basePrice: 799 },
    { id: "packaging", name: "Packaging Design", basePrice: 2499 },
  ];

  const urgencyOptions = [
    { id: "normal", name: "Normal (5-7 days)", multiplier: 1 },
    { id: "fast", name: "Fast (2-3 days)", multiplier: 1.3 },
    { id: "urgent", name: "Urgent (24 hrs)", multiplier: 1.8 },
  ];

  const extraOptions = [
    { id: "source", name: "Source Files (PSD/AI)", price: 299 },
    { id: "print", name: "Print-Ready Files", price: 199 },
    { id: "mockup", name: "3D Mockup", price: 399 },
    { id: "animation", name: "Animation/GIF", price: 599 },
  ];

  const toggleExtra = (id: string) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const calculatedPrice = useMemo(() => {
    const selectedProject = projectTypes.find((p) => p.id === projectType);
    const selectedUrgency = urgencyOptions.find((u) => u.id === urgency);
    
    if (!selectedProject || !selectedUrgency) return 0;

    let base = selectedProject.basePrice * quantity;
    
    // Add revision cost (first 2 free)
    if (revisions > 2) {
      base += (revisions - 2) * 100;
    }

    // Apply urgency multiplier
    base *= selectedUrgency.multiplier;

    // Add extras
    const extrasTotal = extras.reduce((sum, extraId) => {
      const extra = extraOptions.find((e) => e.id === extraId);
      return sum + (extra?.price || 0);
    }, 0);

    return Math.round(base + extrasTotal);
  }, [projectType, quantity, revisions, urgency, extras]);

  return (
    <section id="calculator" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm">Custom Price Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="text-gradient-forge">Custom Design</span> Price
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your requirements and get an instant price estimate for your custom design project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Options */}
              <div className="space-y-6">
                {/* Project Type */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Project Type</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`p-3 rounded-lg text-left text-sm border transition-all ${
                          projectType === type.id
                            ? "bg-primary/20 border-primary text-foreground"
                            : "bg-secondary border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="block font-medium">{type.name}</span>
                        <span className="text-xs text-muted-foreground">₹{type.basePrice}+</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Quantity: <span className="text-primary">{quantity}</span>
                  </Label>
                  <Slider
                    value={[quantity]}
                    onValueChange={(v) => setQuantity(v[0])}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Revisions */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    Revisions: <span className="text-primary">{revisions}</span>
                    {revisions <= 2 && <span className="text-xs text-muted-foreground ml-2">(2 free included)</span>}
                  </Label>
                  <Slider
                    value={[revisions]}
                    onValueChange={(v) => setRevisions(v[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Urgency */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Delivery Speed</Label>
                  <div className="space-y-2">
                    {urgencyOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setUrgency(opt.id)}
                        className={`w-full p-3 rounded-lg text-left text-sm border transition-all flex items-center justify-between ${
                          urgency === opt.id
                            ? "bg-primary/20 border-primary text-foreground"
                            : "bg-secondary border-border hover:border-primary/50"
                        }`}
                      >
                        <span>{opt.name}</span>
                        {opt.multiplier > 1 && (
                          <span className="text-xs text-accent">+{Math.round((opt.multiplier - 1) * 100)}%</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Extras & Price */}
              <div className="space-y-6">
                {/* Extras */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Add-ons</Label>
                  <div className="space-y-2">
                    {extraOptions.map((extra) => (
                      <button
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`w-full p-3 rounded-lg text-left text-sm border transition-all flex items-center justify-between ${
                          extras.includes(extra.id)
                            ? "bg-primary/20 border-primary text-foreground"
                            : "bg-secondary border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                            extras.includes(extra.id) ? "bg-primary border-primary" : "border-border"
                          }`}>
                            {extras.includes(extra.id) && <Check className="w-3 h-3 text-primary-foreground" />}
                          </div>
                          <span>{extra.name}</span>
                        </div>
                        <span className="text-muted-foreground">+₹{extra.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Display */}
                <div className="mt-auto">
                  <div className="bg-gradient-card rounded-xl p-6 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Estimated Price</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl md:text-5xl font-bold text-gradient-forge">
                        ₹{calculatedPrice.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">onwards</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">
                      *Final price may vary based on complexity and specific requirements.
                    </p>
                    <Button variant="forge" className="w-full" size="lg">
                      <Sparkles className="w-4 h-4" />
                      Get Custom Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
