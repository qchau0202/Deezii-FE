import { useState } from "react";
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

const NavigationSidebar = ({ selectedItem, onNavigate }) => {
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  const profileMenu = (
    <Menu className="bg-white shadow-lg rounded-lg border border-gray-200">
      <Menu.Item key="1" icon={<BsPerson className="text-indigo-600" />}>
        <span className="text-indigo-900">Profile</span>
      </Menu.Item>
      <Menu.Item key="2" icon={<BellOutlined className="text-indigo-600" />}>
        <span className="text-indigo-900">Notifications</span>
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined className="text-indigo-600" />}>
        <span className="text-indigo-900">Settings</span>
      </Menu.Item>
      <Menu.Item key="4" icon={<LogoutOutlined className="text-red-600" />}>
        <span className="text-red-600">Sign Out</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="h-screen bg-white p-4 flex flex-col justify-between shadow-lg border-r border-gray-200">
      <div>
        <div className="flex items-center mb-8">
          <BsStars className="text-indigo-600 mr-2" size={24} />
          <Link to="/" className="text-xl font-bold text-indigo-900">Deezii</Link>
        </div>

        {/* Main Features */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold mb-3 text-indigo-400 uppercase tracking-wider">
            Main Features
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 text-indigo-700 ${
                selectedItem === "generate"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("generate")}
            >
              <BsStars className="mr-2" /> Generate
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 ${
                selectedItem === "myCreations"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("myCreations")}
            >
              <BsImage className="mr-2" size={18} /> My Creations
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 ${
                selectedItem === "chats"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("chats")}
            >
              <BsChatLeftText className="mr-2" /> Chats
            </button>
          </div>
        </div>

        {/* Secondary Features */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold mb-3 text-indigo-400 uppercase tracking-wider">
            Discover
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 text-gray-600 ${
                selectedItem === "explore"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("explore")}
            >
              <BsGrid3X3 className="mr-2" /> Explore
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 ${
                selectedItem === "templates"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("templates")}
            >
              <BsBookmark className="mr-2" /> Templates
            </button>
            <button
              className={`w-full flex items-center p-2 text-gray-600 ${
                selectedItem === "collections"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("collections")}
            >
              <BsCollection className="mr-2" /> Collections
            </button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="mb-8">
          <h2 className="text-xs font-semibold mb-3 text-indigo-400 uppercase tracking-wider">
            Support
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center p-2 text-gray-600 ${
                selectedItem === "help"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors`}
              onClick={() => onNavigate("help")}
            >
              <BsQuestionCircle className="mr-2" /> Help Center
            </button>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <Dropdown
        menu={profileMenu}
        open={isProfileMenuVisible}
        onOpenChange={(visible) => setIsProfileMenuVisible(visible)}
        placement="topRight"
        trigger={["click"]}
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
