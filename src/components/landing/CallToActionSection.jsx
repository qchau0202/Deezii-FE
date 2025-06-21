import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { Button } from "antd";

const CallToActionSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.cta;
  return (
    <section className="h-screen flex items-center justify-center bg-indigo-900 text-white text-center py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{t.title}</h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          {t.description}
        </p>
        <button>
          <a
            href="#"
            className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg"
          >
            {t.button}
          </a>
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
