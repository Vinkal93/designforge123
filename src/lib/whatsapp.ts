import type { CartItem } from "@/contexts/CartContext";
import { calculateDiscount } from "@/lib/discount";

export const WHATSAPP_NUMBER = "919118245636";

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  companyName?: string;
  businessType?: string;
  deadline?: string;
  budget?: string;
  description?: string;
  referenceWebsite?: string;
}

export function buildWhatsAppMessage(items: CartItem[], customer: CustomerInfo): string {
  const discount = calculateDiscount(items);
  const subtotal = items.reduce((s, i) => s + i.service.price * i.quantity, 0);
  const final = subtotal - discount.discountAmount;

  const lines: string[] = [];
  lines.push("Hello DesignForge Team,");
  lines.push("");
  lines.push("I would like to order the following services:");
  lines.push("");

  items.forEach((item, idx) => {
    const isFree = discount.freeItemId === item.service.id;
    lines.push(
      `${idx + 1}. ${item.service.name} x${item.quantity} — ₹${(item.service.price * item.quantity).toLocaleString()}${isFree ? " (FREE)" : ""}`
    );
  });

  lines.push("");
  lines.push(`Subtotal: ₹${subtotal.toLocaleString()}`);
  if (discount.discountAmount > 0) {
    lines.push(`Discount (${discount.rule}): -₹${discount.discountAmount.toLocaleString()}`);
  }
  lines.push(`*Final Amount: ₹${final.toLocaleString()}*`);
  lines.push("");
  lines.push("--- Customer Details ---");
  lines.push(`Name: ${customer.name}`);
  lines.push(`Phone: ${customer.phone}`);
  lines.push(`Email: ${customer.email}`);
  if (customer.companyName) lines.push(`Company: ${customer.companyName}`);
  if (customer.businessType) lines.push(`Business Type: ${customer.businessType}`);
  if (customer.deadline) lines.push(`Deadline: ${customer.deadline}`);
  if (customer.budget) lines.push(`Budget: ${customer.budget}`);
  if (customer.referenceWebsite) lines.push(`Reference: ${customer.referenceWebsite}`);
  if (customer.description) {
    lines.push("");
    lines.push("Requirements:");
    lines.push(customer.description);
  }
  lines.push("");
  lines.push("Please contact me to discuss further. Thank you!");

  return lines.join("\n");
}

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export function quickWhatsApp(text: string) {
  openWhatsApp(text);
}
