import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import electrobomba from "@/assets/electrobomba.webp";
import filtro from "@/assets/filtro.webp";
import cascada from "@/assets/cascada.webp";
import piscinaLed from "@/assets/piscina-led.webp";
import { Link } from "react-router-dom";

const featuredEquipos = [
  {
    img: electrobomba,
    title: "Electrobomba de Alto Rendimiento",
    desc: "Potencia y eficiencia para la recirculación del agua. Diseñada para ofrecer máximo caudal con mínimo consumo energético.",
    features: ["Silenciosa", "Autocebante", "Ahorro energético"]
  },
  {
    img: filtro,
    title: "Filtro de Arena Profesional",
    desc: "Filtración profunda para un agua siempre cristalina. Elimina partículas y mantiene el agua en condiciones óptimas.",
    features: ["Válvula multi-vía", "Resistente UV", "Alta durabilidad"]
  },
  {
    img: cascada,
    title: "Cascada Decorativa",
    desc: "Elegancia y relajación con el sonido natural del agua. Ideal para crear un ambiente de spa en tu piscina.",
    features: ["Acero inoxidable", "Diseño moderno", "Fácil instalación"]
  },
  {
    img: piscinaLed,
    title: "Reflector Subacuático LED",
    desc: "Transforma tu piscina con iluminación de alta intensidad. Efectos de luz que crean atmósferas únicas.",
    features: ["Colores RGB", "Bajo consumo", "Larga vida útil"]
  }
];

const EquiposSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="productos-inicio" className="py-12 md:py-32 bg-gradient-to-b from-secondary/20 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -20 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.4 : 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-body text-primary text-xs md:text-sm font-semibold tracking-[0.15em] uppercase mb-2 md:mb-3">
              Calidad Garantizada
            </p>
            <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground">
              Equipos de Tecnología <span className="text-primary italic">Avanzada</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 20 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0.4 : 0.6 }}
          >
            <Link
              to="/equipos"
              className="inline-flex items-center gap-2 font-body text-xs md:text-sm font-bold text-primary hover:text-accent transition-colors group"
            >
              Ver catálogo completo
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 md:group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredEquipos.map((e, i) => {
            const hasAnimation = i === 0;

            return (
              <motion.div
                key={i}
                initial={hasAnimation ? { opacity: 0, y: 30 } : false}
                whileInView={hasAnimation ? { opacity: 1, y: 0 } : undefined}
                viewport={hasAnimation ? { once: true, margin: "-50px" } : undefined}
                transition={hasAnimation ? { duration: 0.6, ease: "easeOut" } : undefined}
                className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-sm md:shadow-card transition-all duration-200 md:duration-300 group border border-border/30"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/50 flex items-center justify-center p-6 md:p-8">
                  <img
                    src={e.img}
                    alt={`${e.title} - Equipos Kawsay Piscinas`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                    {e.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                    {e.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {e.features.map((f, fi) => (
                      <div key={fi} className="flex items-center gap-1 md:gap-1.5 bg-primary/5 rounded-full px-2 md:px-3 py-0.5 md:py-1">
                        <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                        <span className="font-body text-[10px] md:text-xs font-medium text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EquiposSection;