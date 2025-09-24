import React from "react";
import MusicPlayer from "./MusicPlayer.jsx";

export default function App() {
  return (
    <main className="min-h-screen bg-night-900 text-cloud-50">
      <section className="mx-auto max-w-6xl p-4">
        <div className="rounded-xl border border-jelly-400 shadow-lg shadow-jelly-500/40 hover:shadow-jelly-400/70 hover:shadow-xl transition duration-300">
          <MusicPlayer />
        </div>
      </section>
    </main>
  );
}
