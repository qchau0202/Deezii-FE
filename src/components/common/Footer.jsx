import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const Footer = () => {
  const { lang } = useLanguage();
  const t = languages[lang].landing.footer;
  return (
    <footer className="flex items-center justify-center text-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide">
              {t.about}
            </h3>
            <ul className="space-y-3">
              {t.aboutLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-indigo-500 transition-colors text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wide">
              {t.resources}
            </h3>
            <ul className="space-y-3">
              {t.resourcesLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-indigo-500 transition-colors text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wide">
              {t.product}
            </h3>
            <ul className="space-y-3">
              {t.productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-indigo-500 transition-colors text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 uppercase tracking-wide">
              {t.connect}
            </h3>
            <ul className="space-y-3">
              {t.connectLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-indigo-500 transition-colors text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-indigo-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <p className="text-xl font-semibold ">Deezii</p>
            <p className="ml-6 text-gray-400">{t.location}</p>
          </div>
          <p className="text-lg">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
