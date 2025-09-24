import React from "react";
import { Volume2 } from "lucide-react";

interface Props {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function VolumeControls({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3 w-full">
      <Volume2 className="text-cloud-50 h-5 w-5" />
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        aria-label="Volume"
        className="slider w-full appearance-none outline-none"
      />
    </div>
  );
}
