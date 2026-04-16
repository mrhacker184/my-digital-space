import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen tech-bg">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ToolsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
