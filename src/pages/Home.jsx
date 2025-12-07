import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyParticipateSection from "../components/WhyParticipateSection";
import PrizeSection from "../components/PrizeSection";
import EventScheduleSection from "../components/EventScheduleSection";
import RulesSection from "../components/RulesSection";
import VenueSection from "../components/VenueSection";
import ThemesSection from "../components/ThemesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-x-hidden bg-[#0E0C16]">
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WhyParticipateSection />
        <ThemesSection />
        <PrizeSection />
        <EventScheduleSection />
        <RulesSection />
        <VenueSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
};

export default Home;