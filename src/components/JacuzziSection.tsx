import jacuzzi5 from "@/assets/jacuzzi-5.jpeg";
import jacuzzi6 from "@/assets/jacuzzi-6.jpeg";
import jacuzzi7 from "@/assets/jacuzzi-7.jpeg";
import jacuzzi8 from "@/assets/jacuzzi-8.png";
import jacuzzi9 from "@/assets/jacuzzi-9.jpeg";
import jacuzzi10 from "@/assets/jacuzzi-10.jpg";
import jacuzzi11 from "@/assets/jacuzzi-11.jpeg";
import jacuzzi12 from "@/assets/jacuzzi-12.jpeg";
import jacuzzi13 from "@/assets/jacuzzi-13.jpeg";
import { motion } from "framer-motion";

const jacuzzis = [
  { img: jacuzzi5, title: "Jacuzzi Compacto con Iluminación LED", desc: "Jacuzzi portátil con estructura metálica reforzada, acabado en fibra de vidrio blanca y sistema de iluminación LED subacuática.", features: ["LED subacuática", "Fibra de vidrio", "Compacto", "Jets regulables"] },
  { img: jacuzzi6, title: "Jacuzzi Premium 8 Personas", desc: "Jacuzzi de gran formato en fibra de vidrio celeste con 8 reposacabezas ergonómicos y múltiples jets perimetrales.", features: ["8 personas", "Reposacabezas", "Jets perimetrales", "Escalonado"] },
  { img: jacuzzi7, title: "Jacuzzi Elevado con Pérgola", desc: "Jacuzzi elevado en fibra de vidrio azul con estructura en concreto y pérgola metálica con cubierta translúcida.", features: ["Pérgola cubierta", "Elevado", "Escalones", "Vista panorámica"] },
  { img: jacuzzi8, title: "Jacuzzi Spa Rectangular de Lujo", desc: "Jacuzzi rectangular de alta gama con acabado en acrílico blanco brillante y múltiples jets distribuidos estratégicamente.", features: ["Acrílico premium", "Multi-jets", "Ergonómico", "Alta gama"] },
  { img: jacuzzi9, title: "Jacuzzi Rústico con Enchape en Madera", desc: "Jacuzzi exterior con revestimiento en madera natural y acabado interior en fibra de vidrio blanca. Ideal para fincas.", features: ["Enchape madera", "Exterior", "Rústico", "Fibra de vidrio"] },
  { img: jacuzzi10, title: "Jacuzzi Interior con Deck en Teca", desc: "Jacuzzi empotrado con revestimiento lateral en madera teca natural y pared en porcelanato mármol gris.", features: ["Interior", "Deck en teca", "Grifería negra", "Porcelanato"] },
  { img: jacuzzi11, title: "Jacuzzi Azul con Vista a las Montañas", desc: "Jacuzzi en fibra de vidrio azul intenso instalado en terraza elevada con vista panorámica.", features: ["Vista montañas", "Azul intenso", "Terraza", "Para parejas"] },
  { img: jacuzzi12, title: "Jacuzzi Ovalado de Exhibición", desc: "Elegante jacuzzi ovalado en acrílico blanco de alta resistencia con diseño ergonómico interior.", features: ["Diseño ovalado", "Acrílico blanco", "Exhibición", "Spa privado"] },
  { img: jacuzzi13, title: "Jacuzzi Gran Formato 10 Personas", desc: "Jacuzzi de gran formato con capacidad para 10 personas y acabados en cerámica premium.", features: ["10 personas", "Cerámica premium", "Empotrado", "Hidromasaje industrial"] },
];

const JacuzziSection = () => {
  return (
    <section id="jacuzzis" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-accent mx-auto mb-4" />
          <p className="font-body text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Relax Total
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Jacuzzis & Spa
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Diseñamos e instalamos jacuzzis de lujo con sistema de hidromasaje, iluminación cromática y acabados premium.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jacuzzis.map((j, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border/30 hover:border-primary/15"
            >
              <div className="relative overflow-hidden">
                <img
                  src={j.img}
                  alt={j.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2 leading-snug">
                  {j.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {j.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {j.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="font-body text-[10px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20jacuzzi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  Cotizar jacuzzi
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JacuzziSection;
