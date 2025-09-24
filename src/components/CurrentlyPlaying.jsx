import React from "react";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";

export default function CurrentlyPlaying({
  coverSrc,
  title,
  artist,
  speed,
  isPlaying,
  canBack,
  onSpeed,
  onBack,
  onPlayPause,
  onForward,
  onShuffle,
  value,
  onVolumeChange,
}) {
  return (
    <div className="text-cloud-50">
      {/* Large cover */}
      <img
        src={coverSrc}
        alt={title}
        className="aspect-square w-full rounded-xl object-cover bg-night-800"
      />

      {/* Title / Artist */}
      <div className="mt-6">
        <h2 className="text-2xl font-extrabold text-jelly-500">
          {title}
        </h2>
        <p className="mt-1 text-base text-mist-300">{artist}</p>
      </div>

      {/* Controls row */}
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

      {/* Volume slider */}
      <div className="mt-6">
        <VolumeControls value={value} onChange={onVolumeChange} />
      </div>
    </div>
  );
}
