import pool2 from "@/assets/pool-2.jpeg";
import pool3 from "@/assets/pool-3.png";
import pool5 from "@/assets/pool-5.png";
import pool6 from "@/assets/pool-6.png";
import pool7 from "@/assets/pool-7.png";
import pool8 from "@/assets/pool-8.png";
import pool9 from "@/assets/pool-9.png";
import pool10 from "@/assets/pool-10.png";
import pool11 from "@/assets/pool-11.png";
import pool12 from "@/assets/pool-12.png";
import pool14 from "@/assets/pool-14.png";
import pool15 from "@/assets/pool-15.jpeg";
import pool16 from "@/assets/pool-16.jpeg";
import pool17 from "@/assets/pool-17.png";
import pool18 from "@/assets/pool-18.jpeg";
import pool19 from "@/assets/pool-19.jpeg";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  { img: pool3, title: "Piscina Residencial con Iluminación LED", desc: "Piscina rectangular construida en concreto con acabados en piedra natural y sistema de iluminación LED subacuática. Diseñada para disfrutar tanto de día como de noche, con un jacuzzi elevado integrado al diseño.", location: "Finca privada" },
  { img: pool11, title: "Piscina con Cascada Iluminada", desc: "Impresionante piscina nocturna con cascada tipo lámina en acero inoxidable e iluminación LED azul subacuática. Muro posterior en piedra natural con acabado moderno.", location: "Residencia premium" },
  { img: pool15, title: "Piscina Familiar con Jacuzzi Elevado", desc: "Amplia piscina rectangular con jacuzzi elevado integrado, perfecta para compartir en familia. Acabados en concreto pulido con bordillo perimetral y zona verde tropical.", location: "Finca campestre" },
  { img: pool16, title: "Piscina Rústica con Bordillo en Piedra", desc: "Piscina de estilo rústico con bordillo en piedra terracota y piso en adoquín natural. Diseño funcional con acabados resistentes ideal para fincas recreativas.", location: "Finca recreativa" },
  { img: pool17, title: "Piscina con Vista a las Montañas", desc: "Elegante piscina con acabados en piedra coralina y grava decorativa, rodeada de vegetación nativa con vista panorámica a las montañas.", location: "Casa campestre" },
  { img: pool18, title: "Piscina Nocturna con Iluminación LED", desc: "Espectacular piscina con sistema de iluminación LED azul y cascada decorativa con luz neón. Ambiente nocturno único con acabados en piedra rústica y pérgola.", location: "Residencia premium" },
  { img: pool19, title: "Piscina con Jacuzzi y Cobertor Solar", desc: "Piscina compacta con jacuzzi elevado en piedra gris y sistema de cobertor solar enrollable. Diseño moderno con acabados en mármol travertino.", location: "Finca en la montaña" },
  { img: pool2, title: "Piscina Familiar con Deck en Madera", desc: "Piscina de diseño moderno con acabados en piedra y deck lateral en madera teca. Equipada con sistema de recirculación automática y fuente tipo cascada.", location: "Casa de campo" },
  { img: pool14, title: "Piscina Nocturna con Cascada Verde", desc: "Piscina elegante con sistema de iluminación LED cromática y cascada decorativa con luz verde. Ambiente nocturno espectacular.", location: "Residencia moderna" },
  { img: pool10, title: "Piscina Doble con Trampolín", desc: "Proyecto de piscina doble con trampolín central en estructura metálica azul. Acabados en cerámica azul cobalto y bordillo perimetral en concreto pulido.", location: "Finca recreativa" },
  { img: pool8, title: "Piscina Azul Profundo en Cerámica", desc: "Piscina interior con acabados completos en cerámica azul cobalto de alta resistencia. Incluye sistema de calefacción, iluminación LED y escalera en acero inoxidable.", location: "Residencia urbana" },
  { img: pool12, title: "Piscina Campestre con Bordillo Natural", desc: "Piscina rectangular en entorno campestre tropical rodeada de vegetación exuberante. Acabados con bordillo en piedra terracota y deck en concreto estampado.", location: "Casa campestre" },
  { img: pool9, title: "Piscina con Iluminación Verde Nocturna", desc: "Piscina elevada con estructura en piedra rústica y sistema de iluminación LED cromática programable. Construida en terreno inclinado con vista al atardecer.", location: "Casa campestre" },
  { img: pool5, title: "Piscinas Campestres Dobles", desc: "Proyecto de dos piscinas en entorno campestre: una piscina principal para adultos y una secundaria para niños. Acabados en fibra de vidrio celeste.", location: "Finca recreativa" },
  { img: pool6, title: "Piscina Gran Formato para Fincas", desc: "Piscina de gran tamaño ideal para fincas y clubes, con sistema de filtración industrial y acabados en fibra de vidrio reforzada.", location: "Club campestre" },
];

const INITIAL_SHOW = 6;

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-accent mx-auto mb-4" />
          <p className="font-body text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Piscinas
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Más de 50 proyectos realizados en toda Colombia. Cada piscina es una obra única diseñada a la medida.
          </p>
        </motion.div>

        {/* Gallery grid — masonry-style 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border/30 hover:border-primary/15"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 font-body text-[10px] font-semibold tracking-[0.12em] uppercase bg-card/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full">
                  {p.location}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {p.desc}
                </p>
                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20proyecto%20como%20este"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  Solicitar cotización
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / less */}
        {projects.length > INITIAL_SHOW && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-body text-sm font-semibold text-primary hover:text-accent transition-colors px-6 py-3 rounded-xl border border-primary/20 hover:border-accent/30 hover:bg-secondary/50"
            >
              {showAll ? "Ver menos" : `Ver todos los proyectos (${projects.length})`}
            </button>
          </motion.div>
        )}

        {/* Stats bar */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { num: "50+", label: "Proyectos realizados" },
            { num: "8+", label: "Años de experiencia" },
            { num: "100%", label: "Clientes satisfechos" },
            { num: "24/7", label: "Soporte técnico" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center py-6 md:py-7 rounded-2xl bg-card shadow-card border border-border/40"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-gradient-water">{s.num}</p>
              <p className="font-body text-xs text-muted-foreground mt-1.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
