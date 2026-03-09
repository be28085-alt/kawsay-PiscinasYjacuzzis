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
    <section id="servicios" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14 md:mb-18"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="line-accent mx-auto mb-5" />
          <p className="font-body text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Qué hacemos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Nuestros Servicios
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Soluciones completas para la construcción, instalación y cuidado de tu piscina o jacuzzi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/30 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="w-13 h-13 md:w-14 md:h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
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