import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { CheckCircle2 } from "lucide-react";
import geomembrana1 from "@/assets/geomembrana-1.jpg";
import geomembrana2 from "@/assets/geomembrana-2.jpg";

import estilo1 from "@/assets/estilo-1.jpg";
import estilo2 from "@/assets/estilo-2.jpg";
import estilo3 from "@/assets/estilo-3.jpg";
import estilo4 from "@/assets/estilo-4.jpg";
import estilo9 from "@/assets/estilo-9.jpg";
import estilo10 from "@/assets/estilo-10.jpg";
import estilo11 from "@/assets/estilo-11.jpg";
import estilo12 from "@/assets/estilo-12.jpg";

const estilos = [
  {
    nombre: "Azul Turquesa Mosaico",
    imagen: estilo1,
  },
  {
    nombre: "Arena Claro Mosaico",
    imagen: estilo2,
  },
  {
    nombre: "Azul Rey Mosaico",
    imagen: estilo3,
  },
  {
    nombre: "Gris Oscuro Mosaico",
    imagen: estilo4,
  },
  {
    nombre: "Azul Aqua Sólido",
    imagen: estilo9,
  },
  {
    nombre: "Azul Cielo Sólido",
    imagen: estilo10,
  },
  {
    nombre: "Azul Rey Sólido",
    imagen: estilo11,
  },
  {
    nombre: "Azul Acero Sólido",
    imagen: estilo12,
  },
];

const piscinas = [
  {
    img: geomembrana1,
    title: "Piscina con Geomembrana Azul Mosaico",
    desc: "Piscina de diseño moderno con geomembrana europea en acabado azul mosaico. Equipada con chorros de agua decorativos, escalones integrados y acabados en piedra natural.",
    features: ["Azul mosaico", "Chorros de agua", "15 años garantía", "Piedra natural"],
  },
  {
    img: geomembrana2,
    title: "Piscina con Geomembrana en Construcción",
    desc: "Instalación profesional de geomembrana azul mosaico con escalones integrados. Acabado impermeable de alta resistencia, adaptable a cualquier diseño arquitectónico.",
    features: ["Instalación profesional", "Escalones integrados", "Alta resistencia", "Personalizable"],
  },
];

const GeomembranasSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* Sección de descripción + características */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Recubrimiento de alta calidad
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              ¿Qué son las Geomembranas?
            </h2>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
              Las geomembranas son recubrimientos impermeables de alta calidad utilizados en piscinas para
              garantizar durabilidad, estética y protección total contra filtraciones.
              Trabajamos con geomembranas europeas de alta resistencia que cuentan con hasta 15 años de garantía,
              ofreciendo acabados modernos y una instalación rápida y segura.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              { label: "Europeas de alta resistencia", icon: "EU" },
              { label: "Hasta 15 años de garantía", icon: "15 AÑOS " },
              { label: "Acabados modernos y elegantes", icon: "MODERNO" },
              { label: "Instalación rápida y segura", icon: "RÁPIDO" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/30 hover:border-primary/20 hover:-translate-y-1 text-center"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="font-display text-sm md:text-base font-semibold text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de piscinas - Estilo idéntico al de JacuzzisPage */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Proyectos
            </h3>
            <p className="font-body text-muted-foreground text-sm md:text-base">
              Piscinas terminadas con geomembranas de alta calidad.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {piscinas.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-12 items-center`}
              >
                <div className="w-full md:w-3/5 group">
                  <div className="relative overflow-hidden rounded-2xl shadow-card group-hover:shadow-elevated transition-shadow duration-500">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm md:text-[15px]">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.features.map((f, fi) => (
                      <span
                        key={fi}
                        className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/573042573555?text=Hola%2C%20me%20interesa%20una%20geomembrana"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors w-fit group/link"
                  >
                    Cotizar geomembrana
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel de Estilos - Infinito y Táctil, sin botones */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Estilos de Geomembranas
            </h3>
            <p className="font-body text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Explora nuestra variedad de diseños y texturas deslizando para encontrar el acabado
              perfecto que se adapte al estilo de tu proyecto.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {estilos.map((estilo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 pl-4 md:pl-6"
                >
                  <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-52 sm:h-60 overflow-hidden">
                      <img
                        src={estilo.imagen}
                        alt={estilo.nombre}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-5 text-center">
                      <h4 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {estilo.nombre}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de dots */}
          <div className="flex justify-center gap-2 mt-8">
            {estilos.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-border hover:bg-muted-foreground/50"
                  }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ir al estilo ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default GeomembranasSection;
