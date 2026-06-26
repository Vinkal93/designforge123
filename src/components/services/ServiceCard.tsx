import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Check, ShoppingCart, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(service.id);

  const handleAdd = () => {
    addItem(service);
    toast.success(`${service.name} added to cart!`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      className="group relative bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-card transition-all duration-300 flex flex-col"
    >
      {/* Badges */}
      <div className="absolute -top-2 right-4 flex gap-2">
        {service.featured && (
          <span className="px-2 py-0.5 text-[10px] font-semibold bg-gradient-forge text-primary-foreground rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Featured
          </span>
        )}
        {service.popular && !service.featured && (
          <span className="px-2 py-0.5 text-[10px] font-semibold bg-accent text-accent-foreground rounded-full flex items-center gap-1">
            <Star className="w-3 h-3" /> Popular
          </span>
        )}
      </div>

      <div className="mb-3">
        <p className="text-xs text-muted-foreground mb-1">{service.category}</p>
        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{service.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
      </div>

      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-gradient-forge">₹{service.price.toLocaleString()}</span>
        {service.premiumPrice && (
          <span className="text-xs text-muted-foreground">up to ₹{service.premiumPrice.toLocaleString()}</span>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {service.deliveryDays} day{service.deliveryDays > 1 ? "s" : ""}
        </span>
        <span>•</span>
        <span>{service.revisions} revisions</span>
      </div>

      <ul className="space-y-1.5 mb-5 flex-1">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
            <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-auto">
        <Button
          variant={inCart ? "outline" : "forge"}
          size="sm"
          className="flex-1"
          onClick={handleAdd}
        >
          <ShoppingCart className="w-4 h-4" />
          {inCart ? "Added" : "Add to Cart"}
        </Button>
        <Link to={`/services/${service.categorySlug}`}>
          <Button variant="outline" size="sm">Details</Button>
        </Link>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
