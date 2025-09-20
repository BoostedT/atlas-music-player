import React from "react";
import { Volume2 } from "lucide-react";


export default function VolumeControls({ value = 50, onChange }) {
  return (
    <div className="flex items-center gap-3 w-full max-w-sm">
        <Volume2 className="h-5 w-5" />

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full accent-slate-600"
        style={{ "--value": `${value}%` }}
        aria-label="Volume"
      />
      <span className="text-sm text-gray-600 w-8 text-right">{value}</span>
    </div>
  );
}
