import { Button, Dropdown, Menu, Input, Tooltip, Collapse } from "antd";
import {
  BsLightning,
  BsAspectRatio,
  BsStarFill,
  BsCamera,
} from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { DownOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const ToolsSidebar = () => {
  const ratioMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <Tooltip title="Facebook/Instagram Post">
            <span className="text-indigo-900 text-sm">1:1</span>
          </Tooltip>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <Tooltip title="Instagram Feed">
            <span className="text-indigo-900 text-sm">4:5</span>
          </Tooltip>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <Tooltip title="Stories, Reels, TikTok">
            <span className="text-indigo-900 text-sm">9:16</span>
          </Tooltip>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <Tooltip title="Cover, YouTube Thumbnail">
            <span className="text-indigo-900 text-sm">16:9</span>
          </Tooltip>
        </div>
      </Menu.Item>
    </Menu>
  );

  const creativityLevelMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">0 (Low)</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">50 (Medium)</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">100 (High)</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const detailLevelMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">1 (Draft)</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">5 (Standard)</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">10 (Fine)</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const randomStartMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <Input
            defaultValue="1145"
            className="w-full bg-white text-indigo-900 border-indigo-200 text-sm"
          />
        </div>
      </Menu.Item>
    </Menu>
  );

  const versionMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <Input
            defaultValue="6.0"
            className="w-full bg-white text-indigo-900 border-indigo-200 text-sm"
          />
        </div>
      </Menu.Item>
    </Menu>
  );

  const styleMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Classic</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Modern</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const colorMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Warm</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Cool</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const artistMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Van Gogh</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Picasso</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const materialsMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Pearl, Foil</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Canvas, Oil</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const lightingMenu = (
    <Menu className="bg-white rounded-lg p-2 w-48 border border-gray-200">
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Backlight</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2 bg-indigo-50">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Glowing</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Direct Sunlight</span>
        </div>
      </Menu.Item>
      <Menu.Item className="hover:bg-indigo-50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white border-2 border-indigo-600 rounded-full mr-2"></div>
          <span className="text-indigo-900 text-sm">Neon Light</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-72 bg-white px-6 py-4 flex flex-col justify-between shadow-lg border-l border-gray-200 h-screen">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-6 text-indigo-900">
          Prompt Helper
        </h2>
        <Collapse defaultActiveKey={["1"]} className="space-y-4">
          <Panel
            header={
              <p className="text-sm font-medium text-indigo-600">Settings</p>
            }
            key="1"
          >
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Ratio
                </p>
                <Dropdown
                  overlay={ratioMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                    <span className="text-indigo-900 text-sm">4:5</span>
                    <DownOutlined className="text-indigo-600" />
                  </div>
                </Dropdown>
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Creativity Level
                </p>
                <Dropdown
                  overlay={creativityLevelMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                    <span className="text-indigo-900 text-sm">100</span>
                    <DownOutlined className="text-indigo-600" />
                  </div>
                </Dropdown>
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Detail Level
                </p>
                <Dropdown
                  overlay={detailLevelMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                    <span className="text-indigo-900 text-sm">1</span>
                    <DownOutlined className="text-indigo-600" />
                  </div>
                </Dropdown>
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Random Start
                </p>
                <Dropdown
                  overlay={randomStartMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                    <span className="text-indigo-900 text-sm">1145</span>
                    <DownOutlined className="text-indigo-600" />
                  </div>
                </Dropdown>
              </div>
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-2">
                  Version
                </p>
                <Dropdown
                  overlay={versionMenu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                    <span className="text-indigo-900 text-sm">6.0</span>
                    <DownOutlined className="text-indigo-600" />
                  </div>
                </Dropdown>
              </div>
            </div>
          </Panel>
        </Collapse>
        <div className="mt-6">
          <Collapse defaultActiveKey={["1"]} className="space-y-4">
            <Panel
              header={
                <p className="text-sm font-medium text-indigo-600">Lighting</p>
              }
              key="1"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-indigo-600 mb-2">
                    Styling
                  </p>
                  <Dropdown
                    overlay={lightingMenu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                      <span className="text-indigo-900 text-sm">Glowing</span>
                      <DownOutlined className="text-indigo-600" />
                    </div>
                  </Dropdown>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-600 mb-2">
                    Style
                  </p>
                  <Dropdown
                    overlay={styleMenu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                      <span className="text-indigo-900 text-sm">Modern</span>
                      <DownOutlined className="text-indigo-600" />
                    </div>
                  </Dropdown>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-600 mb-2">
                    Color
                  </p>
                  <Dropdown
                    overlay={colorMenu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                      <span className="text-indigo-900 text-sm">Cool</span>
                      <DownOutlined className="text-indigo-600" />
                    </div>
                  </Dropdown>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-600 mb-2">
                    Artist
                  </p>
                  <Dropdown
                    overlay={artistMenu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                      <span className="text-indigo-900 text-sm">Picasso</span>
                      <DownOutlined className="text-indigo-600" />
                    </div>
                  </Dropdown>
                </div>
                <div>
                  <p className="text-sm font-medium text-indigo-600 mb-2">
                    Materials
                  </p>
                  <Dropdown
                    overlay={materialsMenu}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <div className="flex items-center justify-between p-2 bg-white border border-indigo-200 rounded-lg cursor-pointer hover:bg-indigo-50">
                      <span className="text-indigo-900 text-sm">
                        Pearl, Foil
                      </span>
                      <DownOutlined className="text-indigo-600" />
                    </div>
                  </Dropdown>
                </div>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ToolsSidebar;