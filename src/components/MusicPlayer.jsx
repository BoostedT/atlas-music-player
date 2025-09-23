import React, { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying.jsx";
import Playlist from "./Playlist.jsx";
import cover from "../assets/placeholder.svg";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(65);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tracks = [
    { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55" },
    { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02" },
    { title: "Fading Shadows", artist: "The Emberlight", length: "3:01" },
    { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01" },
    { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54" },
    { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "6:13" },
    { title: "Electric Fever", artist: "Neon Jungle", length: "8:41" },
    { title: "Edge of the Abyss", artist: "Steel Horizon", length: "2:27" },
    { title: "Golden Haze", artist: "Velvet Waves", length: "3:15" },
    { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "8:22" },
  ];

  return (
    <section className="mx-auto max-w-6xl p-6 md:p-10">
      {/* Responsive layout: column on small, row on md+ */}
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="md:w-1/2 md:pr-10 md:border-r md:border-gray-200">
          <CurrentlyPlaying
            coverSrc={cover}
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
            volume={volume}
            onVolumeChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>

        {/* Right pane: Playlist */}
        <div className="md:w-1/2 md:pl-10">
          <Playlist items={tracks} selectedIndex={selectedIndex} />
        </div>
      </div>
    </section>
  );
}
