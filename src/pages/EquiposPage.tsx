import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import equipoPurificador from "@/assets/equipo-purificador.png";
import equipoManguera from "@/assets/equipo-manguera.png";
import equipoNasa from "@/assets/equipo-nasa.png";
import equipoTubo from "@/assets/equipo-tubo.png";
import equipoPh from "@/assets/equipo-ph.png";
import equipoAspirador from "@/assets/equipo-aspirador.png";
import pool13 from "@/assets/pool-13.png";

const equipos = [
  { img: equipoPurificador, title: "Purificador de Partículas", desc: "Sistema de purificación avanzado que elimina partículas microscópicas del agua, manteniéndola cristalina y libre de impurezas.", features: ["Alta eficiencia", "Fácil instalación", "Bajo mantenimiento"] },
  { img: equipoManguera, title: "Manguera de Aspiración", desc: "Manguera flexible de alta resistencia diseñada para conectar el sistema de aspiración de tu piscina. Fabricada en material anti-UV.", features: ["Anti-UV", "Flexible", "Conexión universal"] },
  { img: equipoNasa, title: "Nasa Sacahojas", desc: "Red profesional de malla fina para recoger hojas, insectos y residuos flotantes. Marco reforzado en aluminio para mayor durabilidad.", features: ["Malla fina", "Marco aluminio", "Ligera"] },
  { img: equipoTubo, title: "Tubo Telescópico", desc: "Tubo extensible de aluminio anodizado compatible con nasas, cepillos y aspiradores. Ajustable en longitud.", features: ["Extensible", "Aluminio anodizado", "Multiuso"] },
  { img: equipoPh, title: "Control de pH del Agua", desc: "Kit completo para medir y regular el nivel de pH. Incluye tiras reactivas, solución calibradora y tabla de referencia.", features: ["Kit completo", "Fácil lectura", "Preciso"] },
  { img: equipoAspirador, title: "Carro Aspirador Sumergido", desc: "Robot aspirador automático sumergible que limpia el fondo y paredes sin esfuerzo. Sistema de navegación inteligente.", features: ["Automático", "Paredes y fondo", "Filtro incluido"] },
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

    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {equipos.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/30 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="bg-secondary/40 p-8 flex items-center justify-center aspect-square overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                  {e.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {e.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {e.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="font-body text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20el%20producto%3A%20${encodeURIComponent(e.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  Consultar precio
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

export default EquiposPage;