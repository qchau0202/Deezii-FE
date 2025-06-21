import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const ExploreSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.explore;
  const genres = t.genres;
  const scrollContainerRef = useRef(null);

  // Map English genre keys to placeholder images for both languages
  const genreKeys = [
    "Posters",
    "Collectibles",
    "Metaverse",
    "Art Painting",
    "Virtual Worlds",
    "Hyperrealism",
    "NFTs",
    "Digital Art",
    "3D Art",
    "2D Art",
    "Illustration",
    "Photography",
    "Digital Painting",
    "Digital Illustration",
  ];

  // Map the translated genre to the English key for image lookup
  const genreKeyMap = genres.reduce((acc, label, idx) => {
    acc[label] = genreKeys[idx];
    return acc;
  }, {});

  const images = {
    Posters: [
      "/mock_poster.png",
      "/mock_poster2.png",
      "/mock_poster3.png",
      "/mock_poster4.png",
      "/mock_poster5.png",
      "/mock_poster6.png",
      "/mock_poster7.png",
      "/mock_poster8.png",
    ],
    Collectibles: [
      "/mock_poster2.png",
      "/mock_poster3.png",
      "/mock_poster4.png",
      "/mock_poster.png",
    ],
    Metaverse: [
      "/mock_poster6.png",
      "/mock_poster3.png",
      "/mock_poster4.png",
      "/mock_poster5.png",
      "/mock_poster7.png",
    ],
    "Art Painting": [
      "/mock_poster4.png",
      "/mock_poster5.png",
      "/mock_poster6.png",
      "/mock_poster7.png",
      "/mock_poster8.png",
    ],
    "Virtual Worlds": [
      "/mock_poster5.png",
      "/mock_poster6.png",
      "/mock_poster7.png",
      "/mock_poster8.png",
    ],
    Hyperrealism: [
      "/mock_poster6.png",
      "/mock_poster7.png",
      "/mock_poster8.png",
    ],
  };

  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  useEffect(() => {
    setSelectedGenre(genres[0]);
  }, [genres]);

  // Create duplicated genres for infinite scroll effect
  const duplicatedGenres = [...genres, ...genres, ...genres];

  const mappedKey = genreKeyMap[selectedGenre];
  const imagesToShow = mappedKey && images[mappedKey] ? images[mappedKey] : [];

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [genres]);

  return (
    <section
      id="explore-section"
      className="flex items-center justify-center bg-white py-22"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-indigo-900">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-md text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-4xl overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 p-2 border border-gray-200 rounded-lg overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitScrollbar: { display: "none" },
              }}
            >
              {duplicatedGenres.map((genre, index) => (
                <button
                  key={`${genre}-${index}`}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full transition-colors text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap flex-shrink-0 ${
                    selectedGenre === genre
                      ? "bg-indigo-500 text-white hover:bg-indigo-600"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {imagesToShow.length > 0 ? (
            imagesToShow.map((image, index) => (
              <img
                key={`${selectedGenre}-${index}`}
                src={image}
                alt={`${selectedGenre} ${index + 1}`}
                className="rounded-xl mx-auto mb-2 hover:scale-105 transition-all duration-300"
              />
            ))
          ) : (
            <div className="col-span-4 text-gray-400 text-xs sm:text-sm md:text-base lg:text-md">
              No images found for this genre.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
