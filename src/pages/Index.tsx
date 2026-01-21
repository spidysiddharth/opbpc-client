import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import InitiativesSection from "@/components/InitiativesSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <InitiativesSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
