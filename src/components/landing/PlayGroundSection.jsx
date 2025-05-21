import React from "react";

const PlaygroundSection = () => {
  return (
    <section
      id="playground"
      className="min-h-screen flex items-center justify-center bg-indigo-900 text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div>
          <div className="text-center mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-md">
              Start Creating with Deezii
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-lg text-center mx-auto">
              Transform your ideas into stunning images with our AI—perfect for
              small businesses, no expertise required.
            </p>
            <div className="flex justify-center items-center mb-6">
              <div className="flex w-full max-w-md bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <input
                  type="text"
                  placeholder="Enter your image idea"
                  className="flex-1 p-4 outline-none text-lg text-gray-700 placeholder-gray-400 bg-transparent"
                />
                <button className="bg-indigo-500 text-white px-6 py-3 font-semibold hover:bg-indigo-600 transition-all rounded-r-xl">
                  Generate
                </button>
              </div>
            </div>
            <a
              href="#"
              className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg"
            >
              Customize Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;