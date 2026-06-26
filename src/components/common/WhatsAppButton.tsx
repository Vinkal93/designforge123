import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { quickWhatsApp } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => quickWhatsApp("Hello DesignForge! I'm interested in your services.")}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 group-hover:opacity-50" />
    </motion.button>
  );
};

export default WhatsAppButton;
