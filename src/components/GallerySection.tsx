import pool1 from "@/assets/pool-1.jpeg";
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
import pool13 from "@/assets/pool-13.png";
import pool14 from "@/assets/pool-14.png";
import { motion } from "framer-motion";

const projects = [
  {
    img: pool3,
    title: "Piscina Residencial con Iluminación LED",
    desc: "Piscina rectangular construida en concreto con acabados en piedra natural y sistema de iluminación LED subacuática. Diseñada para disfrutar tanto de día como de noche, con un jacuzzi elevado integrado al diseño.",
    location: "Finca privada",
  },
  {
    img: pool11,
    title: "Piscina con Cascada Iluminada",
    desc: "Impresionante piscina nocturna con cascada tipo lámina en acero inoxidable e iluminación LED azul subacuática. Muro posterior en piedra natural con acabado moderno y sistema de recirculación de agua silencioso.",
    location: "Residencia premium",
  },
  {
    img: pool1,
    title: "Piscina con Fuente Decorativa",
    desc: "Piscina cuadrada con acabados en mármol travertino y fuente central en piedra. Incluye sistema de filtración de última generación, iluminación perimetral y banca sumergida para relajación.",
    location: "Residencia campestre",
  },
  {
    img: pool13,
    title: "Piscina Panorámica en las Montañas",
    desc: "Piscina con vista panorámica a las montañas, acabados en piedra natural y borde perimetral elegante. Construida en terreno elevado con zona de grava decorativa y acceso lateral amplio.",
    location: "Finca en la montaña",
  },
  {
    img: pool2,
    title: "Piscina Familiar con Deck en Madera",
    desc: "Piscina de diseño moderno con acabados en piedra y deck lateral en madera teca. Equipada con sistema de recirculación automática, fuente tipo cascada y zona de bronceado.",
    location: "Casa de campo",
  },
  {
    img: pool14,
    title: "Piscina Nocturna con Cascada Verde",
    desc: "Piscina elegante con sistema de iluminación LED cromática y cascada decorativa con luz verde. Ambiente nocturno espectacular con acabados en cerámica oscura y bordes minimalistas.",
    location: "Residencia moderna",
  },
  {
    img: pool7,
    title: "Piscina Infinity con Vista Panorámica",
    desc: "Espectacular piscina tipo infinity edge construida en ladera con vista a las montañas. Acabados en piedra coralina, sistema de desborde infinito y zona de solárium integrada.",
    location: "Villa en las montañas",
  },
  {
    img: pool10,
    title: "Piscina Doble con Trampolín",
    desc: "Proyecto de piscina doble con trampolín central en estructura metálica azul. Acabados en cerámica azul cobalto, bordillo perimetral en concreto pulido y zona verde con árboles frutales.",
    location: "Finca recreativa",
  },
  {
    img: pool8,
    title: "Piscina Azul Profundo en Cerámica",
    desc: "Piscina interior con acabados completos en cerámica azul cobalto de alta resistencia. Incluye sistema de calefacción, iluminación LED y escalera de acceso en acero inoxidable.",
    location: "Residencia urbana",
  },
  {
    img: pool12,
    title: "Piscina Campestre con Bordillo Natural",
    desc: "Piscina rectangular en entorno campestre tropical rodeada de vegetación exuberante. Acabados con bordillo en piedra terracota, deck en concreto estampado y zona de descanso con tumbonas.",
    location: "Casa campestre",
  },
  {
    img: pool9,
    title: "Piscina con Iluminación Verde Nocturna",
    desc: "Piscina elevada con estructura en piedra rústica y sistema de iluminación LED cromática programable. Construida en terreno inclinado con vista al atardecer y terraza perimetral.",
    location: "Casa campestre",
  },
  {
    img: pool5,
    title: "Piscinas Campestres Dobles",
    desc: "Proyecto de dos piscinas en entorno campestre: una piscina principal para adultos y una piscina secundaria para niños. Acabados en fibra de vidrio celeste con bordes redondeados.",
    location: "Finca recreativa",
  },
  {
    img: pool6,
    title: "Piscina Gran Formato para Fincas",
    desc: "Piscina de gran tamaño ideal para fincas y clubes, con sistema de filtración industrial, acabados en fibra de vidrio reforzada, bordillo perimetral y zona verde integrada.",
    location: "Club campestre",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const GallerySection = () => {
  return (
    <section id="proyectos" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Piscinas
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Más de 50 proyectos realizados en toda Colombia. Cada piscina es una obra única diseñada y construida a la medida de nuestros clientes.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-16">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-5 md:gap-10 items-center`}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-3/5 group overflow-hidden rounded-2xl shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Description */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                  {p.location}
                </span>
                <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
                  {p.desc}
                </p>
                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20proyecto%20como%20este"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 md:mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors w-fit"
                >
                  Solicitar cotización similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
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
            <div key={i} className="text-center py-5 md:py-6 rounded-xl bg-secondary/60">
              <p className="font-display text-2xl md:text-4xl font-bold text-gradient-water">{s.num}</p>
              <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
