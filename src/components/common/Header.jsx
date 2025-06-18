import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  GlobalOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const LANGS = [
  {
    code: "en",
    label: "English",
    icon: <FaFlagUsa className="inline mr-2 text-lg" />,
  },
  {
    code: "vi",
    label: "Tiếng Việt",
    icon: <FaFlag className="inline mr-2 text-lg" />,
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { lang, changeLanguage, resetLanguage } = useLanguage();
  const t = languages[lang]?.header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    resetLanguage();
    navigate("/login");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveNav(sectionId.replace("-section", ""));
    }
  };

  const userMenuItems = [
    {
      key: "profile",
      label: (
        <div
          className="flex items-center px-2 py-1 text-gray-700 hover:text-indigo-700"
          style={{ minWidth: 140 }}
        >
          <UserOutlined className="mr-2 text-lg" />
          <span>{t.profile}</span>
        </div>
      ),
      onClick: () => navigate("/profile"),
      style: {
        cursor: "pointer",
        borderRadius: 6,
        margin: 2,
      },
    },
    {
      key: "settings",
      label: (
        <div
          className="flex items-center px-2 py-1 text-gray-700 hover:text-indigo-700"
          style={{ minWidth: 140 }}
        >
          <SettingOutlined className="mr-2 text-lg" />
          <span>{t.settings}</span>
        </div>
      ),
      onClick: () => navigate("/settings"),
      style: {
        cursor: "pointer",
        borderRadius: 6,
        margin: 2,
      },
    },
    {
      key: "logout",
      label: (
        <div
          className="flex items-center px-2 py-1 text-red-600"
          style={{ minWidth: 140 }}
        >
          <LogoutOutlined className="mr-2 text-lg" />
          <span>{t.logout}</span>
        </div>
      ),
      onClick: handleLogout,
      style: {
        background: "#fef2f2",
        color: "#dc2626",
        cursor: "pointer",
        borderRadius: 6,
        margin: 2,
      },
    },
  ];

  const langMenuItems = LANGS.map((l) => ({
    key: l.code,
    label: (
      <div
        className={`flex items-center px-2 py-1 ${
          lang === l.code ? "font-bold text-indigo-700" : "text-gray-700"
        }`}
        style={{ minWidth: 120 }}
      >
        {l.icon}
        <span className="flex-1">{l.label}</span>
        {lang === l.code && <CheckOutlined className="ml-2 text-indigo-600" />}
      </div>
    ),
    onClick: () => changeLanguage(l.code),
    style: {
      background: lang === l.code ? "#f0f5ff" : undefined,
      cursor: "pointer",
      borderRadius: 6,
      margin: 2,
    },
  }));

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      } py-4`}
    >
      <div>
        <div className="grid grid-cols-8 items-center px-2">
          <div className="col-span-2">
            <button
              onClick={() => scrollToSection("home-section")}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-indigo-700 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Deezii
            </button>
          </div>

          <div className="col-span-4 flex justify-center space-x-2 sm:space-x-4 md:space-x-6 items-center">
            <button
              onClick={() => scrollToSection("explore-section")}
              className={`text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 py-2 transition-colors relative cursor-pointer ${
                activeNav === "explore"
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {t.explore}
              {activeNav === "explore" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("tutorial-section")}
              className={`text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 py-2 transition-colors relative cursor-pointer ${
                activeNav === "tutorial"
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {t.tutorial}
              {activeNav === "tutorial" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("collaboration-section")}
              className={`text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 py-2 transition-colors relative cursor-pointer ${
                activeNav === "collaboration"
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {t.collaboration}
              {activeNav === "collaboration" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              )}
            </button>

            <button
              onClick={() => scrollToSection("team-section")}
              className={`text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 py-2 transition-colors relative cursor-pointer ${
                activeNav === "team"
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {t.about}
              {activeNav === "team" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection("ourstory-section")}
              className={`text-xs sm:text-sm md:text-base font-medium px-2 sm:px-3 py-2 transition-colors relative cursor-pointer ${
                activeNav === "ourstory"
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {t.ourstory}
              {activeNav === "ourstory" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"></span>
              )}
            </button>
          </div>

          <div className="col-span-2 flex items-center justify-end gap-4">
            <Dropdown
              menu={{ items: langMenuItems }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <button
                className="flex items-center px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 cursor-pointer"
                tabIndex={0}
              >
                <GlobalOutlined className="mr-1" />
                <span className="text-xs sm:text-sm md:text-base">
                  {LANGS.find((l) => l.code === lang)?.label}
                </span>
              </button>
            </Dropdown>
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
                  {user.display_name}
                </span>
                <Dropdown
                  menu={{ items: userMenuItems }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <button className="flex items-center text-white cursor-pointer">
                    <FaUserCircle className="text-indigo-500" size={32} />
                  </button>
                </Dropdown>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="flex items-center px-2 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 cursor-pointer"
              >
                {t.login}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
