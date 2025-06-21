// import { useState } from "react";
import { Dropdown, Menu } from "antd";
import {
  DownOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  BsStars,
  BsImage,
  BsChatLeftText,
  BsCollection,
  BsGrid3X3,
  BsBookmark,
  BsQuestionCircle,
  BsPerson,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import languages from "../../config/languages";

const NavigationSidebar = ({ selectedItem, onNavigate }) => {
  const { lang } = useLanguage();
  const t = languages[lang]?.dashboard;
  const nav = t.navigation || {};
  const navSection = nav.section || {};
  const navMain = nav.main || {};
  const navDiscover = nav.discover || {};
  const navSupport = nav.support || {};

  // const profileMenu = (
  //   <Menu className="bg-white shadow-lg rounded-lg border border-gray-200">
  //     <Menu.Item key="1" icon={<BsPerson className="text-indigo-600" />}>
  //       <span className="text-indigo-900">{t.profile.profile}</span>
  //     </Menu.Item>
  //     <Menu.Item key="2" icon={<BellOutlined className="text-indigo-600" />}>
  //       <span className="text-indigo-900">{t.profile.notifications}</span>
  //     </Menu.Item>
  //     <Menu.Item key="3" icon={<SettingOutlined className="text-indigo-600" />}>
  //       <span className="text-indigo-900">{t.profile.settings}</span>
  //     </Menu.Item>
  //     <Menu.Item key="4" icon={<LogoutOutlined className="text-red-600" />}>
  //       <span className="text-red-600">{t.profile.logout}</span>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="h-screen bg-white p-4 flex flex-col justify-between shadow-lg border-r border-gray-200">
      <div>
        <div className="flex items-center mb-4">
          <BsStars className="text-indigo-600 mr-2" size={24} />
          <Link to="/" className="text-xl font-bold text-indigo-900">
            Deezii
          </Link>
        </div>
        {/* Secondary Features */}
        <button
          className="w-full flex items-center p-3 text-md font-semibold rounded-lg transition-all duration-200 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg cursor-pointer"
          onClick={() => onNavigate("generate")}
        >
          <BsStars className="mr-2" size={18} />{" "}
          {navMain.generate || "Generate"}
        </button>
        <div className="mb-4">
          <h2 className="text-md font-bold mb-3 text-indigo-700">
            {navSection.discover || "Discover"}
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 text-gray-600 text-md font-semibold ${
                selectedItem === "explore"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("explore")}
            >
              <BsGrid3X3 className="mr-2" /> {navDiscover.explore || "Explore"}
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 text-md font-semibold ${
                selectedItem === "templates"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("templates")}
            >
              <BsBookmark className="mr-2" />{" "}
              {navDiscover.templates || "Templates"}
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 text-md font-semibold ${
                selectedItem === "collections"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("collections")}
            >
              <BsCollection className="mr-2" />{" "}
              {navDiscover.collections || "Collections"}
            </button>
          </div>
        </div>
        {/* Main Features */}
        <div className="mb-4">
          <h2 className="text-md font-bold mb-3 text-indigo-700">
            {navSection.main || "Main Features"}
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 text-gray-600 text-md font-semibold ${
                selectedItem === "myCreations"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("myCreations")}
            >
              <BsImage className="mr-2" size={18} />{" "}
              {navMain.myCreations || "My Creations"}
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 text-md font-semibold ${
                selectedItem === "chats"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("chats")}
            >
              <BsChatLeftText className="mr-2" /> {navMain.chats || "Chats"}
            </button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="mb-8">
          <h2 className="text-md font-bold mb-3 text-indigo-700">
            {navSection.support || "Support"}
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 text-gray-600 text-md font-semibold ${
                selectedItem === "help"
                  ? "bg-indigo-100 text-indigo-700"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("help")}
            >
              <BsQuestionCircle className="mr-2" />{" "}
              {navSupport.help || "Help Center"}
            </button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <Dropdown
      // menu={profileMenu}
      // open={isProfileMenuVisible}
      // onOpenChange={(visible) => setIsProfileMenuVisible(visible)}
      // placement="topRight"
      // trigger={["click"]}
      >
        <div className="flex items-center p-2 bg-indigo-50 rounded-lg text-indigo-900 hover:bg-indigo-100 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center mr-2">
            <BsPerson className="text-indigo-700" />
          </div>
          <span className="font-medium flex-1">Chou</span>
          <DownOutlined className="text-indigo-600" />
        </div>
      </Dropdown>
    </div>
  );
};

export default NavigationSidebar;
