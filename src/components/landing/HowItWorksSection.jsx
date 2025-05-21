import React from "react";
import { Row, Col } from "antd";

const HowItWorksSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-indigo-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-md">
          Generate AI Images In Just <span className="bg-white rounded-full text-indigo-800 px-4">4</span> Steps
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Follow these simple steps to create stunning AI-generated images
          effortlessly.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://placehold.co/600x600"
              alt="AI Image Generation"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-4 text-xl font-semibold">
                    01
                  </div>
                  <h1 className="text-2xl font-semibold text-indigo-800">
                    Choose Your Style
                  </h1>
                </div>
                <p className="text-gray-600 text-start">
                  Select a style or genre for your AI-generated image.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-4 text-xl font-semibold">
                    02
                  </div>
                  <h1 className="text-2xl font-semibold text-indigo-800">
                    Input Your Prompt
                  </h1>
                </div>
                <p className="text-gray-600 text-start">
                  Enter a detailed description or prompt to guide the AI in
                  creating your desired image.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-4 text-xl font-semibold">
                    03
                  </div>
                  <h1 className="text-2xl font-semibold text-indigo-800">
                    Generate the Image
                  </h1>
                </div>
                <p className="text-gray-600 text-start">
                  Let the AI process your prompt and generate a unique image
                  based on your input.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-4 text-xl font-semibold">
                    04
                  </div>
                  <h1 className="text-2xl font-semibold text-indigo-800">
                    Download and Share
                  </h1>
                </div>
                <p className="text-gray-600 text-start">
                  Download your AI-generated image and share your creation with
                  the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;