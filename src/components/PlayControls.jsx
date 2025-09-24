import React from "react";
import { Rewind, FastForward, Shuffle, Play, Pause } from "lucide-react";

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
  const iconBtn =
    "size-12 rounded-lg flex items-center justify-center " +
    "transition transform hover:scale-110 active:scale-95 " +
    "focus:outline-none focus:ring-2 focus:ring-jelly-500";

  return (
    <div className="w-full flex items-center justify-center gap-10 md:gap-12">
      {/* Speed */}
      <button
        type="button"
        onClick={onSpeed}
        className="min-w-[2.5rem] text-lg font-semibold leading-none tracking-tight 
                   transition hover:text-jelly-400"
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
        className={
          canBack
            ? `${iconBtn} text-white hover:text-jelly-400`
            : "size-12 rounded-lg flex items-center justify-center text-gray-500 cursor-not-allowed"
        }
      >
        <Rewind className="w-7 h-7" />
      </button>

      {/* Play / Pause — slightly bigger, but still square so it centers visually */}
      <button
        type="button"
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
        className={`size-14 rounded-xl border flex items-center justify-center leading-none
                    transition hover:scale-105 active:scale-95
                    ${isPlaying
                      ? "bg-jelly-500 text-white border-jelly-500"
                      : "bg-white text-black border-black/80"}`}
      >
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>

      {/* Forward */}
      <button
        type="button"
        onClick={onForward}
        aria-label="Forward"
        className={`${iconBtn} text-white hover:text-jelly-400`}
      >
        <FastForward className="w-7 h-7" />
      </button>

      {/* Shuffle */}
      <button
        type="button"
        onClick={onShuffle}
        aria-label="Shuffle"
        className={`${iconBtn} text-white hover:text-jelly-400`}
      >
        <Shuffle className="w-7 h-7" />
      </button>
    </div>
  );
}
