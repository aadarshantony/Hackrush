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
import Sponsors from "../components/Sponsors";

const Home = () => {
  return (
    <div className="w-full text-white font-sans overflow-x-hidden bg-[#0E0C16]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Sponsors />
      <WhyParticipateSection />
      <ThemesSection />
      <PrizeSection />
      <EventScheduleSection />
      <VenueSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Home;