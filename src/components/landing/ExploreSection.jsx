import React, { useState } from "react";

const ExploreSection = () => {
  const genres = [
    "Art",
    "Collectibles",
    "Metaverse",
    "Art Painting",
    "Virtual Worlds",
    "Hyperrealism",
  ];

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

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-900">
          Exploring The Future Of AI-Generated Images
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Ai-generated images will revolutionize creativity by blending realism,
          personalization, and artistic expression, transforming digital art,
          design, and content creation across industries.
        </p>
        <div className="flex justify-center mb-10">
          <div className="w-2/3 flex flex-wrap justify-center gap-4 p-2 border border-gray-200 rounded-lg">
            {genres.map((genre, index) => (
              <button
                key={index}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2 rounded-full transition-colors ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images[selectedGenre].map((image, index) => (
            <img
              src={image}
              alt={`${selectedGenre} ${index + 1}`}
              className="w-full object-cover rounded-2xl mb-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
