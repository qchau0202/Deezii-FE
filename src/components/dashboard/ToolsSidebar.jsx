import { useState, useContext } from "react";
import { Input, Button, Select, Tooltip } from "antd";
import {
  SearchOutlined,
  AppstoreOutlined,
  BarsOutlined,
  PlusOutlined,
  UploadOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  ExpandOutlined,
  FormatPainterOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { FaRegLightbulb } from "react-icons/fa";
import toast from "react-hot-toast";
import { useLanguage } from "../../contexts/LanguageContext";import languages from "../../config/languages";

const { Option } = Select;

const ToolsSidebar = () => {
  const { lang } = useLanguage();
  const t =
    lang === "vi"
      ? languages.vi.dashboard.toolsSidebar
      : languages.en.dashboard.toolsSidebar;

  const [viewMode, setViewMode] = useState("masonry");
  const [tipIndex, setTipIndex] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [imageCount, setImageCount] = useState(1);

  const handleNextTip = () => {
    setShowTip(true);
    setTipIndex((prev) => (prev + 1) % t.tips.length);
  };

  const handleImageCountChange = (increment) => {
    const newCount = imageCount + increment;

    if (newCount > 4) {
      toast.error(t.freeTrialLimit);
      return;
    }

    if (newCount < 1) {
      return;
    }

    setImageCount(newCount);
  };

  return (
    <aside className="h-screen bg-white px-6 py-8 flex flex-col shadow-lg border-l border-gray-200">
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-800">
            {t.generationSettings}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                {t.numberOfImages}
              </label>
              <div className="flex items-center gap-2">
                <Button
                  icon={<MinusOutlined />}
                  onClick={() => handleImageCountChange(-1)}
                  disabled={imageCount <= 1}
                  size="large"
                  className="flex-shrink-0"
                />
                <div className="flex-1 text-center">
                  <span className="text-lg font-semibold text-indigo-800">
                    {imageCount}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    {imageCount === 1 ? t.image : t.images}
                  </span>
                </div>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => handleImageCountChange(1)}
                  size="large"
                  className="flex-shrink-0"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                {t.imageRatio}
              </label>
              <Select
                defaultValue="1:1"
                style={{ width: "100%" }}
                size="large"
                suffixIcon={<ExpandOutlined />}
              >
                {t.imageRatioOptions.map((opt) => (
                  <Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Option>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                {t.artStyle}
              </label>
              <Select
                defaultValue="photo"
                style={{ width: "100%" }}
                size="large"
                suffixIcon={<FormatPainterOutlined />}
              >
                {t.styleOptions.map((opt) => (
                  <Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-800">
            {t.galleryControls}
          </h2>
          <Input
            placeholder={t.searchPlaceholder}
            prefix={<SearchOutlined className="text-gray-400" />}
            className="mb-4"
            size="large"
            allowClear
          />
          <div className="flex flex-wrap items-center gap-3">
            <Select
              defaultValue="newest"
              style={{ flex: "1 1 120px" }}
              size="large"
              suffixIcon={<SortAscendingOutlined />}
            >
              {t.sortOptions.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
            <Select
              defaultValue="all"
              style={{ flex: "1 1 120px" }}
              size="large"
              suffixIcon={<FilterOutlined />}
            >
              {t.filterOptions.map((opt) => (
                <Option key={opt.value} value={opt.value}>
                  {opt.label}
                </Option>
              ))}
            </Select>
            <Tooltip
              title={
                viewMode === "masonry" ? t.switchToGrid : t.switchToMasonry
              }
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
                className="flex-shrink-0"
              />
            </Tooltip>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-indigo-800">
            {t.quickActions}
          </h2>
          <div className="flex flex-col gap-3">
            <Button
              icon={<UploadOutlined />}
              size="large"
              className="w-full bg-indigo-600 text-white border-none hover:bg-indigo-700"
            >
              {t.uploadImage}
            </Button>
            <Button
              icon={<PlusOutlined />}
              size="large"
              className="w-full bg-gray-100 text-indigo-900 border"
            >
              {t.newProject}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {showTip && (
          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-3 rounded-r-lg mb-4 text-sm">
            <p>{t.tips[tipIndex]}</p>
          </div>
        )}
        <div className="flex justify-end">
          <Tooltip title={t.getTip}>
            <Button
              icon={<FaRegLightbulb />}
              onClick={handleNextTip}
              shape="circle"
              size="large"
            />
          </Tooltip>
        </div>
      </div>
    </aside>
  );
};

export default ToolsSidebar;
