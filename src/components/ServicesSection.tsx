import { Droplets, Wrench, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Construcción de Piscinas",
    desc: "Piscinas a medida con los mejores materiales y acabados premium para tu hogar.",
  },
  {
    icon: Sparkles,
    title: "Jacuzzis y Spa",
    desc: "Diseño e instalación de jacuzzis con sistema de hidromasaje de alta gama.",
  },
  {
    icon: Wrench,
    title: "Equipos y Accesorios",
    desc: "Bombas, filtros, iluminación LED, calentadores y todo para tu piscina.",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento",
    desc: "Servicio integral de limpieza, tratamiento químico y cuidado periódico.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-accent mx-auto mb-4" />
          <p className="font-body text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Qué hacemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Soluciones completas para la construcción, instalación y cuidado de tu piscina o jacuzzi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 md:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/30 hover:border-primary/15 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 md:mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            Ver todos los servicios
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
