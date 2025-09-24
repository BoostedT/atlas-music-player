import React from "react";

export default function PlayListItem({ title, artist, length, active }) {
  return (
    <div
      className={`
        group flex items-center justify-between rounded-lg px-3 py-2 cursor-pointer transition-all
        ${active 
          ? "bg-jelly-500/20 text-cloud-50 shadow-md" 
          : "hover:bg-night-800 hover:scale-[1.02] hover:shadow-md text-smoke-400"}
      `}
    >
      {/* Left: Title + Artist */}
      <div>
        <div className={`font-semibold ${active ? "text-jelly-400" : "group-hover:text-jelly-400"}`}>
          {title}
        </div>
        <div className="text-sm text-mist-300 group-hover:text-mist-100">
          {artist}
        </div>
      </div>

      {/* Right: Song length */}
      <span
        className={`ml-2 text-sm ${active ? "text-jelly-400" : "group-hover:text-cloud-50"}`}
      >
        {length}
      </span>
    </div>
  );
}
