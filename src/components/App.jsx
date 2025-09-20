import React, { useState } from "react";
import PlayControls from "./PlayControls.jsx";
import VolumeControls from "./VolumeControls.jsx";
import placeholder from "../assets/placeholder.svg";
import PlayListItem from "./PlayListItem.jsx";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(50);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-md">
        {/* Album Art */}
        <img
          src={placeholder}
          alt="Album Art"
          className="h-44 w-44 rounded-lg object-cover"
        />

        {/* Playlist */}
        <div className="mx-auto mt-8 w-full max-w-md">
          <PlayListItem
            title="Electric Fever"
            artist="Neon Jungle"
            length="8:41"
          />
        </div>

        {/* Play Controls */}
        <PlayControls
          speed={speed}
          isPlaying={isPlaying}
          canBack={false}
          onSpeed={() => setSpeed((s) => (s === 1 ? 2 : 1))}
          onBack={() => {}}
          onPlayPause={() => setIsPlaying((p) => !p)}
          onForward={() => {}}
          onShuffle={() => {}}
        />

        {/* Volume Controls */}
        <VolumeControls
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />

        {/* Footer */}
        <footer className="text-xs text-gray-400">
          &copy; 2025 Atlas School
        </footer>
      </div>
    </main>
  );
}
