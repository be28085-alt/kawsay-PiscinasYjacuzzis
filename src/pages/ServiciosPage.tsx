import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Droplets, Wrench, Sparkles, ShieldCheck, ThermometerSun, Paintbrush, Bug, Timer } from "lucide-react";
import pool7 from "@/assets/pool-7.png";

const servicios = [
  { icon: Droplets, title: "Limpieza de Piscinas", desc: "Servicio profesional de limpieza integral: aspirado de fondo, cepillado de paredes, limpieza de línea de agua y recolección de residuos." },
  { icon: Wrench, title: "Mantenimiento Preventivo", desc: "Plan periódico que incluye revisión de equipos, limpieza de filtros, control de niveles de agua y verificación del sistema de recirculación." },
  { icon: ShieldCheck, title: "Tratamiento Químico", desc: "Análisis y balance químico completo: control de pH, cloro, alcalinidad y dureza. Productos certificados para agua cristalina." },
  { icon: ThermometerSun, title: "Instalación de Calentadores", desc: "Instalación de calentadores solares, eléctricos y a gas. Disfruta de tu piscina todo el año con la temperatura ideal." },
  { icon: Sparkles, title: "Reparación de Acabados", desc: "Restauración de gresite, mosaicos y acabados interiores. Reparación de fisuras, juntas y revestimientos." },
  { icon: Paintbrush, title: "Pintura e Impermeabilización", desc: "Pintura epóxica y sistemas de impermeabilización de alta durabilidad. Protección contra filtraciones." },
  { icon: Bug, title: "Control de Algas", desc: "Tratamiento anti-algas con productos de acción prolongada. Eliminación de microorganismos y prevención de agua verde." },
  { icon: Timer, title: "Automatización", desc: "Temporizadores, sensores de nivel y dosificación automática para que tu piscina se mantenga sola." },
];

const ServiciosPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      image={pool7}
      subtitle="Qué hacemos"
      title="Nuestros Servicios"
      description="Soluciones completas para la construcción, mantenimiento y cuidado de tu piscina y jacuzzi."
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-card rounded-2xl p-6 md:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/30 hover:border-primary/15 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 md:mt-18 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-water rounded-2xl p-8 md:p-10 max-w-2xl mx-auto shadow-water relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-primary-foreground/5 pointer-events-none" />
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-3 relative z-10">
              ¿Necesitas un servicio?
            </h3>
            <p className="font-body text-primary-foreground/70 text-sm mb-5 relative z-10">
              Escríbenos por WhatsApp y recibe atención inmediata.
            </p>
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20un%20servicio"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-2 bg-card text-primary px-6 py-3 rounded-xl font-body font-semibold text-sm hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Solicitar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default ServiciosPage;
