import React from "react";
import PlayControls from "./PlayControls.jsx";
import VolumeControls from "./VolumeControls.jsx";

export default function CurrentlyPlaying({
  coverSrc,
  title = "Painted in Blue",
  artist = "Soul Canvas",
  speed = 1,
  isPlaying = false,
  canBack = false,
  onSpeed,
  onBack,
  onPlayPause,
  onForward,
  onShuffle,
  volume = 50,
  onVolumeChange,
}) {
  return (
    <section className="w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-md">
      {/* Cover Art */}
      <div className="w-full overflow-hidden rounded-2xl bg-gray-200">
        <img
          src={coverSrc}
          alt="Album Art"
          className="h-full w-full aspect-square object-cover"
        />
      </div>

      {/* Title + Artist */}
      <div className="mt-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-lg text-slate-500">{artist}</p>
      </div>

      <div className="mt-6">
        <PlayControls
          speed={speed}
          isPlaying={isPlaying}
          canBack={canBack}
          onSpeed={onSpeed}
          onBack={onBack}
          onPlayPause={onPlayPause}
          onForward={onForward}
          onShuffle={onShuffle}
        />
      </div>

      {/* Volume */}
      <div className="mt-6">
        <VolumeControls
          value={volume}
          onChange={onVolumeChange}
        />
      </div>
    </section>
  );
}
