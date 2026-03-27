import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-card shadow-elevated border border-border/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/573042573555?text=Hola%2C%20vengo%20desde%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 relative group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current text-white" />
        <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-card border border-border shadow-sm text-foreground text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿En qué podemos ayudarte?
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white/50"></span>
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingActions;
