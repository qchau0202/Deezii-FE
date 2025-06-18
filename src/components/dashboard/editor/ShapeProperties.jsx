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

const shapes = [
  {
    key: "rect",
    label: "Rectangle",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" fill="#6366f1" />
      </svg>
    ),
  },
  {
    key: "circle",
    label: "Circle",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" fill="#6366f1" />
      </svg>
    ),
  },
  {
    key: "arrow",
    label: "Arrow",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 10h10M10 6l4 4-4 4"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "line",
    label: "Line",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line
          x1="4"
          y1="16"
          x2="16"
          y2="4"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ShapeProperties() {
  const [shape, setShape] = useState("rect");
  const [border, setBorder] = useState(2);
  const [opacity, setOpacity] = useState(100);
  const [fill, setFill] = useState("indigo");
  const [borderColor, setBorderColor] = useState("indigo");
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">Shape</label>
        <div className="flex gap-2 justify-center mb-2 flex-wrap">
          {shapes.map((s) => (
            <button
              key={s.key}
              className={`w-10 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-indigo-100 transition-colors ${
                shape === s.key ? "ring-2 ring-indigo-400" : ""
              }`}
              title={s.label}
              onClick={() => setShape(s.key)}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Border</label>
          <Stepper value={border} setValue={setBorder} min={1} max={20} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Opacity</label>
          <Stepper value={opacity} setValue={setOpacity} min={0} max={100} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Fill</label>
          <div className="flex gap-1 mt-1 flex-wrap justify-center">
            <div
              className={`w-7 h-7 rounded-full bg-indigo-600 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-indigo-400 transition ${
                fill === "indigo" ? "ring-2 ring-indigo-400" : ""
              }`}
              onClick={() => setFill("indigo")}
            />
            <div
              className={`w-7 h-7 rounded-full bg-red-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-red-300 transition ${
                fill === "red" ? "ring-2 ring-red-300" : ""
              }`}
              onClick={() => setFill("red")}
            />
            <div
              className={`w-7 h-7 rounded-full bg-green-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-green-300 transition ${
                fill === "green" ? "ring-2 ring-green-300" : ""
              }`}
              onClick={() => setFill("green")}
            />
            <div
              className={`w-7 h-7 rounded-full bg-yellow-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-yellow-300 transition ${
                fill === "yellow" ? "ring-2 ring-yellow-300" : ""
              }`}
              onClick={() => setFill("yellow")}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">
            Border Color
          </label>
          <div className="flex gap-1 mt-1 flex-wrap justify-center">
            <div
              className={`w-7 h-7 rounded-full bg-indigo-600 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-indigo-400 transition ${
                borderColor === "indigo" ? "ring-2 ring-indigo-400" : ""
              }`}
              onClick={() => setBorderColor("indigo")}
            />
            <div
              className={`w-7 h-7 rounded-full bg-red-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-red-300 transition ${
                borderColor === "red" ? "ring-2 ring-red-300" : ""
              }`}
              onClick={() => setBorderColor("red")}
            />
            <div
              className={`w-7 h-7 rounded-full bg-green-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-green-300 transition ${
                borderColor === "green" ? "ring-2 ring-green-300" : ""
              }`}
              onClick={() => setBorderColor("green")}
            />
            <div
              className={`w-7 h-7 rounded-full bg-yellow-500 border-2 border-white shadow cursor-pointer hover:ring-2 hover:ring-yellow-300 transition ${
                borderColor === "yellow" ? "ring-2 ring-yellow-300" : ""
              }`}
              onClick={() => setBorderColor("yellow")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
