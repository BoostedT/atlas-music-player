import React from "react";
import MusicPlayer from "./MusicPlayer.jsx";

export default function App() {
  return (
    <main className="bg-cloud-50 text-night-900 dark:bg-night-900 dark:text-cloud-50 min-h-screen transition-colors duration-300">
      <section className="mx-auto max-w-6xl p-4">
        <div className="border-smoke-300 dark:border-smoke-500 dark:bg-night-800 rounded-xl border bg-clay-100 shadow-lg shadow-black/10 transition-colors duration-300 dark:shadow-black/40">
          <MusicPlayer />

          <footer className="text-smoke-500 dark:text-cloud-50 flex items-center justify-between p-4 text-sm">
            <span>© 2025 Atlas School</span>
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="border-smoke-400 dark:border-smoke-500 hover:bg-mist-100 dark:hover:bg-night-700 rounded-md border px-3 py-1.5 transition"
            >
              Toggle Dark Mode
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}
