import { useState } from "react";

const aspectRatios = [
  { key: "free", label: "Free" },
  { key: "1:1", label: "1:1" },
  { key: "4:3", label: "4:3" },
  { key: "16:9", label: "16:9" },
];

const Stepper = ({ value, setValue, min, max, step = 1, unit = "" }) => (
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
      {unit}
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

export default function CropProperties() {
  const [aspect, setAspect] = useState("free");
  const [rotate, setRotate] = useState(0);
  const [zoom, setZoom] = useState(100);
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">
          Aspect Ratio
        </label>
        <div className="flex gap-2 mb-2">
          {aspectRatios.map((r) => (
            <button
              key={r.key}
              className={`px-3 py-1 rounded border text-xs font-semibold ${
                aspect === r.key
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-gray-100 border-gray-200 text-gray-700 hover:bg-indigo-100"
              } transition-colors`}
              onClick={() => setAspect(r.key)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col items-center flex-1">
          <label className="block text-xs text-gray-500 mb-1">Rotate</label>
          <Stepper
            value={rotate}
            setValue={setRotate}
            min={-180}
            max={180}
            step={1}
            unit="°"
          />
        </div>
        <div className="flex flex-col items-center flex-1">
          <label className="block text-xs text-gray-500 mb-1">Zoom</label>
          <Stepper
            value={zoom}
            setValue={setZoom}
            min={10}
            max={200}
            step={1}
            unit="%"
          />
        </div>
      </div>
    </div>
  );
}
