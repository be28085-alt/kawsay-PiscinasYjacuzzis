import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import JacuzzisPage from "./pages/JacuzzisPage";
import ServiciosPage from "./pages/ServiciosPage";
import EquiposPage from "./pages/EquiposPage";
import ContactoPage from "./pages/ContactoPage";
import GeomembranasPage from "./pages/GeomembranasPage";
import NotFound from "./pages/NotFound";

import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./components/FloatingActions";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/jacuzzis" element={<JacuzzisPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/equipos" element={<EquiposPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/geomembranas" element={<GeomembranasPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <AnimatedRoutes />
        <FloatingActions />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;