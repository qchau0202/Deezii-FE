import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } py-4`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-3xl font-extrabold text-indigo-700">Deezii</div>
        <nav className="space-x-8">
          <Link
            to="#hero"
            className="text-lg font-medium  hover:text-indigo-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-indigo-700 transition-colors"
          >
            Playground
          </Link>
          <Link
            to="#features"
            className="text-lg font-medium hover:text-indigo-700 transition-colors"
          >
            Features
          </Link>
          <Link
            to="#testimonials"
            className="text-lg font-medium hover:text-indigo-700 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            to="#cta"
            className="text-lg font-medium hover:text-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
