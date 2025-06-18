import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { Row, Col } from "antd";

const HowItWorksSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.howItWorks;
  const stepCount = t.steps.length;
  const title = t.title.replace("{stepCount}", stepCount);

  return (
    <section
      id="tutorial-section"
      className="min-h-screen flex items-center justify-center bg-indigo-900 py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          {t.description}
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://placehold.co/600x600"
              alt="AI Image Generation"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              {t.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-4 text-xl font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h1 className="text-2xl font-semibold text-indigo-800">
                      {step.title}
                    </h1>
                  </div>
                  <p className="text-gray-600 text-start">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
