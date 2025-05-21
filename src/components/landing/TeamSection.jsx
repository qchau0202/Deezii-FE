import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-indigo-900 py-16 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white text-center">
          The Minds Behind the Magic
        </h2>
        <p className="text-lg md:text-xl text-white mb-12 text-center max-w-3xl mx-auto">
          A passionate team of artists, engineers, and innovators dedicated to
          redefining digital identity. We blend creativity and code to bring
          your AI-powered profile pictures to life.
        </p>
        <button className="bg-indigo-500 text-white rounded-full px-6 py-2 mb-12 block mx-auto hover:bg-indigo-600 transition-colors duration-300">
          See All Member
        </button>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-full sm:w-64">
            <img
              src="https://placehold.co/150x150"
              alt="Jackson Lee"
              className="w-48 mx-auto mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-black">Jackson Lee</h3>
            <p className="text-gray-600">AI Developer</p>
            <div className="flex justify-center gap-2 mt-2">
              <FaFacebookF className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-full sm:w-64">
            <img
              src="https://placehold.co/150x150"
              alt="Ava Thompson"
              className="w-48 mx-auto mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-black">Ava Thompson</h3>
            <p className="text-gray-600">Product Manager</p>
            <div className="flex justify-center gap-2 mt-2">
              <FaFacebookF className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center w-full sm:w-64">
            <img
              src="https://placehold.co/150x150"
              alt="Maya Nakamura"
              className="w-48 mx-auto mb-4 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-black">Maya Nakamura</h3>
            <p className="text-gray-600">Lead UX/UI Designer</p>
            <div className="flex justify-center gap-2 mt-2">
              <FaFacebookF className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              <FaLinkedinIn className="text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;