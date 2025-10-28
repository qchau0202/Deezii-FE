import { useState } from "react";
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

  const NavItem = ({ item, isSelected }) => (
    <button
      onClick={() => onNavigate(item.key)}
      className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
        isSelected
          ? "bg-indigo-100 text-indigo-700 border-l-4 border-indigo-600"
          : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700"
      }`}
    >
      <span className="mr-3">{item.icon}</span>
      <span className={collapsed ? "hidden" : ""}>{item.label}</span>
    </button>
  );

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      collapsed ? "w-16" : "w-64"
    } h-screen sticky top-0 z-30 flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <BsStars className="text-white" size={16} />
              </div>
              <span className="font-bold text-indigo-900">Deezii</span>
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <AiOutlineMenuUnfold size={18} /> : <AiOutlineMenuFold size={18} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navMenuItems.map((item) => (
          <NavItem
            key={item.key}
            item={item}
            isSelected={selectedItem === item.key}
          />
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <Dropdown
          placement="topRight"
          trigger={["click"]}
          menu={{
            items: [
              {
                key: "profile",
                label: "Profile",
                icon: <BsPerson />,
              },
              {
                key: "settings",
                label: "Settings",
                icon: <SettingOutlined />,
              },
              {
                key: "logout",
                label: "Logout",
                icon: <LogoutOutlined />,
                danger: true,
              },
            ],
          }}
        >
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center mr-3">
              <BsPerson className="text-indigo-700" />
            </div>
            {!collapsed && (
              <>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Chou</p>
                  <p className="text-xs text-gray-500">Free Plan</p>
                </div>
                <DownOutlined className="text-gray-400" size={12} />
              </>
            )}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavigationSidebar;
