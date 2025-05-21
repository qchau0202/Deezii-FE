import React from "react";

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/herobg_3.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
          Unleash Creativity
          <br />
          with AI-Powered Images
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          Deezii helps small businesses create stunning, professional images in
          seconds using AI—no design skills needed.
        </p>
        <a
          href={buttonLink}
          className="bg-indigo-500 text-white px-10 py-4 rounded-full hover:bg-indigo-600 text-xl font-semibold transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;