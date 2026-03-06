import heroImg from "@/assets/pool-4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Piscina iluminada de noche"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-pool-glow text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Kawsay Piscinas y Jacuzzis
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Creamos el oasis que siempre soñaste
          </h1>
          <p className="font-body text-primary-foreground/80 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-lg">
            Diseño, construcción y mantenimiento de piscinas y jacuzzis con los más altos estándares de calidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/piscinas"
              className="bg-gradient-water text-primary-foreground px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-water"
            >
              Ver proyectos
            </Link>
            <Link
              to="/contacto"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 55C96 50 192 40 288 38C384 36 480 42 576 50C672 58 768 68 864 68C960 68 1056 58 1152 50C1248 42 1344 36 1392 33L1440 30V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V60Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
