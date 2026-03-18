import { useState, useEffect } from "react";
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
import piscina4x3 from "@/assets/piscina4x3.png";
import piscina6x3 from "@/assets/piscina6x3.png";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Ruler, Waves } from "lucide-react";

// Definimos el tipo para la estructura de los proyectos
type PlanDetails = {
  name: string;
  dimensions: string;
  depth: string;
  holeDepth: string;
  image: string;
};

type Project = {
  img: string;
  title: string;
  desc: string;
  location: string;
  plan?: PlanDetails;
};

const projects: Project[] = [
  {
    img: pool3,
    title: "Piscina Familiar",
    desc: "Piscina rectangular construida en concreto con acabados en piedra natural y sistema de iluminación LED subacuática. Diseñada para disfrutar tanto de día como de noche. Profundidad del hueco: 1.50m.",
    location: "Finca privada",
    plan: {
      name: "Piscina Familiar Kawsay",
      dimensions: "4m x 3.70m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: piscina4x3
    }
  },
  {
    img: pool11,
    title: "Piscina Mediana",
    desc: "Impresionante piscina nocturna con cascada tipo lámina en acero inoxidable e iluminación LED azul subacuática. Muro posterior en piedra natural con acabado moderno. Profundidad del hueco: 1.50m.",
    location: "Residencia premium",
    plan: {
      name: "Piscina Mediana Kawsay",
      dimensions: "6m x 5.70m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: piscina6x3
    }
  },
  {
    img: pool15,
    title: "Piscina Grande",
    desc: "Amplia piscina rectangular con jacuzzi elevado integrado, perfecta para compartir en familia. Acabados en concreto pulido con bordillo perimetral y zona verde tropical. Profundidad del hueco: 1.40m.",
    location: "Finca campestre",
    plan: {
      name: "Piscina Grande",
      dimensions: "12m x 6m",
      depth: "1.30m",
      holeDepth: "1.40m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscina+Grande%0A12m+x+6m"
    }
  },
  {
    img: pool16,
    title: "Piscina Compacta",
    desc: "Piscina de estilo rústico con bordillo en piedra terracota y piso en adoquín natural. Diseño funcional con acabados resistentes ideal para espacios reducidos. Profundidad del hueco: 1.40m.",
    location: "Finca recreativa",
    plan: {
      name: "Piscina Compacta",
      dimensions: "3.5m x 2.5m",
      depth: "1.30m",
      holeDepth: "1.40m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscina+Compacta%0A3.5m+x+2.5m"
    }
  },
  {
    img: pool17,
    title: "Piscina Premium",
    desc: "Elegante piscina con acabados en piedra coralina y grava decorativa, rodeada de vegetación nativa con vista panorámica a las montañas. Diseño de lujo. Profundidad del hueco: 1.40m.",
    location: "Casa campestre",
    plan: {
      name: "Piscina Premium",
      dimensions: "8m x 4m",
      depth: "1.30m",
      holeDepth: "1.40m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscina+Premium%0A8m+x+4m"
    }
  },
  {
    img: pool18,
    title: "Piscina Nocturna con Iluminación LED",
    desc: "Espectacular piscina con sistema de iluminación LED azul y cascada decorativa con luz neón. Ambiente nocturno único con acabados en piedra rústica y pérgola. Profundidad del hueco: 1.50m.",
    location: "Residencia premium",
    plan: {
      name: "Piscina Nocturna LED",
      dimensions: "5m x 3m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscina+Nocturna%0A5m+x+3m"
    }
  },
  {
    img: pool19,
    title: "Piscina con Jacuzzi y Cobertor Solar",
    desc: "Piscina compacta con jacuzzi elevado en piedra gris y sistema de cobertor solar enrollable. Diseño moderno con acabados en mármol travertino. Profundidad del hueco: 1.40m.",
    location: "Finca en la montaña",
    plan: {
      name: "Piscina con Jacuzzi",
      dimensions: "6m x 4m",
      depth: "1.30m",
      holeDepth: "1.40m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscina+Jacuzzi%0A6m+x+4m"
    }
  },
  {
    img: pool2,
    title: "Piscina Familiar con Deck en Madera",
    desc: "Piscina de diseño moderno con acabados en piedra y deck lateral en madera teca. Equipada con sistema de recirculación automática y fuente tipo cascada. Profundidad del hueco: 1.50m.",
    location: "Casa de campo",
    plan: {
      name: "Piscina Deck Madera",
      dimensions: "7m x 4m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Deck+Madera%0A7m+x+4m"
    }
  },
  {
    img: pool14,
    title: "Piscina Nocturna con Cascada Verde",
    desc: "Piscina elegante con sistema de iluminación LED cromática y cascada decorativa con luz verde. Ambiente nocturno espectacular. Profundidad del hueco: 1.40m.",
    location: "Residencia moderna",
    plan: {
      name: "Piscina Cascada Verde",
      dimensions: "8m x 4m",
      depth: "1.30m",
      holeDepth: "1.40m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Cascada+Verde%0A8m+x+4m"
    }
  },
  {
    img: pool10,
    title: "Piscina Doble con Trampolín",
    desc: "Proyecto de piscina doble con trampolín central en estructura metálica azul. Acabados en cerámica azul cobalto y bordillo perimetral en concreto pulido. Profundidad del hueco: 1.70m.",
    location: "Finca recreativa",
    plan: {
      name: "Piscina con Trampolín",
      dimensions: "10m x 5m",
      depth: "1.60m",
      holeDepth: "1.70m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscina+Trampolin%0A10m+x+5m"
    }
  },
  {
    img: pool8,
    title: "Piscina Azul Profundo en Cerámica",
    desc: "Piscina interior con acabados completos en cerámica azul cobalto de alta resistencia. Incluye sistema de calefacción, iluminación LED y escalera en acero inoxidable. Profundidad del hueco: 1.50m.",
    location: "Residencia urbana",
    plan: {
      name: "Piscina Azul Profundo",
      dimensions: "6m x 3m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Azul+Profundo%0A6m+x+3m"
    }
  },
  {
    img: pool12,
    title: "Piscina Campestre con Bordillo Natural",
    desc: "Piscina rectangular en entorno campestre tropical rodeada de vegetación exuberante. Acabados con bordillo en piedra terracota y deck en concreto estampado. Profundidad del hueco: 1.40m.",
    location: "Casa campestre",
    plan: {
      name: "Piscina Bordillo Natural",
      dimensions: "9m x 4m",
      depth: "1.30m",
      holeDepth: "1.40m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Bordillo+Natural%0A9m+x+4m"
    }
  },
  {
    img: pool9,
    title: "Piscina con Iluminación Verde Nocturna",
    desc: "Piscina elevada con estructura en piedra rústica y sistema de iluminación LED cromática programable. Construida en terreno inclinado con vista al atardecer. Profundidad del hueco: 1.50m.",
    location: "Casa campestre",
    plan: {
      name: "Piscina Iluminación Verde",
      dimensions: "7m x 3m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Iluminacion+Verde%0A7m+x+3m"
    }
  },
  {
    img: pool5,
    title: "Piscinas Campestres Dobles",
    desc: "Proyecto de dos piscinas en entorno campestre: una piscina principal para adultos y una secundaria para niños. Acabados en fibra de vidrio celeste. Profundidad del hueco: 1.50m.",
    location: "Finca recreativa",
    plan: {
      name: "Piscinas Dobles",
      dimensions: "14m x 6m",
      depth: "1.40m",
      holeDepth: "1.50m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Piscinas+Dobles%0A14m+x+6m"
    }
  },
  {
    img: pool6,
    title: "Piscina Gran Formato para Fincas",
    desc: "Piscina de gran tamaño ideal para fincas y clubes, con sistema de filtración industrial y acabados en fibra de vidrio reforzada. Profundidad del hueco: 1.60m.",
    location: "Club campestre",
    plan: {
      name: "Piscina Gran Formato",
      dimensions: "15m x 7m",
      depth: "1.50m",
      holeDepth: "1.60m",
      image: "https://placehold.co/800x600/1a365d/ffffff.png?text=Plano+Gran+Formato%0A15m+x+7m"
    }
  }
];

const GallerySection = () => {
  const [selectedPlan, setSelectedPlan] = useState<Project | null>(null);

  // Bloquear scroll de la página cuando el modal está abierto
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPlan]);

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="line-accent mx-auto mb-5" />
          <p className="font-body text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
            Nuestras Piscinas
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Más de 50 proyectos realizados en toda Colombia. Cada piscina es una obra única diseñada a la medida.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 group">
                <div className="relative overflow-hidden rounded-2xl shadow-card group-hover:shadow-elevated transition-shadow duration-500">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Botón Ver Planos */}
                  {p.plan && (
                    <button
                      onClick={() => setSelectedPlan(p)}
                      className="absolute bottom-4 right-4 z-10 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2.5 rounded-xl font-body text-sm font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 backdrop-blur-sm"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Ver planos
                    </button>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2 flex items-center gap-2">
                  <span className="w-8 h-px bg-accent" />
                  {p.location}
                </span>
                <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-[15px]">
                  {p.desc}
                </p>
                <a
                  href={`https://wa.me/573042573555?text=Hola%2C%20me%20interesa%20el%20proyecto%3A%20${encodeURIComponent(p.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 md:mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors w-fit group/link"
                >
                  Solicitar cotización similar
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-6 md:py-8 rounded-2xl bg-card shadow-card border border-border/50"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-water">{s.num}</p>
              <p className="font-body text-xs md:text-sm text-muted-foreground mt-2">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de Planos */}
      <AnimatePresence>
        {selectedPlan && selectedPlan.plan && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedPlan(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-card w-full max-w-5xl rounded-3xl shadow-elevated overflow-hidden z-10 flex flex-col md:flex-row border border-border/50 max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-background/50 hover:bg-background rounded-full transition-colors backdrop-blur-sm shadow-sm"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>


              <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-6">                <img
                src={selectedPlan.plan.image}
                alt={`Plano de ${selectedPlan.plan.name}`}
                className="max-w-full max-h-[520px] object-contain"
              />
              </div>

              <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
                <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-5 w-fit">
                  Plano Arquitectónico
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                  {selectedPlan.plan.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm md:text-base mb-8 leading-relaxed">
                  {selectedPlan.desc}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-sm">
                      <Ruler className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Dimensiones</p>
                      <p className="font-display font-semibold text-xl text-foreground">{selectedPlan.plan.dimensions}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-sm">
                      <Waves className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Profundidad</p>
                      <div className="flex items-baseline gap-4">
                        <div>
                          <p className="font-body text-[10px] text-muted-foreground mb-0.5">Piscina</p>
                          <p className="font-display font-semibold text-xl text-foreground">{selectedPlan.plan.depth}</p>
                        </div>
                        <div className="w-px h-8 bg-border/50 self-end mb-1" />
                        <div>
                          <p className="font-body text-[10px] text-muted-foreground mb-0.5">Hueco</p>
                          <p className="font-display font-semibold text-xl text-primary">{selectedPlan.plan.holeDepth}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;