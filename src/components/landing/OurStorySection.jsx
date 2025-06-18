import React from "react";
import { Row, Col } from "antd";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const OurStorySection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.testimonials;
  return (
    <section
      id="ourstory-section"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-16 border-t border-gray-200"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-900 drop-shadow-md">
          {t.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        <div className="flex justify-center items-center gap-2 text-lg md:text-xl mb-12">
          <span className="bg-indigo-500 text-white rounded p-2">{t.stat}</span>
          <p>{t.statLabel}</p>
        </div>
        <Row gutter={[32, 32]} justify="center">
          {t.testimonials.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.name}>
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <img
                  src={`https://placehold.co/120x120`}
                  alt={item.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <p className="text-gray-600 italic mb-4 text-lg">
                  "{item.quote}"
                </p>
                <h3 className="text-xl font-semibold text-indigo-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default OurStorySection;
