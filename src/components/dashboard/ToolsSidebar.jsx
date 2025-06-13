import { useState } from "react";
import {
  Input,
  Button,
  Dropdown,
  Menu,
  Tooltip,
  Switch,
  Slider,
  Select,
  message,
} from "antd";
import {
  AppstoreOutlined,
  BarsOutlined,
  PlusOutlined,
  UploadOutlined,
  BulbOutlined,
  QuestionCircleOutlined,
  BgColorsOutlined,
  SettingOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Most Liked", value: "liked" },
  { label: "A-Z", value: "az" },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Favorites", value: "favorites" },
  { label: "Posters", value: "poster" },
  { label: "Logos", value: "logo" },
  { label: "Stories", value: "story" },
  // Add more as needed
];

const tips = [
  "Tip: Use the search bar to quickly find your creations!",
  "Tip: Switch between Masonry and Grid view for your preferred layout.",
  "Tip: Use filters to narrow down your gallery.",
  "Tip: Adjust card size for a better browsing experience.",
  "Need help? Click the ? icon!",
];

const ToolsSidebar = () => {
  const [viewMode, setViewMode] = useState("masonry");
  const [theme, setTheme] = useState("light");
  const [cardSize, setCardSize] = useState(100);
  const [tipIndex, setTipIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [filter, setFilter] = useState("all");

  const handleThemeToggle = (checked) => {
    setTheme(checked ? "dark" : "light");
    message.success(`Switched to ${checked ? "Dark" : "Light"} Mode`);
  };

  const handleCardSize = (value) => {
    setCardSize(value);
  };

  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % tips.length);
  };

  return (
    <aside className="h-screen bg-white px-6 py-4 flex flex-col justify-between shadow-lg border-l border-gray-200 min-w-[270px]">
      <div className="flex-1 overflow-y-auto">
        {/* Gallery Controls */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-900 flex items-center gap-2">
            <SettingOutlined /> Gallery Controls
          </h2>
          <Input
            placeholder="Search creations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            prefix={<SmileOutlined className="text-indigo-600" />}
            className="mb-3"
            allowClear
            size="large"
          />
          <div className="flex gap-2 mb-3">
            <Select
              value={sort}
              onChange={setSort}
              style={{ minWidth: 120 }}
              size="large"
              suffixIcon={<SortAscendingOutlined />}
            >
              {sortOptions.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
            <Select
              value={filter}
              onChange={setFilter}
              style={{ minWidth: 120 }}
              size="large"
              suffixIcon={<FilterOutlined />}
            >
              {filterOptions.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
            <Tooltip
              title={viewMode === "masonry" ? "Masonry View" : "Grid View"}
            >
              <Button
                icon={
                  viewMode === "masonry" ? (
                    <AppstoreOutlined />
                  ) : (
                    <BarsOutlined />
                  )
                }
                onClick={() =>
                  setViewMode(viewMode === "masonry" ? "grid" : "masonry")
                }
                size="large"
                className="bg-white border-none shadow"
              />
            </Tooltip>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-900 flex items-center gap-2">
            <PlusOutlined /> Quick Actions
          </h2>
          <div className="flex gap-2">
            <Button
              icon={<UploadOutlined />}
              size="large"
              className="bg-indigo-600 text-white border-none"
            >
              Upload Image
            </Button>
            <Button
              icon={<PlusOutlined />}
              size="large"
              className="bg-white text-indigo-900 border-none shadow"
            >
              New Project
            </Button>
          </div>
        </div>

        {/* Personalization */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-900 flex items-center gap-2">
            <BgColorsOutlined /> Personalization
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-gray-700">Theme</span>
            <Switch
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<BulbOutlined />}
              checked={theme === "dark"}
              onChange={handleThemeToggle}
            />
            <span className="text-xs text-gray-400">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Card Size</span>
            <Slider
              min={80}
              max={200}
              value={cardSize}
              onChange={handleCardSize}
              style={{ width: 120 }}
            />
          </div>
        </div>

        {/* Quick Tips / Help */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-900 flex items-center gap-2">
            <QuestionCircleOutlined /> Quick Tips
          </h2>
          <div className="flex items-center gap-2 bg-indigo-50 rounded-lg p-3">
            <span className="text-indigo-700 text-sm">{tips[tipIndex]}</span>
            <Button
              icon={<SmileOutlined />}
              size="small"
              className="ml-auto bg-white border-none shadow"
              onClick={handleNextTip}
            />
          </div>
        </div>

        {/* Contact Support */}
        <div className="mb-8">
          <Button
            type="link"
            icon={<QuestionCircleOutlined />}
            className="text-indigo-700"
            onClick={() =>
              message.info("Contact support at support@deezii.com")
            }
          >
            Contact Support
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default ToolsSidebar;
