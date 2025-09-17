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
      className="min-h-screen flex flex-col justify-center bg-white py-16 md:py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 text-center">
          <div className="col-span-12">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-4 text-indigo-900">
              {t.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 max-w-4xl mx-auto">
              {t.description}
            </p>
          </div>
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              {partners.map((partner) => (
                <div key={partner.id} className="col-span-6 sm:col-span-4 md:col-span-2 p-2">
                  <img
                    src="https://placehold.co/200x200"
                    alt={partner.name}
                    className="mx-auto h-10 sm:h-12 md:h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12">
            <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <p className="text-indigo-800 font-medium text-lg md:text-xl mb-2">{t.over}</p>
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 mb-3">
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
              <p className="text-indigo-800 font-medium text-lg md:text-xl">
                {t.designsCreated}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
