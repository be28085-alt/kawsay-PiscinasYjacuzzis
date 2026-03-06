import { Droplets, Wrench, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Droplets,
    title: "Construcción de Piscinas",
    desc: "Piscinas a medida con los mejores materiales y acabados premium.",
  },
  {
    icon: Sparkles,
    title: "Jacuzzis y Spa",
    desc: "Diseño e instalación de jacuzzis con sistema de hidromasaje.",
  },
  {
    icon: Wrench,
    title: "Equipos y Accesorios",
    desc: "Bombas, filtros, iluminación LED, calentadores y más.",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento",
    desc: "Servicio integral de limpieza y mantenimiento periódico.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Qué hacemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-water transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
