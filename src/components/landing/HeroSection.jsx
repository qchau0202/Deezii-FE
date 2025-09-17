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
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6 leading-tight drop-shadow-2xl">
              {t.title1}
              <br />
              {t.title2}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 drop-shadow-md">
              {t.description}
            </p>
            <a
              href="/dashboard"
              className="inline-block bg-indigo-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-indigo-600 text-xs sm:text-sm md:text-base font-semibold transition-all duration-300"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
