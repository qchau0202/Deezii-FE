// import React from "react";
// import Header from "../components/common/Header";
// import HeroSection from "../components/landing/HeroSection";
// import Footer from "../components/common/Footer";

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <Header />
//       <HeroSection
//         title="Unleash Creativity with AI-Powered Images"
//         subtitle="Deezii helps small businesses create stunning, professional images in seconds using AI—no design skills needed."
//         buttonText="Generate Your Image"
//         buttonLink="#"
//       />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import CallToActionSection from "../components/landing/CallToActionSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TeamSection from "../components/landing/TeamSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import TrustedPartnersSection from "../components/landing/TrustedPartnersSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HeroSection from "../components/landing/HeroSection";
import PlaygroundSection from "../components/landing/PlayGroundSection";
import ExploreSection from "../components/landing/ExploreSection";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <HeroSection
        title="Unleash Creativity with AI-Powered Images"
        subtitle="Deezii helps small businesses create stunning, professional images in seconds using AI—no design skills needed."
        buttonText="Generate Your Image"
        buttonLink="#"
      />
      <ExploreSection/>
      <HowItWorksSection />
      {/* <PlaygroundSection /> */}
      <TrustedPartnersSection />
      <TeamSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;