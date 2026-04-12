import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import equipoPurificador from "@/assets/equipo-purificador.webp";
import equipoManguera from "@/assets/equipo-manguera.webp";
import equipoNasa from "@/assets/equipo-nasa.webp";
import equipoTubo from "@/assets/equipo-tubo.webp";
import equipoPh from "@/assets/equipo-ph.webp";
import equipoAspirador from "@/assets/equipo-aspirador.webp";
import pool10 from "@/assets/pool-10.webp";
import cuartoMaquinas from "@/assets/cuarto-maquinas.webp";
import piscinaLed from "@/assets/piscina-led.webp";
import electrobomba from "@/assets/electrobomba.webp";
import filtro from "@/assets/filtro.webp";
import transformador from "@/assets/transformador.webp";
import monitorVoltaje from "@/assets/monitor-voltaje.webp";
import panelArranque from "@/assets/panel de arranque.webp";
import desnatador from "@/assets/desnatador.webp";
import tomaAspiracion from "@/assets/toma de aspiracion.webp";
import rejillaFondo from "@/assets/reijlla de fondo.webp";
import inyectores from "@/assets/inyectores.webp";
import cascada from "@/assets/cascada.webp";
import registroDoble from "@/assets/registrodedobleuniversal.webp";
import accesoriosPvc from "@/assets/accesorios-pvc.webp";

const equipos = [
  { 
    img: cuartoMaquinas, 
    title: "Cuarto de Máquinas", 
    desc: "Instalación completa de equipos de filtración, bombas y válvulas. Espacio organizado que garantiza el mantenimiento óptimo y prolonga la vida útil de los sistemas.", 
    features: ["Diseño compacto", "Fácil acceso", "Durabilidad"],
    imgClassName: "w-full h-full object-cover"
  },
  { 
    img: electrobomba, 
    title: "Electrobomba de Alto Rendimiento", 
    desc: "Potente electrobomba diseñada para la recirculación y filtración eficiente del agua. Silenciosa, resistente a la corrosión y de bajo consumo energético.", 
    features: ["Autocebante", "Motor silencioso", "Alta eficiencia"] 
  },
  { 
    img: filtro, 
    title: "Filtro de Arena Profesional", 
    desc: "Sistema de filtración de alta capacidad que garantiza un agua cristalina eliminando las impurezas más finas. Construido en materiales resistentes a químicos y UV.", 
    features: ["Válvula multi-vía", "Agua cristalina", "Resistente UV"] 
  },
  { 
    img: cascada, 
    title: "Cascada Decorativa", 
    desc: "Elegante cascada que añade un toque de lujo y relajación a tu piscina. Crea un ambiente único con el sonido natural del agua en movimiento.", 
    features: ["Acero inoxidable", "Diseño moderno", "Efecto relajante"] 
  },
  { 
    img: piscinaLed, 
    title: "Reflector Subacuático LED", 
    desc: "Iluminación LED de alta intensidad para transformar tu piscina de noche. Colores vibrantes y mínimo consumo para crear ambientes espectaculares.", 
    features: ["Bajo consumo", "Colores RGB", "Larga duración"] 
  },
  { 
    img: transformador, 
    title: "Transformador de Seguridad", 
    desc: "Dispositivo esencial para la seguridad eléctrica de la iluminación. Convierte la energía a niveles seguros para uso subacuático.", 
    features: ["Reductor 110V-12V", "Caja estanca", "Norma de seguridad"] 
  },
  { 
    img: monitorVoltaje, 
    title: "Monitor de Voltaje Digital", 
    desc: "Protege tus equipos contra picos de tensión y fluctuaciones eléctricas. Monitoreo constante para evitar daños en bombas y sistemas electrónicos.", 
    features: ["Protección automática", "Corte por sobretensión", "Pantalla digital"] 
  },
  { 
    img: panelArranque, 
    title: "Arrancador / Panel de Control", 
    desc: "Tablero eléctrico centralizado para controlar el encendido automático de bombas, luces y otros accesorios. Fácil de operar y totalmente seguro.", 
    features: ["Programable", "Protección térmica", "Fácil manejo"] 
  },
  { 
    img: desnatador, 
    title: "Desnatador (Skimmer)", 
    desc: "Mantiene la superficie limpia recogiendo hojas, insectos y residuos flotantes. Indispensable para una buena circulación y limpieza del agua.", 
    features: ["ABS alta resistencia", "Trampa de hojas", "Fácil limpieza"] 
  },
  { 
    img: tomaAspiracion, 
    title: "Toma de Aspiración", 
    desc: "Punto de conexión seguro para mangueras y equipos de limpieza. Facilita el mantenimiento manual del fondo de la piscina.", 
    features: ["Tapa de seguridad", "Rosca estándar", "Resistente"] 
  },
  { 
    img: rejillaFondo, 
    title: "Rejilla de Fondo Anti-Vórtice", 
    desc: "Drenaje de seguridad diseñado para la succión profunda. Su diseño previene atrapamientos, garantizando la seguridad de los bañistas.", 
    features: ["Seguridad certificada", "Gran flujo", "Anti-atrapamiento"] 
  },
  { 
    img: inyectores, 
    title: "Inyectores de Retorno", 
    desc: "Boquillas que distribuyen el agua filtrada de manera uniforme. Mejoran la mezcla de químicos y mantienen el agua en constante movimiento.", 
    features: ["Direccionables", "Flujo constante", "Fácil instalación"] 
  },
  { 
    img: registroDoble, 
    title: "Registro Doble Universal", 
    desc: "Válvula de alta calidad con uniones universales que permiten el desmontaje rápido para mantenimiento sin necesidad de cortar tubería.", 
    features: ["Doble unión", "Cierre hermético", "Fácil mantenimiento"] 
  },
  { 
    img: accesoriosPvc, 
    title: "Accesorios y Tubería PVC", 
    desc: "Kit completo de accesorios: codos, tés, uniones y tubería de alta presión. Calidad industrial para una instalación hidráulica sin fugas.", 
    features: ["Presión SCH 40", "Ajuste perfecto", "Larga vida útil"] 
  },
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
      image={pool10}
      subtitle="Catálogo"
      title="Equipos para Piscinas"
      description="Todo lo que necesitas para el mantenimiento y cuidado de tu piscina. Equipos de alta calidad con garantía."
    />

    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {equipos.map((e, i) => {
            const hasAnimation = i === 0;
            return (
            <motion.div
              key={i}
              initial={hasAnimation ? { opacity: 0, y: 40 } : false}
              whileInView={hasAnimation ? { opacity: 1, y: 0 } : undefined}
              viewport={hasAnimation ? { once: true } : undefined}
              transition={hasAnimation ? { duration: 0.5 } : undefined}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border/30 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="bg-secondary/40 p-0 flex items-center justify-center aspect-square overflow-hidden">
                <img
                  src={e.img}
                  alt={`${e.title} - Equipos para piscinas Kawsay`}
                  className={e.imgClassName || "w-3/4 h-3/4 object-contain"}
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
                  href={`https://wa.me/573042573555?text=Hola%2C%20me%20interesa%20el%20producto%3A%20${encodeURIComponent(e.title)}`}
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
            );
          })}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default EquiposPage;