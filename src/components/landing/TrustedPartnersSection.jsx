import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const TrustedPartnersSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.trustedPartners;
  const partners = [
    {
      id: 1,
      logo: "https://placehold.co/400x150",
    },
    {
      id: 2,
      logo: "https://placehold.co/400x150",
    },
    {
      id: 3,
      logo: "https://placehold.co/400x150",
    },
    {
      id: 4,
      logo: "https://placehold.co/400x150",
    },
    {
      id: 5,
      logo: "https://placehold.co/400x150",
    },
    {
      id: 6,
      logo: "https://placehold.co/400x150",
    },
  ];

  return (
    <section
      id="collaboration-section"
      className="min-h-screen flex items-center justify-center bg-white py-16 border-t border-gray-200"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-900">
          {t.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
          {t.description}
        </p>
        <div className="grid grid-cols-6 gap-6 mb-8">
          {partners.slice(0, 6).map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              className="h-20 object-contain mb-2 opacity-70 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
        <div className="flex justify-center items-center text-gray-600 mt-8 text-lg gap-2">
          <p className="font-medium">{t.over}</p>
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg">
            500,000+
          </span>
          <p className="font-medium">{t.designsCreated}</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
