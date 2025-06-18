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

export default function BrushProperties() {
  const [color, setColor] = useState("indigo");
  const [size, setSize] = useState(20);
  const [opacity, setOpacity] = useState(100);
  const [hardness, setHardness] = useState(50);
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">
          Brush Preview
        </label>
        <div className="w-16 h-6 rounded-full bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-900 mx-auto mb-2 border border-indigo-200" />
      </div>
      <div>
        <label className="block text-xs text-gray-500 mb-1">Color</label>
        <div className="flex flex-wrap gap-2 justify-center mt-1">
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
      <div className="flex flex-col gap-3 items-stretch">
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Size</label>
          <Stepper value={size} setValue={setSize} min={1} max={100} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Opacity</label>
          <Stepper value={opacity} setValue={setOpacity} min={0} max={100} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Hardness</label>
          <Stepper value={hardness} setValue={setHardness} min={0} max={100} />
        </div>
      </div>
    </div>
  );
}
