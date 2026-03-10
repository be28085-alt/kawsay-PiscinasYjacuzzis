import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import JacuzziSection from "@/components/JacuzziSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import pool1 from "@/assets/pool-1.jpeg";

const JacuzzisPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      image={pool1}
      subtitle="Relax Total"
      title="Jacuzzis & Spa"
      description="Diseñamos e instalamos jacuzzis de lujo con sistema de hidromasaje, iluminación cromática y acabados premium."
    />
    <JacuzziSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default JacuzzisPage;
