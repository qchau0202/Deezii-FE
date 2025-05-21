import React from "react";
import { Button } from "antd";

const CallToActionSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-indigo-900 text-white text-center py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Create Your Masterpiece?
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Transform your ideas into high-quality designs with ease.
        </p>
        {/* <Button
          type="primary"
          size="large"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started - It’s Free!
        </Button> */}
        <button>
          <a
            href="#"
            className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg"
          >
            Get Started - It’s Free!
          </a>
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;