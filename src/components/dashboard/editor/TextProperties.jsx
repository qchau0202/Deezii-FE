import { useState } from "react";

const Stepper = ({ value, setValue, min, max, step = 1 }) => (
  <div className="flex items-center gap-2">
    <button
      onClick={() => setValue(Math.max(min, value - step))}
      className="w-8 h-8 rounded-full border border-indigo-200 bg-white text-indigo-600 font-bold shadow-sm hover:bg-indigo-500 hover:text-white transition-colors flex items-center justify-center"
      aria-label="Decrease"
    >
      -
    </button>
    <span className="w-10 text-center font-medium text-indigo-700">
      {value}
    </span>
    <button
      onClick={() => setValue(Math.min(max, value + step))}
      className="w-8 h-8 rounded-full border border-indigo-200 bg-white text-indigo-600 font-bold shadow-sm hover:bg-indigo-500 hover:text-white transition-colors flex items-center justify-center"
      aria-label="Increase"
    >
      +
    </button>
  </div>
);

const CustomSelect = ({ value, onChange, children }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className="w-full appearance-none rounded-lg border border-gray-300 bg-gray-50 text-sm px-3 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-colors cursor-pointer"
    >
      {children}
    </select>
    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-indigo-400">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </div>
);

const icon = {
  font: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 20h16M12 4v16m-6 0V4m12 16V4" />
    </svg>
  ),
  size: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 20h16M4 4h16" />
    </svg>
  ),
  weight: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M6 4h12v16H6z" />
    </svg>
  ),
  lineHeight: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M8 20V4m8 16V4M4 12h16" />
    </svg>
  ),
  letterSpacing: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 12h16M8 8v8m8-8v8" />
    </svg>
  ),
  decoration: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M4 19h16M4 5h16" />
    </svg>
  ),
  alignLeft: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="5" width="14" height="2" rx="1" />
      <rect x="3" y="11" width="10" height="2" rx="1" />
      <rect x="3" y="17" width="14" height="2" rx="1" />
    </svg>
  ),
  alignCenter: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="5" y="5" width="14" height="2" rx="1" />
      <rect x="7" y="11" width="10" height="2" rx="1" />
      <rect x="5" y="17" width="14" height="2" rx="1" />
    </svg>
  ),
  alignRight: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="7" y="5" width="14" height="2" rx="1" />
      <rect x="11" y="11" width="10" height="2" rx="1" />
      <rect x="7" y="17" width="14" height="2" rx="1" />
    </svg>
  ),
  shadow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="7" ry="3" fill="#6366f1" opacity="0.3" />
      <ellipse cx="12" cy="10" rx="7" ry="7" fill="#6366f1" />
    </svg>
  ),
  color: (
    <svg
      className="w-4 h-4 mr-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
};

export default function TextProperties() {
  const [fontSize, setFontSize] = useState(24);
  const [lineHeight, setLineHeight] = useState(1.2);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [font, setFont] = useState("sans");
  const [weight, setWeight] = useState("normal");
  const [decoration, setDecoration] = useState("none");
  const [color, setColor] = useState("indigo");
  const [shadow, setShadow] = useState(false);
  const [align, setAlign] = useState("left");
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          className="w-full rounded border-gray-300 text-sm px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            {icon.font}Font
          </label>
          <CustomSelect value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="sans">Sans</option>
            <option value="serif">Serif</option>
            <option value="mono">Mono</option>
          </CustomSelect>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            {icon.size}Size
          </label>
          <Stepper value={fontSize} setValue={setFontSize} min={8} max={72} />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            {icon.weight}Weight
          </label>
          <CustomSelect
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="light">Light</option>
          </CustomSelect>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            {icon.lineHeight}Line Height
          </label>
          <Stepper
            value={lineHeight}
            setValue={setLineHeight}
            min={1}
            max={3}
            step={0.1}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            {icon.decoration}Decoration
          </label>
          <CustomSelect
            value={decoration}
            onChange={(e) => setDecoration(e.target.value)}
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="line-through">Line Through</option>
            <option value="overline">Overline</option>
          </CustomSelect>
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">
            {icon.letterSpacing}Letter Spacing
          </label>
          <Stepper
            value={letterSpacing}
            setValue={setLetterSpacing}
            min={-5}
            max={20}
            step={0.5}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Align</label>
          <div className="flex gap-1">
            <button
              className={`w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-200 hover:bg-indigo-100 transition-colors ${
                align === "left" ? "ring-2 ring-indigo-400" : ""
              }`}
              title="Align Left"
              onClick={() => setAlign("left")}
            >
              {icon.alignLeft}
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-200 hover:bg-indigo-100 transition-colors ${
                align === "center" ? "ring-2 ring-indigo-400" : ""
              }`}
              title="Align Center"
              onClick={() => setAlign("center")}
            >
              {icon.alignCenter}
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-200 hover:bg-indigo-100 transition-colors ${
                align === "right" ? "ring-2 ring-indigo-400" : ""
              }`}
              title="Align Right"
              onClick={() => setAlign("right")}
            >
              {icon.alignRight}
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Shadow</label>
          <button
            onClick={() => setShadow((s) => !s)}
            className={`w-8 h-8 flex items-center justify-center rounded bg-gray-100 border border-gray-200 hover:bg-indigo-100 transition-colors ${
              shadow ? "ring-2 ring-indigo-400" : ""
            }`}
            title="Toggle Shadow"
          >
            {icon.shadow}
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="block text-xs text-gray-500 mb-1">
          {icon.color}Color
        </label>
        <div className="flex gap-2 mt-1">
          <div
            className={`w-7 h-7 rounded-full bg-indigo-600 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-indigo-400 transition ${
              color === "indigo" ? "ring-2 ring-indigo-400" : ""
            }`}
            onClick={() => setColor("indigo")}
          />
          <div
            className={`w-7 h-7 rounded-full bg-red-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-red-300 transition ${
              color === "red" ? "ring-2 ring-red-300" : ""
            }`}
            onClick={() => setColor("red")}
          />
          <div
            className={`w-7 h-7 rounded-full bg-green-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-green-300 transition ${
              color === "green" ? "ring-2 ring-green-300" : ""
            }`}
            onClick={() => setColor("green")}
          />
          <div
            className={`w-7 h-7 rounded-full bg-yellow-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-yellow-300 transition ${
              color === "yellow" ? "ring-2 ring-yellow-300" : ""
            }`}
            onClick={() => setColor("yellow")}
          />
        </div>
      </div>
    </div>
  );
}
