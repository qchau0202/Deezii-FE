import React, { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const ExploreSection = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.explore;
  const genres = t.genres;

  // Map English genre keys to placeholder images for both languages
  const genreKeys = [
    "Art",
    "Collectibles",
    "Metaverse",
    "Art Painting",
    "Virtual Worlds",
    "Hyperrealism",
  ];

  // Map the translated genre to the English key for image lookup
  const genreKeyMap = genres.reduce((acc, label, idx) => {
    acc[label] = genreKeys[idx];
    return acc;
  }, {});

  const images = {
    Art: Array(8).fill("https://placehold.co/300x200?text=Art"),
    Collectibles: Array(8).fill(
      "https://placehold.co/300x200?text=Collectibles"
    ),
    Metaverse: Array(8).fill("https://placehold.co/300x200?text=Metaverse"),
    "Art Painting": Array(8).fill(
      "https://placehold.co/300x200?text=Art+Painting"
    ),
    "Virtual Worlds": Array(8).fill(
      "https://placehold.co/300x200?text=Virtual+Worlds"
    ),
    Hyperrealism: Array(8).fill(
      "https://placehold.co/300x200?text=Hyperrealism"
    ),
  };

  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  useEffect(() => {
    setSelectedGenre(genres[0]);
  }, [genres]);

  const mappedKey = genreKeyMap[selectedGenre];
  const imagesToShow = mappedKey && images[mappedKey] ? images[mappedKey] : [];

  return (
    <section
      id="explore-section"
      className="min-h-screen flex items-center justify-center bg-white py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-extrabold mb-4 text-indigo-900">
          {t.title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.description}
        </p>
        <div className="flex justify-center mb-10">
          <div className="w-2/3 flex flex-wrap justify-center gap-4 p-2 border border-gray-200 rounded-lg">
            {genres.map((genre, index) => (
              <button
                key={index}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full transition-colors text-xs sm:text-sm md:text-base lg:text-md ${
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {imagesToShow.length > 0 ? (
            imagesToShow.map((image, index) => (
              <img
                key={`${selectedGenre}-${index}`}
                src={image}
                alt={`${selectedGenre} ${index + 1}`}
                className="w-32 h-20 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-56 lg:h-36 object-cover rounded-xl mx-auto mb-2"
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
