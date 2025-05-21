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
  BsChatLeftText,
  BsImage,
  BsGear,
  BsQuestionCircle,
  BsFillStarFill,
  BsArchive,
  BsPlusLg,
} from "react-icons/bs";

const NavigationSidebar = () => {
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("allChats");

  const profileMenu = (
    <Menu className="bg-white shadow-lg rounded-lg border border-gray-200">
      <Menu.Item key="2" icon={<BellOutlined className="text-indigo-600" />}>
        <div className="flex justify-between items-center text-indigo-900">
          <span>Notifications</span>
        </div>
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined className="text-indigo-600" />}>
        <span className="text-indigo-900">Preferences</span>
      </Menu.Item>
      <Menu.Item key="4" icon={<LogoutOutlined className="text-red-600" />}>
        <span className="text-red-600">Sign Out</span>
      </Menu.Item>
    </Menu>
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-64 bg-white p-4 flex flex-col justify-between shadow-lg border-r border-gray-200">
      <div>
        <div className="flex items-center mb-6">
          <BsStars className="text-indigo-600 mr-2" size={24} />
          <h1 className="text-xl font-bold text-indigo-900">Deezii</h1>
        </div>
        <div className="space-y-1">
          <button
            className={`w-full flex items-center p-2 text-indigo-700 ${
              selectedItem === "generate"
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-50"
            } rounded-lg transition-colors`}
            onClick={() => handleItemClick("generate")}
          >
            <BsStars className="mr-2" /> Generate
          </button>
          <button
            className={`w-full flex items-center p-2 text-gray-600 ${
              selectedItem === "myImages"
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-50"
            } rounded-lg transition-colors`}
            onClick={() => handleItemClick("myImages")}
          >
            <BsImage className="mr-2" size={18} /> My Images
          </button>
          <button
            className={`w-full flex items-center p-2 text-gray-600 ${
              selectedItem === "explore"
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-50"
            } rounded-lg transition-colors`}
            onClick={() => handleItemClick("explore")}
          >
            <BsStars className="mr-2" /> Explore
          </button>
          <button
            className={`w-full flex items-center p-2 text-gray-600 ${
              selectedItem === "settings"
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-50"
            } rounded-lg transition-colors`}
            onClick={() => handleItemClick("settings")}
          >
            <BsGear className="mr-2" /> Settings
          </button>
          <button
            className={`w-full flex items-center p-2 text-gray-600 ${
              selectedItem === "support"
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-50"
            } rounded-lg transition-colors`}
            onClick={() => handleItemClick("support")}
          >
            <BsQuestionCircle className="mr-2" /> Support
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-base font-semibold mb-3 text-indigo-600">
            Conversations
          </h2>
          <div className="space-y-1">
            <button
              className={`w-full flex items-center justify-between p-2 ${
                selectedItem === "allChats"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors text-indigo-900`}
              onClick={() => handleItemClick("allChats")}
            >
              <div className="flex items-center">
                <BsChatLeftText className="mr-2" />
                <span>All Chats</span>
              </div>
              <span className="bg-indigo-600 text-white text-sm rounded-full px-2 py-0.5">
                23
              </span>
            </button>
            <button
              className={`w-full flex items-center p-2 ${
                selectedItem === "favourites"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors text-gray-600`}
              onClick={() => handleItemClick("favourites")}
            >
              <BsFillStarFill className="mr-2" /> Favourites
            </button>
            <button
              className={`w-full flex items-center p-2 ${
                selectedItem === "archived"
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-50"
              } rounded-lg transition-colors text-gray-600`}
              onClick={() => handleItemClick("archived")}
            >
              <BsArchive className="mr-2" /> Archived
            </button>
            <button
              className="w-full flex items-center p-2 hover:bg-indigo-50"
              onClick={() => handleItemClick("newChat")}
            >
              <BsPlusLg className="mr-2" /> New Chat
            </button>
          </div>
        </div>
      </div>
      <Dropdown
        overlay={profileMenu}
        visible={isProfileMenuVisible}
        onVisibleChange={(visible) => setIsProfileMenuVisible(visible)}
        placement="topRight"
        trigger={["click"]}
      >
        <div className="flex items-center p-2 bg-indigo-50 rounded-lg text-indigo-900 hover:bg-indigo-100 transition-colors cursor-pointer">
          <div className="w-8 h-8 bg-indigo-200 rounded-full flex items-center justify-center mr-2">
            <BsStars className="text-indigo-700" />
          </div>
          <span className="font-medium flex-1">Chou</span>
          <DownOutlined className="text-indigo-600" />
        </div>
      </Dropdown>
    </div>
  );
};

export default NavigationSidebar;