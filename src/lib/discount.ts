import type { Service } from "@/data/services";

export interface DiscountResult {
  discountPercent: number;
  discountAmount: number;
  freeItemId: string | null;
  freeItemName: string | null;
  rule: string;
}

/**
 * Smart Discount Engine
 * 1 project: no discount
 * 2 projects: 5%
 * 3 projects: 10%
 * 4 projects: 15%
 * 5+ projects: cheapest service FREE
 */
export function calculateDiscount(items: { service: Service; quantity: number }[]): DiscountResult {
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.service.price * i.quantity, 0);

  if (totalItems <= 1) {
    return { discountPercent: 0, discountAmount: 0, freeItemId: null, freeItemName: null, rule: "Add more services for discounts!" };
  }
  if (totalItems === 2) {
    return { discountPercent: 5, discountAmount: Math.round(subtotal * 0.05), freeItemId: null, freeItemName: null, rule: "5% off on 2 services" };
  }
  if (totalItems === 3) {
    return { discountPercent: 10, discountAmount: Math.round(subtotal * 0.10), freeItemId: null, freeItemName: null, rule: "10% off on 3 services" };
  }
  if (totalItems === 4) {
    return { discountPercent: 15, discountAmount: Math.round(subtotal * 0.15), freeItemId: null, freeItemName: null, rule: "15% off on 4 services" };
  }
  // 5+: cheapest free
  const cheapest = [...items].sort((a, b) => a.service.price - b.service.price)[0];
  return {
    discountPercent: 0,
    discountAmount: cheapest.service.price,
    freeItemId: cheapest.service.id,
    freeItemName: cheapest.service.name,
    rule: `${cheapest.service.name} FREE on 5+ services`,
  };
}

export function getNextDiscountHint(totalItems: number): string | null {
  if (totalItems === 0) return "Add 2 services for 5% off";
  if (totalItems === 1) return "Add 1 more for 5% off";
  if (totalItems === 2) return "Add 1 more for 10% off";
  if (totalItems === 3) return "Add 1 more for 15% off";
  if (totalItems === 4) return "Add 1 more & get cheapest FREE!";
  return null;
}
