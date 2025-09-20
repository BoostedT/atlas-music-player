// src/components/PlayControls.jsx
import React from "react";
import {
  Rewind,
  FastForward,
  Shuffle,
  Play,
  Pause,
} from "lucide-react";


export default function PlayControls({
  speed = 1,
  isPlaying = false,
  canBack = false,
  onSpeed,
  onBack,
  onPlayPause,
  onForward,
  onShuffle,
}) {
  return (
    <div className="flex items-center justify-between w-full max-w-sm">
      {/* Speed */}
      <button
        type="button"
        onClick={onSpeed}
        className="text-lg font-semibold tracking-tight"
        aria-label="Change speed"
      >
        {speed}x
      </button>

      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        disabled={!canBack}
        aria-label="Back"
        className={`p-2 rounded-md ${
          canBack ? "text-black" : "text-gray-400"
        }`}
      >
        <Rewind className="w-7 h-7" />
      </button>

      {/* Play */}
      <button
        type="button"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="h-16 w-24 rounded-xl border border-black/80 flex items-center justify-center"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>

      {/* Forward */}
      <button
        type="button"
        onClick={onForward}
        aria-label="Forward"
        className="p-2 rounded-md text-black"
      >
        <FastForward className="w-7 h-7" />
      </button>

      {/* Shuffle */}
      <button
        type="button"
        onClick={onShuffle}
        aria-label="Shuffle"
        className="p-2 rounded-md text-black"
      >
        <Shuffle className="w-7 h-7" />
      </button>
    </div>
  );
}
