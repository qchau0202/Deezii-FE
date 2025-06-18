import CallToActionSection from "../components/landing/CallToActionSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TeamSection from "../components/landing/TeamSection";
import OurStorySection from "../components/landing/OurStorySection";
import TrustedPartnersSection from "../components/landing/TrustedPartnersSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/landing/HeroSection";
import ExploreSection from "../components/landing/ExploreSection";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <HeroSection />
      <ExploreSection />
      <HowItWorksSection />
      <TrustedPartnersSection />
      <TeamSection />
      <OurStorySection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
