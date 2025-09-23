import React from "react";
import PlayListItem from "./PlayListItem.jsx";

export default function Playlist({ items = [], selectedIndex = 0 }) {
  return (
    <section className="w-full max-w-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Playlist</h3>

      <div className="flex flex-col divide-y divide-transparent">
        {items.map((track, i) => {
          const selected = i === selectedIndex;
          return (
            <div
              key={`${track.title}-${i}`}
              className={`rounded-xl px-3 -mx-3 ${
                selected ? "bg-slate-100" : "bg-transparent"
              }`}
              aria-selected={selected}
            >
              <PlayListItem
                title={track.title}
                artist={track.artist}
                length={track.length}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
