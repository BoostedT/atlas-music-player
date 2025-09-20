// src/components/PlayListItem.jsx
import React from "react";

export default function PlayListItem({ title, artist, length }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {title}
        </h3>
        <p className="text-base font-semibold text-slate-400 -mt-1 truncate">
          {artist}
        </p>
      </div>

      <span className="shrink-0 text-base font-semibold text-slate-400 tabular-nums">
        {length}
      </span>
    </div>
  );
}
