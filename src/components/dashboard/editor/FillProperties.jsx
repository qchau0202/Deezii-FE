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

export default function FillProperties() {
  const [color, setColor] = useState("indigo");
  const [opacity, setOpacity] = useState(100);
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-gray-500 mb-1">Fill Color</label>
        <div className="flex gap-2 justify-center mt-1">
          <div
            className={`w-10 h-10 rounded-full bg-indigo-600 border-4 border-indigo-200 cursor-pointer hover:ring-2 hover:ring-indigo-400 transition ${
              color === "indigo" ? "ring-2 ring-indigo-400" : ""
            }`}
            onClick={() => setColor("indigo")}
          />
          <div
            className={`w-10 h-10 rounded-full bg-red-500 border-4 border-red-200 cursor-pointer hover:ring-2 hover:ring-red-300 transition ${
              color === "red" ? "ring-2 ring-red-300" : ""
            }`}
            onClick={() => setColor("red")}
          />
          <div
            className={`w-10 h-10 rounded-full bg-green-500 border-4 border-green-200 cursor-pointer hover:ring-2 hover:ring-green-300 transition ${
              color === "green" ? "ring-2 ring-green-300" : ""
            }`}
            onClick={() => setColor("green")}
          />
          <div
            className={`w-10 h-10 rounded-full bg-yellow-500 border-4 border-yellow-200 cursor-pointer hover:ring-2 hover:ring-yellow-300 transition ${
              color === "yellow" ? "ring-2 ring-yellow-300" : ""
            }`}
            onClick={() => setColor("yellow")}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <label className="block text-xs text-gray-500 mb-1">Opacity</label>
        <Stepper value={opacity} setValue={setOpacity} min={0} max={100} />
      </div>
    </div>
  );
}
