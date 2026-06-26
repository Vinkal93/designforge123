import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, CheckCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { buildWhatsAppMessage, openWhatsApp, type CustomerInfo } from "@/lib/whatsapp";
import { calculateDiscount } from "@/lib/discount";
import { toast } from "sonner";

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(80),
  phone: z.string().trim().min(7, "Phone required").max(20),
  email: z.string().trim().email("Invalid email").max(120),
  companyName: z.string().trim().max(120).optional(),
  businessType: z.string().trim().max(80).optional(),
  deadline: z.string().trim().max(40).optional(),
  budget: z.string().trim().max(40).optional(),
  description: z.string().trim().max(2000).optional(),
  referenceWebsite: z.string().trim().max(200).optional(),
});

const CheckoutDialog = ({ isOpen, onClose }: CheckoutDialogProps) => {
  const { items, subtotal, clearCart, closeCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<CustomerInfo>({
    name: "", phone: "", email: "", companyName: "", businessType: "", deadline: "", budget: "", description: "", referenceWebsite: "",
  });

  const discount = calculateDiscount(items);
  const final = subtotal - discount.discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Please check the form");
      return;
    }
    const msg = buildWhatsAppMessage(items, parsed.data);
    openWhatsApp(msg);
    setSubmitted(true);
    toast.success("Opening WhatsApp...");
    setTimeout(() => {
      setSubmitted(false);
      clearCart();
      closeCart();
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-card border border-border rounded-2xl shadow-2xl"
          >
            <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-card z-10">
              <h2 className="text-xl font-bold">Checkout via WhatsApp</h2>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary">
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Order sent to WhatsApp!</h3>
                <p className="text-muted-foreground text-sm">Complete the message to confirm your order.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                {/* Order Summary */}
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm font-semibold mb-2">Order Summary ({items.length} items)</p>
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  {discount.discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-primary">
                      <span>Discount</span><span>-₹{discount.discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border mt-2">
                    <span>Total</span><span className="text-gradient-forge">₹{final.toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <Label>Name *</Label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={80} />
                  </div>
                  <div>
                    <Label>Phone *</Label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required maxLength={20} />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Email *</Label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={120} />
                  </div>
                  <div>
                    <Label>Company Name</Label>
                    <Input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} maxLength={120} />
                  </div>
                  <div>
                    <Label>Business Type</Label>
                    <Input value={form.businessType} onChange={(e) => setForm({ ...form, businessType: e.target.value })} maxLength={80} placeholder="e.g. Retail, IT, Coaching" />
                  </div>
                  <div>
                    <Label>Deadline</Label>
                    <Input value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} maxLength={40} placeholder="e.g. 15 Jan 2026" />
                  </div>
                  <div>
                    <Label>Budget Range</Label>
                    <Input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} maxLength={40} placeholder="e.g. ₹10k - ₹20k" />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Reference Website</Label>
                    <Input value={form.referenceWebsite} onChange={(e) => setForm({ ...form, referenceWebsite: e.target.value })} maxLength={200} placeholder="https://..." />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Project Description</Label>
                    <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} maxLength={2000} rows={3} placeholder="Tell us about your project..." />
                  </div>
                </div>

                <Button type="submit" variant="forge" size="lg" className="w-full">
                  <MessageCircle className="w-4 h-4" />
                  Talk Now via WhatsApp
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Clicking will open WhatsApp with your order summary pre-filled.
                </p>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutDialog;
