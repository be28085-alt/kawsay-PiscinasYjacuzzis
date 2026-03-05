import jacuzzi1 from "@/assets/jacuzzi-1.jpg";
import jacuzzi2 from "@/assets/jacuzzi-2.jpg";
import jacuzzi3 from "@/assets/jacuzzi-3.jpg";
import jacuzzi4 from "@/assets/jacuzzi-4.jpg";

const jacuzzis = [
  { img: jacuzzi1, title: "Jacuzzi Tropical", desc: "Con iluminación LED y revestimiento en piedra natural" },
  { img: jacuzzi2, title: "Jacuzzi Mosaico", desc: "Acabados en mosaico azul con cascadas integradas" },
  { img: jacuzzi3, title: "Jacuzzi Spa Circular", desc: "Diseño redondo con cascada y luces cromáticas" },
  { img: jacuzzi4, title: "Jacuzzi Integrado", desc: "Conectado a la piscina con cascada desbordante" },
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
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Diseñamos e instalamos jacuzzis de lujo con sistema de hidromasaje, iluminación y acabados premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jacuzzis.map((j, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/3]"
            >
              <img
                src={j.img}
                alt={j.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-6 pt-20">
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{j.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70 mt-1">{j.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features list */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Sistema de hidromasaje",
            "Iluminación LED RGB",
            "Calentamiento eléctrico",
            "Cascadas y chorros",
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card">
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-water flex-shrink-0" />
              <span className="font-body text-sm font-medium text-foreground">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JacuzziSection;
