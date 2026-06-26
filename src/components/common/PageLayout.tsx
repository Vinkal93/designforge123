import { ReactNode, useState } from "react";
import Navbar from "@/components/pricing/Navbar";
import Footer from "@/components/pricing/Footer";
import Sidebar from "@/components/pricing/Sidebar";
import CartDrawer from "@/components/cart/CartDrawer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { useCart } from "@/contexts/CartContext";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { openCart } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <CartDrawer />
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        onQuoteClick={() => window.open("https://forms.gle/KWdeXmA8D4mgWtXX7", "_blank")}
        onCartClick={openCart}
      />
      <main className="pt-16 flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;
