import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import electrobomba from "@/assets/electrobomba.webp";
import filtro from "@/assets/filtro.webp";
import cascada from "@/assets/cascada.webp";
import piscinaLed from "@/assets/piscina-led.webp";
import transformador from "@/assets/transformador.webp";
import monitorVoltaje from "@/assets/monitor-voltaje.webp";
import panelArranque from "@/assets/panel de arranque.webp";
import desnatador from "@/assets/desnatador.webp";
import { Link } from "react-router-dom";

const featuredEquipos = [
  {
    img: electrobomba,
    title: "Electrobomba de Alto Rendimiento",
    desc: "Potencia y eficiencia para la recirculación del agua.",
    features: ["Silenciosa", "Autocebante"]
  },
  {
    img: filtro,
    title: "Filtro de Arena Profesional",
    desc: "Filtración profunda para un agua siempre cristalina.",
    features: ["Válvula multi-vía", "Resistente UV"]
  },
  {
    img: cascada,
    title: "Cascada Decorativa",
    desc: "Elegancia y relajación con el sonido natural del agua.",
    features: ["Acero inoxidable", "Diseño moderno"]
  },
  {
    img: piscinaLed,
    title: "Reflector Subacuático LED",
    desc: "Transforma tu piscina con iluminación de alta intensidad.",
    features: ["Colores RGB", "Bajo consumo"]
  }
];

const EquiposSection = () => {
  return (
    <section id="productos-inicio" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
              Calidad Garantizada
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Equipos de Tecnología <span className="text-primary italic">Avanzada</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/equipos"
              className="inline-flex items-center gap-2 font-body text-sm font-bold text-primary hover:text-accent transition-colors group"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredEquipos.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group border border-border/50"
            >
              <div className="aspect-square overflow-hidden bg-secondary/30 flex items-center justify-center p-6">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {e.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-4 line-clamp-2">
                  {e.desc}
                </p>
                <div className="flex flex-col gap-2">
                  {e.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span className="font-body text-[10px] font-medium text-foreground/80 uppercase tracking-wider">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquiposSection;
