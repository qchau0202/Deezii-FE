// import { useState } from "react";
import { Dropdown, Tooltip } from "antd";
import {
  DownOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
  PlusOutlined,
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
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const NavigationSidebar = ({
  selectedItem,
  onNavigate,
  collapsed,
  onToggleCollapse,
}) => {
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

  const NavButton = ({ itemName, icon, tooltipText, isGradient = false }) => (
    <Tooltip title={collapsed ? tooltipText : ""} placement="right">
      <button
        className={`w-full flex items-center p-3 text-md font-semibold rounded-lg transition-all duration-200 my-2 cursor-pointer ${
          collapsed ? "justify-center" : ""
        } ${
          isGradient
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
            : selectedItem === itemName
            ? "bg-indigo-100 text-indigo-700"
            : "text-gray-600 hover:bg-indigo-50"
        }`}
        onClick={() => onNavigate(itemName)}
      >
        <span className={!collapsed ? "mr-2" : ""}>{icon}</span>
        {!collapsed && <span>{tooltipText}</span>}
      </button>
    </Tooltip>
  );

  return (
    <div
      className={`h-screen bg-white p-2 flex flex-col justify-between shadow-lg border-r border-gray-200 transition-all duration-300 ease-in-out ${
        collapsed ? "w-[72px]" : "w-64"
      }`}
    >
      <div>
        <div
          className={`flex items-center mb-4 p-2 ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >
          {!collapsed && (
            <Link
              to="/"
              className="text-xl font-bold text-indigo-900 flex items-center"
            >
              <BsStars className="text-indigo-600 mr-2" size={24} />
              Deezii
            </Link>
          )}
          <button
            onClick={onToggleCollapse}
            className="text-indigo-600 hover:bg-indigo-100 p-1 rounded-full"
          >
            {collapsed ? (
              <AiOutlineMenuUnfold size={24} />
            ) : (
              <AiOutlineMenuFold size={24} />
            )}
          </button>
        </div>

        <NavButton
          itemName="generate"
          icon={
            collapsed ? (
              <PlusOutlined style={{ fontSize: "18px" }} />
            ) : (
              <BsStars size={18} />
            )
          }
          tooltipText={navMain.generate || "Generate"}
          isGradient
        />

        {!collapsed && (
          <h2 className="text-md font-bold my-3 text-indigo-700 px-2">
            {navSection.discover || "Discover"}
          </h2>
        )}
        <NavButton
          itemName="explore"
          icon={<BsGrid3X3 />}
          tooltipText={navDiscover.explore || "Explore"}
        />
        <NavButton
          itemName="templates"
          icon={<BsBookmark />}
          tooltipText={navDiscover.templates || "Templates"}
        />
        <NavButton
          itemName="collections"
          icon={<BsCollection />}
          tooltipText={navDiscover.collections || "Collections"}
        />

        {!collapsed && (
          <h2 className="text-md font-bold my-3 text-indigo-700 px-2">
            {navSection.main || "Main Features"}
          </h2>
        )}
        <NavButton
          itemName="myCreations"
          icon={<BsImage size={18} />}
          tooltipText={navMain.myCreations || "My Creations"}
        />
        <NavButton
          itemName="chats"
          icon={<BsChatLeftText />}
          tooltipText={navMain.chats || "Chats"}
        />

        {!collapsed && (
          <h2 className="text-md font-bold my-3 text-indigo-700 px-2">
            {navSection.support || "Support"}
          </h2>
        )}
        <NavButton
          itemName="help"
          icon={<BsQuestionCircle />}
          tooltipText={navSupport.help || "Help Center"}
        />
      </div>

      <Dropdown placement="topRight" trigger={["click"]}>
        <div
          className={`flex items-center p-2 bg-indigo-50 rounded-lg text-indigo-900 hover:bg-indigo-100 transition-colors cursor-pointer ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div
            className={`w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center ${
              !collapsed ? "mr-2" : ""
            }`}
          >
            <BsPerson className="text-indigo-700" />
          </div>
          {!collapsed && <span className="font-medium flex-1">Chou</span>}
          {!collapsed && <DownOutlined className="text-indigo-600" />}
        </div>
      </Dropdown>
    </div>
  );
};

export default NavigationSidebar;
