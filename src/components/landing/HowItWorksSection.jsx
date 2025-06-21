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
      className="h-screen flex flex-col justify-center items-center bg-indigo-900"
    >
      <div className="mx-auto px-6 text-center mt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          {title}
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          {t.description}
        </p>
        <div className="flex justify-center gap-6">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://placehold.co/800x400"
              alt="AI Image Generation"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-5">
              {t.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-4 text-base font-semibold">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h1 className="text-md font-semibold text-indigo-800">
                      {step.title}
                    </h1>
                  </div>
                  <p className="text-gray-600 text-start text-sm">
                    {step.desc}
                  </p>
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
