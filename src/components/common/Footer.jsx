import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center text-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide">
              About Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Templates Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wide">
              Connect with Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Newsletter Signup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition-colors text-lg">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-indigo-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className ="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <p className="text-xl font-semibold ">Deezii</p>
            <p className="ml-6 text-gray-400">HCM | Vietnam</p>
          </div>
          <p className="text-lg">© 2025 Deezii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;