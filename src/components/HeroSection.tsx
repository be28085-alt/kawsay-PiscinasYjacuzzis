import heroImg from "@/assets/pool-4.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Kawsay Piscinas - Construcción de piscinas iluminadas en Cundinamarca Colombia"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] pattern-dots" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-32">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            className="line-accent mb-6"
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="font-body text-pool-glow text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
          >
            CONSTRUCCIÓN DE PISCINAS EN CUNDINAMARCA
          </motion.p>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6"
          >
            Kawsay Piscinas
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 md:mt-4 font-body font-medium text-primary-foreground/90">
              Creamos el oasis que siempre{" "}
              <em className="font-display font-bold italic text-pool-glow">soñaste</em>
            </span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="font-body text-primary-foreground/70 text-sm md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Especialistas en diseño, construcción y mantenimiento de piscinas de concreto y jacuzzis de lujo en La Mesa, Cundinamarca y toda Colombia.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() =>
                document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative bg-gradient-water text-primary-foreground px-8 py-4 rounded-xl font-body font-bold text-sm md:hover:shadow-water transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Ver proyectos</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full md:group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <Link
              to="/contacto"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-xl font-body font-bold text-sm hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300 backdrop-blur-sm"
            >
              Contáctanos
            </Link>
          </motion.div>
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