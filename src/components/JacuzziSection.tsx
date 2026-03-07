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
  {
    img: jacuzzi5,
    title: "Jacuzzi Compacto con Iluminación LED",
    desc: "Jacuzzi portátil con estructura metálica reforzada, acabado en fibra de vidrio blanca y sistema de iluminación LED subacuática. Ideal para espacios reducidos con jets de hidromasaje y control manual.",
    features: ["LED subacuática", "Fibra de vidrio", "Compacto", "Jets regulables"],
  },
  {
    img: jacuzzi6,
    title: "Jacuzzi Premium 8 Personas con Reposacabezas",
    desc: "Jacuzzi de gran formato en fibra de vidrio celeste con 8 reposacabezas ergonómicos en cuero sintético negro. Sistema de hidromasaje con múltiples jets perimetrales y asientos escalonados.",
    features: ["8 personas", "Reposacabezas", "Jets perimetrales", "Asientos escalonados"],
  },
  {
    img: jacuzzi7,
    title: "Jacuzzi Elevado con Pérgola Cubierta",
    desc: "Jacuzzi elevado en fibra de vidrio azul con estructura en concreto y pérgola metálica con cubierta translúcida. Incluye escalones laterales de acceso y vista panorámica al entorno natural.",
    features: ["Pérgola cubierta", "Elevado", "Escalones", "Vista panorámica"],
  },
  {
    img: jacuzzi8,
    title: "Jacuzzi Spa Rectangular de Lujo",
    desc: "Jacuzzi rectangular de alta gama con acabado en acrílico blanco brillante, múltiples jets de hidromasaje distribuidos estratégicamente y asiento ergonómico central para máxima relajación.",
    features: ["Acrílico premium", "Multi-jets", "Ergonómico", "Alta gama"],
  },
  {
    img: jacuzzi9,
    title: "Jacuzzi Rústico con Enchape en Madera",
    desc: "Jacuzzi exterior con revestimiento en madera natural y acabado interior en fibra de vidrio blanca. Diseño rústico elegante ideal para fincas y casas campestres con entorno natural.",
    features: ["Enchape madera", "Exterior", "Rústico", "Fibra de vidrio"],
  },
  {
    img: jacuzzi10,
    title: "Jacuzzi Interior con Deck en Teca",
    desc: "Jacuzzi empotrado en baño con revestimiento lateral en madera teca natural y pared en porcelanato mármol gris. Sistema de hidromasaje con jets cromados y grifería negra moderna.",
    features: ["Interior", "Deck en teca", "Grifería negra", "Porcelanato"],
  },
  {
    img: jacuzzi11,
    title: "Jacuzzi Azul con Vista a las Montañas",
    desc: "Jacuzzi en fibra de vidrio azul intenso instalado en terraza elevada con vista panorámica a las montañas. Múltiples jets de hidromasaje y diseño compacto ideal para parejas.",
    features: ["Vista montañas", "Azul intenso", "Terraza", "Para parejas"],
  },
  {
    img: jacuzzi12,
    title: "Jacuzzi Ovalado de Exhibición",
    desc: "Elegante jacuzzi ovalado en acrílico blanco de alta resistencia con diseño ergonómico interior y acabado brillante. Modelo de exhibición perfecto para baños de lujo y spas privados.",
    features: ["Diseño ovalado", "Acrílico blanco", "Exhibición", "Spa privado"],
  },
  {
    img: jacuzzi13,
    title: "Jacuzzi Gran Formato 10 Personas",
    desc: "Jacuzzi de gran formato con capacidad para 10 personas, acabados en cerámica premium y 10 reposacabezas en cuero sintético. Empotrado en piso con mosaico decorativo y sistema de hidromasaje industrial.",
    features: ["10 personas", "Cerámica premium", "Empotrado", "Hidromasaje industrial"],
  },
];

const JacuzziSection = () => {
  return (
    <section id="jacuzzis" className="py-16 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-3">
            Relax Total
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Jacuzzis & Spa
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Diseñamos e instalamos jacuzzis de lujo con sistema de hidromasaje, iluminación cromática y acabados premium para transformar tu hogar en un spa privado.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-14">
          {jacuzzis.map((j, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-5 md:gap-10 items-center`}
            >
              <motion.div
                className="w-full md:w-3/5 group overflow-hidden rounded-2xl shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={j.img}
                  alt={j.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                  {j.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4 md:mb-5 text-sm md:text-base">
                  {j.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JacuzziSection;
