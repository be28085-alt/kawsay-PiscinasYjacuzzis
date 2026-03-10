import heroImg from "@/assets/pool-4.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Piscina iluminada de noche"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] pattern-dots" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="line-accent mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          <p className="font-body text-pool-glow text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Kawsay Piscinas & Jacuzzis
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6">
            Creamos el oasis
            <span className="block">
              que siempre{" "}
              <em className="font-display italic text-pool-glow">soñaste</em>
            </span>
          </h1>

          <p className="font-body text-primary-foreground/70 text-sm md:text-lg leading-relaxed mb-10 max-w-md">
            Diseño, construcción y mantenimiento de piscinas y jacuzzis con los más altos estándares de calidad en Colombia.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/piscinas"
              className="bg-gradient-water text-primary-foreground px-7 py-3.5 rounded-xl font-body font-semibold text-sm hover:shadow-water transition-all duration-300 hover:-translate-y-0.5"
            >
              Ver proyectos
            </Link>
            <Link
              to="/contacto"
              className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-xl font-body font-semibold text-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 50L60 45C120 40 240 30 360 28C480 26 600 32 720 40C840 48 960 58 1080 58C1200 58 1320 48 1380 43L1440 38V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;