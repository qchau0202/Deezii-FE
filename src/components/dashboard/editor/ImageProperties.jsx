import { useState } from "react";

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

export default function ImageProperties() {
  const [scale, setScale] = useState(100);
  const [opacity, setOpacity] = useState(100);
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-semibold text-gray-700 mb-1">
          Upload/Replace
        </label>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-700"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Scale</label>
          <Stepper
            value={scale}
            setValue={setScale}
            min={10}
            max={300}
            step={1}
            unit="%"
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <label className="block text-xs text-gray-500 mb-1">Opacity</label>
          <Stepper value={opacity} setValue={setOpacity} min={0} max={100} />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button className="px-3 py-1 rounded bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
          Replace
        </button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors">
          Remove
        </button>
      </div>
    </div>
  );
}
