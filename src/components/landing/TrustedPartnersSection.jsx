import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";

const TrustedPartnersSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.trustedPartners;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Trigger slightly before the section is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      id: 1,
      name: "Partner 1",
    },
    {
      id: 2,
      name: "Partner 2",
    },
    {
      id: 3,
      name: "Partner 3",
    },
    {
      id: 4,
      name: "Partner 4",
    },
    {
      id: 5,
      name: "Partner 5",
    },
    {
      id: 6,
      name: "Partner 6",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="collaboration-section"
      className="h-screen flex flex-col justify-center bg-white py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-900">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          {t.description}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          {partners.map((partner) => (
            <div key={partner.id} className="p-4">
              <img
                src="https://placehold.co/200x200"
                alt={partner.name}
                className="h-12 md:h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-indigo-800 font-medium text-xl mb-2">{t.over}</p>
          <p className="text-4xl font-bold text-indigo-600 mb-3">
            {isVisible && (
              <>
                <CountUp
                  from={0}
                  to={500}
                  separator=","
                  direction="up"
                  duration={1}
                />
                +
              </>
            )}
            {!isVisible && "0"}
          </p>
          <p className="text-indigo-800 font-medium text-xl">
            {t.designsCreated}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
