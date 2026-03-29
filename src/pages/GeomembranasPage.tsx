import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import GeomembranasSection from "@/components/GeomembranasSection";
import pool14 from "@/assets/pool-14.webp";

const GeomembranasPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      image={pool14}
      subtitle="Recubrimiento Premium"
      title="Geomembranas"
      description="Recubrimientos impermeables de alta calidad para piscinas. Durabilidad, estética y protección total con garantía de hasta 15 años."
    />

    <GeomembranasSection />

    <Footer />
  </div>
);

export default GeomembranasPage;
