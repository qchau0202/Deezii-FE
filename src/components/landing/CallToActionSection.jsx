import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { Button } from "antd";

const CallToActionSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.cta;
  return (
    <section className="min-h-screen flex items-center justify-center bg-indigo-900 text-white text-center py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">{t.title}</h2>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto">
              {t.description}
            </p>
            <button>
              <a
                href="#"
                className="inline-block bg-indigo-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg"
              >
                {t.button}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
