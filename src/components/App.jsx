import React, { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer.tsx";
import LoadingSkeleton from "./LoadingSkeleton.jsx";

export default function App() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((t) =>
      t === "light" ? "dark" : t === "dark" ? "system" : "light",
    );
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="dark:bg-night-900 flex min-h-screen flex-col bg-white text-neutral-900 transition-colors duration-300 dark:text-white">
      {/* Player card */}
      <section className="flex flex-grow items-center justify-center p-4">
        <section className="mx-auto max-w-6xl flex-grow p-4">
          {loading ? <LoadingSkeleton /> : <MusicPlayer />}
        </section>
      </section>

      {/* Footer */}
      <footer className="flex w-full items-center justify-between px-6 py-4 text-sm text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
        <span>© 2025 Atlas School</span>
        <button
          onClick={cycleTheme}
          className="dark:focus:ring-offset-night-900 rounded-md border border-neutral-300 px-3 py-1.5 transition hover:bg-neutral-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:ring-blue-400"
        >
          Toggle Theme ({theme})
        </button>
      </footer>
    </main>
  );
}
