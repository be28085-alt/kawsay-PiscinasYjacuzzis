import jacuzzi1 from "@/assets/jacuzzi-1.jpg";
import jacuzzi2 from "@/assets/jacuzzi-2.jpg";
import jacuzzi3 from "@/assets/jacuzzi-3.jpg";
import jacuzzi4 from "@/assets/jacuzzi-4.jpg";

const jacuzzis = [
  {
    img: jacuzzi1,
    title: "Jacuzzi Tropical en Piedra Natural",
    desc: "Jacuzzi de lujo con revestimiento exterior en piedra natural rústica, iluminación LED subacuática en tonos azules y capacidad para 6 personas. Incluye sistema de hidromasaje con 12 jets regulables y calentador eléctrico de alta eficiencia.",
    features: ["6 personas", "12 jets", "LED azul", "Calentador eléctrico"],
  },
  {
    img: jacuzzi2,
    title: "Jacuzzi en Mosaico Azul con Cascadas",
    desc: "Jacuzzi elevado con acabados completos en mosaico azul premium y dos cascadas tipo lámina en acero inoxidable. Base en deck de madera teca, sistema de filtración independiente y control digital de temperatura.",
    features: ["Mosaico premium", "2 cascadas", "Deck en teca", "Control digital"],
  },
  {
    img: jacuzzi3,
    title: "Jacuzzi Spa Circular con Cromática",
    desc: "Diseño circular con cascada desbordante desde un muro en piedra natural. Sistema de iluminación cromática RGB programable con 16 colores, jets de hidromasaje perimetrales y asientos ergonómicos sumergidos.",
    features: ["Diseño circular", "16 colores LED", "Cascada", "Asientos ergonómicos"],
  },
  {
    img: jacuzzi4,
    title: "Jacuzzi Integrado a Piscina con Cascada",
    desc: "Jacuzzi rectangular elevado e integrado al borde de la piscina principal con cascada desbordante. Acabados en piedra coralina, sistema de hidromasaje de alta presión y zona de relajación con palmeras tropicales.",
    features: ["Integrado a piscina", "Piedra coralina", "Alta presión", "Cascada"],
  },
];

const JacuzziSection = () => {
  return (
    <section id="jacuzzis" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Relax Total
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Jacuzzis & Spa
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Diseñamos e instalamos jacuzzis de lujo con sistema de hidromasaje, iluminación cromática y acabados premium para transformar tu hogar en un spa privado.
          </p>
        </div>

        {/* Individual jacuzzi cards */}
        <div className="space-y-12">
          {jacuzzis.map((j, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 group overflow-hidden rounded-2xl shadow-card">
                <img
                  src={j.img}
                  alt={j.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Description */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {j.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  {j.desc}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {j.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20jacuzzi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors w-fit"
                >
                  Cotizar jacuzzi
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JacuzziSection;
