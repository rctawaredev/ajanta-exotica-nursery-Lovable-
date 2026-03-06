import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GardenTypesSection from "@/components/GardenTypesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GardenTypesSection />
      <PortfolioSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
