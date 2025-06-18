import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.hero;
  return (
    <section
      id="home-section"
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/herobg_3.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-lg sm:text-xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
          {t.title1}
          <br />
          {t.title2}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          {t.description}
        </p>
        <a
          href="/dashboard"
          className="bg-indigo-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-indigo-600 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
