import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight, Gift, Sparkles } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { calculateDiscount, getNextDiscountHint } from "@/lib/discount";
import { Button } from "@/components/ui/button";
import CheckoutDialog from "./CheckoutDialog";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, subtotal } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const discount = calculateDiscount(items);
  const final = subtotal - discount.discountAmount;
  const hint = getNextDiscountHint(totalItems);
  const estDelivery = items.length > 0 ? Math.max(...items.map((i) => i.service.deliveryDays)) : 0;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] bg-background/60 backdrop-blur-md"
              onClick={closeCart}
            />
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[90] w-full max-w-md bg-card border-l border-border shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold">Your Cart ({totalItems})</h2>
                </div>
                <button onClick={closeCart} className="p-2 rounded-lg hover:bg-secondary">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Discount hint */}
              {hint && (
                <div className="mx-5 mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-2">
                  <Gift className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-xs text-foreground">{hint}</p>
                </div>
              )}
              {discount.freeItemId && (
                <div className="mx-5 mt-4 p-3 rounded-lg bg-gradient-forge/20 border border-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <p className="text-xs font-medium">{discount.rule}</p>
                </div>
              )}

              {/* Items */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-3">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                  </div>
                ) : (
                  items.map((item) => {
                    const isFree = discount.freeItemId === item.service.id;
                    return (
                      <div key={item.service.id} className={`p-3 rounded-lg border ${isFree ? "border-primary bg-primary/5" : "border-border bg-secondary/30"}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{item.service.name}</p>
                            <p className="text-xs text-muted-foreground">{item.service.category}</p>
                          </div>
                          <button onClick={() => removeItem(item.service.id)} className="p-1 hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.service.id, item.quantity - 1)}
                              className="w-7 h-7 rounded bg-secondary hover:bg-secondary/80 flex items-center justify-center"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.service.id, item.quantity + 1)}
                              className="w-7 h-7 rounded bg-secondary hover:bg-secondary/80 flex items-center justify-center"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-semibold text-sm">
                            {isFree ? <span className="text-primary">FREE</span> : `₹${(item.service.price * item.quantity).toLocaleString()}`}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Summary */}
              {items.length > 0 && (
                <div className="border-t border-border p-5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  {discount.discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-primary">
                      <span>Discount</span>
                      <span>-₹{discount.discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Est. Delivery</span>
                    <span>{estDelivery} days</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-gradient-forge">₹{final.toLocaleString()}</span>
                  </div>
                  <Button variant="forge" size="lg" className="w-full mt-3" onClick={() => setCheckoutOpen(true)}>
                    Proceed to Checkout <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      <CheckoutDialog isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
};

export default CartDrawer;
