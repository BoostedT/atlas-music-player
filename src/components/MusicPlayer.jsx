import React, { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying.jsx";
import Playlist from "./Playlist.jsx";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(65);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tracks = [
    { title: "Painted in Blue", artist: "Soul Canvas", length: "3:14" },
    { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02" },
    { title: "Fading Shadows", artist: "The Emberlight", length: "3:14" },
    { title: "Cosmic Drift", artist: "Solar Flare", length: "4:00" },
    { title: "Urban Serenade", artist: "Midnight Groove", length: "2:42" },
    { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "3:50" },
    { title: "Electric Fever", artist: "Neon Jungle", length: "2:21" },
    { title: "Electric Wildflower", artist: "Velvet Ember", length: "2:59" },
    { title: "Golden Haze", artist: "Velvet Waves", length: "2:35" },
    { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "3:44" },
  ];

  return (
    <section className="mx-auto max-w-6xl p-4">
      <div
        className="
          rounded-2xl border p-4 md:p-6 transition-colors duration-300
          bg-white border-night-800 text-neutral-900
          dark:bg-night-900 dark:border-jelly-500 dark:text-cloud-50
        "
      >
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left: player */}
          <div
            className="
              md:w-1/2 md:pr-6 md:border-r transition-colors duration-300
              border-night-800 dark:border-jelly-500
            "
          >
            <CurrentlyPlaying
              coverSrc="https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?cs=srgb&dl=pexels-daniel-reche-718241-3721941.jpg&fm=jpg"
              title={tracks[selectedIndex].title}
              artist={tracks[selectedIndex].artist}
              speed={speed}
              isPlaying={isPlaying}
              canBack={selectedIndex > 0}
              onSpeed={() => setSpeed((s) => (s === 1 ? 2 : 1))}
              onBack={() => setSelectedIndex((i) => Math.max(0, i - 1))}
              onPlayPause={() => setIsPlaying((p) => !p)}
              onForward={() =>
                setSelectedIndex((i) => Math.min(tracks.length - 1, i + 1))
              }
              onShuffle={() =>
                setSelectedIndex(Math.floor(Math.random() * tracks.length))
              }
              value={volume}
              onVolumeChange={(e) => setVolume(+e.target.value)}
            />
          </div>

          {/* Right: playlist */}
          <div
            className="
              md:w-1/2 md:pl-6 transition-colors duration-300
              text-neutral-700 dark:text-mist-300
            "
          >
            <Playlist items={tracks} selectedIndex={selectedIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
