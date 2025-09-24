import React from "react";
import PlayListItem from "./PlayListItem.jsx";

export default function Playlist({ items, selectedIndex }) {
  return (
    <div className="text-cloud-50">
      <h3 className="mb-4 text-2xl font-bold">Playlist</h3>
      <div className="space-y-1">
        {items.map((t, i) => (
          <PlayListItem
            key={i}
            title={t.title}
            artist={t.artist}
            length={t.length}
            active={i === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
}
