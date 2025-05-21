import React from "react";
import { Row, Col } from "antd";

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-16 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-900 drop-shadow-md">
          Trusted by Many Creators
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Hear what our diverse community of creators has to say about their
          experience.
        </p>
        <div className="flex justify-center items-center gap-2 text-lg md:text-xl mb-12">
          <span className="bg-indigo-500 text-white rounded p-2">+1000</span>
          <p>Trusted Creators</p>
        </div>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="https://placehold.co/120x120"
                alt="Creator 1"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-gray-600 italic mb-4 text-lg">
                "This tool transformed my workflow with its ease of use!"
              </p>
              <h3 className="text-xl font-semibold text-indigo-800">
                Sofia Reed
              </h3>
              <p className="text-gray-600">Graphic Designer</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="https://placehold.co/120x120"
                alt="Creator 2"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-gray-600 italic mb-4 text-lg">
                "Amazing results that elevated my projects instantly!"
              </p>
              <h3 className="text-xl font-semibold text-indigo-800">
                Noah Carter
              </h3>
              <p className="text-gray-600">Content Creator</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <img
                src="https://placehold.co/120x120"
                alt="Creator 3"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <p className="text-gray-600 italic mb-4 text-lg">
                "Perfect for quick and professional designs! I highly recommend it."
              </p>
              <h3 className="text-xl font-semibold text-indigo-800">
                Emma Lopez
              </h3>
              <p className="text-gray-600">Illustrator</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TestimonialsSection;