import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";

import equipoPurificador from "@/assets/equipo-purificador.png";
import equipoManguera from "@/assets/equipo-manguera.png";
import equipoNasa from "@/assets/equipo-nasa.png";
import equipoTubo from "@/assets/equipo-tubo.png";
import equipoPh from "@/assets/equipo-ph.png";
import equipoAspirador from "@/assets/equipo-aspirador.png";
import pool13 from "@/assets/pool-13.png";

const equipos = [
  { img: equipoPurificador, title: "Purificador de Partículas", desc: "Sistema de purificación avanzado que elimina partículas microscópicas del agua.", features: ["Alta eficiencia", "Fácil instalación", "Bajo mantenimiento"] },
  { img: equipoManguera, title: "Manguera de Aspiración", desc: "Manguera flexible de alta resistencia diseñada para el sistema de aspiración. Anti-UV.", features: ["Anti-UV", "Flexible", "Conexión universal"] },
  { img: equipoNasa, title: "Nasa Sacahojas", desc: "Red profesional de malla fina para residuos flotantes. Marco en aluminio reforzado.", features: ["Malla fina", "Marco aluminio", "Ligera"] },
  { img: equipoTubo, title: "Tubo Telescópico", desc: "Tubo extensible de aluminio anodizado compatible con nasas, cepillos y aspiradores.", features: ["Extensible", "Aluminio anodizado", "Multiuso"] },
  { img: equipoPh, title: "Control de pH del Agua", desc: "Kit completo para medir y regular el pH. Incluye tiras reactivas y solución calibradora.", features: ["Kit completo", "Fácil lectura", "Preciso"] },
  { img: equipoAspirador, title: "Carro Aspirador Sumergido", desc: "Robot aspirador automático sumergible que limpia fondo y paredes sin esfuerzo.", features: ["Automático", "Paredes y fondo", "Filtro incluido"] },
];

const EquiposPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      image={pool13}
      subtitle="Catálogo"
      title="Equipos para Piscinas"
      description="Todo lo que necesitas para el mantenimiento y cuidado de tu piscina. Equipos de alta calidad con garantía."
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {equipos.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/30 hover:border-primary/15 hover:-translate-y-1"
            >
              <div className="bg-secondary/30 p-8 flex items-center justify-center aspect-square overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">
                  {e.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                  {e.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {e.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="font-body text-[10px] font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/40"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20el%20producto%3A%20${encodeURIComponent(e.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  Consultar precio
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
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default EquiposPage;
