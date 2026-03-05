import pool1 from "@/assets/pool-1.jpeg";
import pool2 from "@/assets/pool-2.jpeg";
import pool3 from "@/assets/pool-3.png";
import pool5 from "@/assets/pool-5.png";
import pool6 from "@/assets/pool-6.png";
import pool7 from "@/assets/pool-7.png";
import pool8 from "@/assets/pool-8.png";
import pool9 from "@/assets/pool-9.png";

const projects = [
  { img: pool3, title: "Piscina Residencial", desc: "Iluminación LED nocturna", size: "lg" },
  { img: pool7, title: "Piscina Infinity", desc: "Vista panorámica a las montañas", size: "md" },
  { img: pool1, title: "Piscina con Fuente", desc: "Acabados en piedra natural", size: "md" },
  { img: pool8, title: "Piscina Azul Profundo", desc: "Acabados en cerámica premium", size: "md" },
  { img: pool9, title: "Piscina Iluminada", desc: "Atmósfera nocturna única", size: "md" },
  { img: pool2, title: "Piscina Familiar", desc: "Diseño moderno con deck de madera", size: "lg" },
  { img: pool5, title: "Piscina Campestre", desc: "Integrada al paisaje natural", size: "md" },
  { img: pool6, title: "Piscina Gran Formato", desc: "Para fincas y clubes", size: "md" },
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
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Más de 50 proyectos realizados. Cada piscina es una obra única diseñada a la medida de nuestros clientes.
          </p>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card cursor-pointer ${
                p.size === "lg" ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Always-visible label at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-5 pt-16">
                <h3 className="font-display text-lg font-semibold text-primary-foreground">{p.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
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
