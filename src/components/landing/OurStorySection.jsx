import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";
import { FaQuoteLeft } from "react-icons/fa";
import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";

const OurStorySection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.testimonials;
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

  return (
    <section
      ref={sectionRef}
      id="ourstory-section"
      className="h-screen flex flex-col justify-center bg-gray-50 py-16 md:py-20"
    >
      <div className="mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-indigo-900">
          {t.title}
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
          {t.description}
        </p>
        <div className="flex justify-center items-center gap-2 text-base md:text-xl text-gray-700 mb-12 md:mb-16">
          <span className="font-bold text-3xl md:text-4xl text-indigo-600">
            {isVisible && (
              <>
                <CountUp
                  from={0}
                  to={1000}
                  separator=","
                  direction="up"
                  duration={1}
                />
                +
              </>
            )}
            {!isVisible && "0+"}
          </span>
          <p>{t.statLabel}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {t.testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-1 basis-80 max-w-sm p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-indigo-100 text-4xl md:text-5xl z-0" />
                <p className="relative z-10 text-gray-700 italic text-sm md:text-base md:min-h-[4rem]">
                  {item.quote}
                </p>
              </div>
              <div className="">
                <img
                  src={`https://i.pravatar.cc/150?u=${item.name}`}
                  alt={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="text-lg md:text-xl font-bold text-indigo-800">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
