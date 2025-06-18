import { useState } from "react";
import { Tooltip } from "antd";
import {
  UndoOutlined,
  RedoOutlined,
  SaveOutlined,
  DownloadOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ScissorOutlined,
  HighlightOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LineOutlined,
  PictureOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
// Import new property components
import TextProperties from "./editor/TextProperties";
import ShapeProperties from "./editor/ShapeProperties";
import CropProperties from "./editor/CropProperties";
import BrushProperties from "./editor/BrushProperties";
import FillProperties from "./editor/FillProperties";
import ImageProperties from "./editor/ImageProperties";

const iconBtnBase =
  "w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 text-indigo-700 bg-white hover:bg-indigo-100 hover:text-indigo-900";
const iconBtnActive =
  "!bg-indigo-500 !text-white shadow font-semibold hover:!bg-indigo-600 hover:!text-white";
const actionBtn =
  "flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors duration-200";
const exportBtn =
  "flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-700 border border-indigo-100 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-200";

const ImageEditorSection = ({ imageId }) => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    { icon: <ScissorOutlined />, name: "Crop", tooltip: "Crop Image" },
    { icon: <HighlightOutlined />, name: "Brush", tooltip: "Brush Tool" },
    { icon: <BgColorsOutlined />, name: "Fill", tooltip: "Fill Tool" },
    { icon: <FontSizeOutlined />, name: "Text", tooltip: "Add Text" },
    { icon: <LineOutlined />, name: "Shape", tooltip: "Add Shape" },
    { icon: <PictureOutlined />, name: "Image", tooltip: "Add Image" },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <button className={iconBtnBase}>
            <UndoOutlined />
          </button>
          <button className={iconBtnBase}>
            <RedoOutlined />
          </button>
          <div className="h-6 w-px bg-gray-200 mx-2" />
          <button className={iconBtnBase}>
            <ZoomInOutlined />
          </button>
          <button className={iconBtnBase}>
            <ZoomOutOutlined />
          </button>
          <button className={iconBtnBase}>
            <RotateLeftOutlined />
          </button>
          <button className={iconBtnBase}>
            <RotateRightOutlined />
          </button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className={actionBtn}>
            <SaveOutlined className="mr-1" /> Save
          </button>
          <button className={exportBtn}>
            <DownloadOutlined className="mr-1" /> Export
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Tools Sidebar */}
        <div className="w-16 bg-white border-r border-gray-200 p-2 flex flex-col items-center gap-2">
          {tools.map((tool) => (
            <Tooltip key={tool.name} title={tool.tooltip} placement="right">
              <button
                className={
                  selectedTool === tool.name
                    ? `${iconBtnBase} ${iconBtnActive}`
                    : iconBtnBase
                }
                onClick={() => setSelectedTool(tool.name)}
                aria-label={tool.tooltip}
              >
                {tool.icon}
              </button>
            </Tooltip>
          ))}
        </div>
        {/* Properties Panel */}
        <div className="w-64 bg-white border-l border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-indigo-900 mb-4">
            Properties
          </h3>
          {selectedTool ? (
            <div className="space-y-4">
              {selectedTool === "Crop" && <CropProperties />}
              {selectedTool === "Brush" && <BrushProperties />}
              {selectedTool === "Fill" && <FillProperties />}
              {selectedTool === "Text" && <TextProperties />}
              {selectedTool === "Shape" && <ShapeProperties />}
              {selectedTool === "Image" && <ImageProperties />}
            </div>
          ) : (
            <div className="text-gray-400 text-sm">
              Select a tool to see its properties
            </div>
          )}
        </div>
        {/* Canvas Area */}
        <div className="flex-1 p-4 flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg p-4 w-full h-full max-w-4xl max-h-[calc(100vh-12rem)] flex items-center justify-center">
            <div className="text-gray-400">
              Canvas Area - Image ID: {imageId}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditorSection;
