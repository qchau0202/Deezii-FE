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
    <Tooltip title={tooltipText} placement="bottom">
      <button
        className={`flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
          isGradient ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" : "text-gray-600 hover:bg-indigo-50"
        }`}
        onClick={() => onNavigate(itemName)}
      >
        <span className="mr-2">{icon}</span>
        <span className="hidden sm:inline">{tooltipText}</span>
      </button>
    </Tooltip>
  );

  const navMenuItems = [
    {
      key: "generate",
      label: <span>{navMain.generate || "Generate"}</span>,
      icon: <BsStars size={16} />,
      onClick: () => onNavigate("generate"),
    },
    {
      key: "explore",
      label: <span>{navDiscover.explore || "Explore"}</span>,
      icon: <BsGrid3X3 />,
      onClick: () => onNavigate("explore"),
    },
    {
      key: "templates",
      label: <span>{navDiscover.templates || "Templates"}</span>,
      icon: <BsBookmark />,
      onClick: () => onNavigate("templates"),
    },
    {
      key: "collections",
      label: <span>{navDiscover.collections || "Collections"}</span>,
      icon: <BsCollection />,
      onClick: () => onNavigate("collections"),
    },
    {
      key: "myCreations",
      label: <span>{navMain.myCreations || "My Creations"}</span>,
      icon: <BsImage size={16} />,
      onClick: () => onNavigate("myCreations"),
    },
    {
      key: "chats",
      label: <span>{navMain.chats || "Chats"}</span>,
      icon: <BsChatLeftText />,
      onClick: () => onNavigate("chats"),
    },
    {
      key: "help",
      label: <span>{navSupport.help || "Help Center"}</span>,
      icon: <BsQuestionCircle />,
      onClick: () => onNavigate("help"),
    },
  ];

  return (
    <div className="w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-30 shadow border-b border-gray-200">
      <div className="max-w-full px-2 sm:px-4">
        <div className="flex items-center justify-between py-2 gap-2">
          <div className="flex items-center gap-2">
            <Dropdown
              placement="bottomLeft"
              trigger={["click"]}
              menu={{
                items: navMenuItems,
                onClick: ({ key }) => {
                  const found = navMenuItems.find((i) => i.key === key);
                  if (found && found.onClick) found.onClick();
                },
              }}
            >
              <button className="flex items-center gap-2 p-2 rounded-lg text-indigo-700 hover:bg-indigo-50 cursor-pointer" aria-label="Open menu">
                <AiOutlineMenuUnfold size={22} />
              </button>
            </Dropdown>
          </div>
          <div>
            <Dropdown placement="bottomRight" trigger={["click"]}>
              <div className="flex items-center p-2 bg-indigo-50 rounded-lg text-indigo-900 hover:bg-indigo-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center mr-2">
                  <BsPerson className="text-indigo-700" />
                </div>
                <span className="font-medium hidden md:inline">Chou</span>
                <DownOutlined className="text-indigo-600 hidden md:inline" />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSidebar;
