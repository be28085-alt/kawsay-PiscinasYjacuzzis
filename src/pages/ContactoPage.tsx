import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import pool3 from "@/assets/pool-3.png";

const ContactoPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      image={pool3}
      subtitle="Hablemos"
      title="Contáctanos"
      description="Estamos listos para ayudarte a hacer realidad el proyecto de tus sueños."
    />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default ContactoPage;
