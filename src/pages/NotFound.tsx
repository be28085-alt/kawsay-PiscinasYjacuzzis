import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-kawsay.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 max-w-lg"
      >
        <img src={logo} alt="Kawsay" className="h-16 md:h-20 mx-auto mb-10" />

        <h1 className="font-display text-8xl md:text-9xl font-bold text-primary/20 mb-[-2rem] md:mb-[-3rem]">
          404
        </h1>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Página no encontrada
        </h2>

        <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-10">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
          ¿Qué tal si regresamos al inicio?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-body font-semibold hover:bg-primary/90 transition-all hover:shadow-lg group"
          >
            <Home size={18} />
            Ir al inicio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-8 py-4 rounded-xl font-body font-semibold hover:bg-secondary/80 transition-all group border border-border/50"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Volver atrás
          </button>
        </div>
      </motion.div>

      {/* Underwater reflection effect */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />
    </div>
  );
};

export default NotFound;
