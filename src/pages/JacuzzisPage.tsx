import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import jacuzzi5 from "@/assets/jacuzzi-5.jpeg";
import jacuzzi6 from "@/assets/jacuzzi-6.jpeg";
import jacuzzi7 from "@/assets/jacuzzi-7.jpeg";
import jacuzzi8 from "@/assets/jacuzzi-8.png";
import jacuzzi9 from "@/assets/jacuzzi-9.jpeg";
import jacuzzi10 from "@/assets/jacuzzi-10.jpg";
import jacuzzi11 from "@/assets/jacuzzi-11.jpeg";
import jacuzzi12 from "@/assets/jacuzzi-12.jpeg";
import jacuzzi13 from "@/assets/jacuzzi-13.jpeg";
import pool1 from "@/assets/pool-1.jpeg";

const jacuzzis = [
  { img: jacuzzi5, title: "Jacuzzi Compacto con Iluminación LED", desc: "Jacuzzi portátil con estructura metálica reforzada, acabado en fibra de vidrio blanca y sistema de iluminación LED subacuática. Ideal para espacios reducidos con jets de hidromasaje y control manual.", features: ["LED subacuática", "Fibra de vidrio", "Compacto", "Jets regulables"] },
  { img: jacuzzi6, title: "Jacuzzi Premium 8 Personas", desc: "Jacuzzi de gran formato en fibra de vidrio celeste con 8 reposacabezas ergonómicos en cuero sintético negro. Sistema de hidromasaje con múltiples jets perimetrales y asientos escalonados.", features: ["8 personas", "Reposacabezas", "Jets perimetrales", "Escalonado"] },
  { img: jacuzzi7, title: "Jacuzzi Elevado con Pérgola", desc: "Jacuzzi elevado en fibra de vidrio azul con estructura en concreto y pérgola metálica con cubierta translúcida. Incluye escalones laterales y vista panorámica al entorno natural.", features: ["Pérgola cubierta", "Elevado", "Escalones", "Vista panorámica"] },
  { img: jacuzzi8, title: "Jacuzzi Spa Rectangular de Lujo", desc: "Jacuzzi rectangular de alta gama con acabado en acrílico blanco brillante, múltiples jets de hidromasaje distribuidos estratégicamente y asiento ergonómico central.", features: ["Acrílico premium", "Multi-jets", "Ergonómico", "Alta gama"] },
  { img: jacuzzi9, title: "Jacuzzi Rústico con Enchape en Madera", desc: "Jacuzzi exterior con revestimiento en madera natural y acabado interior en fibra de vidrio blanca. Diseño rústico elegante ideal para fincas y casas campestres.", features: ["Enchape madera", "Exterior", "Rústico", "Fibra de vidrio"] },
  { img: jacuzzi10, title: "Jacuzzi Interior con Deck en Teca", desc: "Jacuzzi empotrado con revestimiento lateral en madera teca natural y pared en porcelanato mármol gris. Sistema de hidromasaje con jets cromados y grifería negra.", features: ["Interior", "Deck en teca", "Grifería negra", "Porcelanato"] },
  { img: jacuzzi11, title: "Jacuzzi Azul con Vista a las Montañas", desc: "Jacuzzi en fibra de vidrio azul intenso instalado en terraza elevada con vista panorámica. Múltiples jets de hidromasaje y diseño compacto ideal para parejas.", features: ["Vista montañas", "Azul intenso", "Terraza", "Para parejas"] },
  { img: jacuzzi12, title: "Jacuzzi Ovalado de Exhibición", desc: "Elegante jacuzzi ovalado en acrílico blanco de alta resistencia con diseño ergonómico interior. Modelo perfecto para baños de lujo y spas privados.", features: ["Diseño ovalado", "Acrílico blanco", "Exhibición", "Spa privado"] },
  { img: jacuzzi13, title: "Jacuzzi Gran Formato 10 Personas", desc: "Jacuzzi de gran formato con capacidad para 10 personas, acabados en cerámica premium y 10 reposacabezas. Empotrado en piso con mosaico decorativo.", features: ["10 personas", "Cerámica premium", "Empotrado", "Hidromasaje industrial"] },
];

const JacuzzisPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      image={pool1}
      subtitle="Relax Total"
      title="Jacuzzis & Spa"
      description="Diseñamos e instalamos jacuzzis de lujo con sistema de hidromasaje, iluminación cromática y acabados premium."
    />

    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="space-y-16 md:space-y-24">
          {jacuzzis.map((j, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-12 items-center`}
            >
              <div className="w-full md:w-3/5 group">
                <div className="relative overflow-hidden rounded-2xl shadow-card group-hover:shadow-elevated transition-shadow duration-500">
                  <img
                    src={j.img}
                    alt={j.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {j.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-5 text-sm md:text-[15px]">
                  {j.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {j.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20jacuzzi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors w-fit group/link"
                >
                  Cotizar jacuzzi
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
    <Footer />
  </div>
);

export default JacuzzisPage;