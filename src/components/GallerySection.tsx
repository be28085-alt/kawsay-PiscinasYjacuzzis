import pool1 from "@/assets/pool-1.jpeg";
import pool2 from "@/assets/pool-2.jpeg";
import pool3 from "@/assets/pool-3.png";
import pool5 from "@/assets/pool-5.png";
import pool6 from "@/assets/pool-6.png";
import pool7 from "@/assets/pool-7.png";
import pool8 from "@/assets/pool-8.png";
import pool9 from "@/assets/pool-9.png";

const projects = [
  {
    img: pool3,
    title: "Piscina Residencial con Iluminación LED",
    desc: "Piscina rectangular construida en concreto con acabados en piedra natural y sistema de iluminación LED subacuática. Diseñada para disfrutar tanto de día como de noche, con un jacuzzi elevado integrado al diseño.",
    location: "Finca privada",
  },
  {
    img: pool1,
    title: "Piscina con Fuente Decorativa",
    desc: "Piscina cuadrada con acabados en mármol travertino y fuente central en piedra. Incluye sistema de filtración de última generación, iluminación perimetral y banca sumergida para relajación.",
    location: "Residencia campestre",
  },
  {
    img: pool2,
    title: "Piscina Familiar con Deck en Madera",
    desc: "Piscina de diseño moderno con acabados en piedra y deck lateral en madera teca. Equipada con sistema de recirculación automática, fuente tipo cascada y zona de bronceado.",
    location: "Casa de campo",
  },
  {
    img: pool7,
    title: "Piscina Infinity con Vista Panorámica",
    desc: "Espectacular piscina tipo infinity edge construida en ladera con vista a las montañas. Acabados en piedra coralina, sistema de desborde infinito y zona de solárium integrada.",
    location: "Villa en las montañas",
  },
  {
    img: pool8,
    title: "Piscina Azul Profundo en Cerámica",
    desc: "Piscina interior con acabados completos en cerámica azul cobalto de alta resistencia. Incluye sistema de calefacción, iluminación LED y escalera de acceso en acero inoxidable.",
    location: "Residencia urbana",
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

const GallerySection = () => {
  return (
    <section id="proyectos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Piscinas
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Más de 50 proyectos realizados en toda Colombia. Cada piscina es una obra única diseñada y construida a la medida de nuestros clientes.
          </p>
        </div>

        {/* Individual project cards */}
        <div className="space-y-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 group overflow-hidden rounded-2xl shadow-card">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Description */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-2">
                  {p.location}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20proyecto%20como%20este"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors w-fit"
                >
                  Solicitar cotización similar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "50+", label: "Proyectos realizados" },
            { num: "8+", label: "Años de experiencia" },
            { num: "100%", label: "Clientes satisfechos" },
            { num: "24/7", label: "Soporte técnico" },
          ].map((s, i) => (
            <div key={i} className="text-center py-6 rounded-xl bg-secondary/60">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-water">{s.num}</p>
              <p className="font-body text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
