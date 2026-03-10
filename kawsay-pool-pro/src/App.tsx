import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JacuzzisPage from "./pages/JacuzzisPage";
import ServiciosPage from "./pages/ServiciosPage";
import EquiposPage from "./pages/EquiposPage";
import ContactoPage from "./pages/ContactoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const basename = import.meta.env.PROD ? "/kawsay-Pisinascas/" : "/";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jacuzzis" element={<JacuzzisPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/equipos" element={<EquiposPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
