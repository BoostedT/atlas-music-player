import React from "react";

export default function PlayListItem({ title, artist, length, active }) {
  return (
    <div
      className={`
        flex items-center justify-between rounded-md px-3 py-2 cursor-pointer transition
        ${active 
          ? "bg-mist-300/40 text-cloud-50" 
          : "hover:bg-night-800 hover:text-cloud-50/90 text-smoke-400"}
      `}
    >
      <div>
        <div className="font-semibold text-jelly-400">{title}</div>
        <div className="text-sm text-mist-300">{artist}</div>
      </div>
      <span className={`ml-2 ${active ? "text-jelly-400" : "group-hover:text-clay-100"}`}>
        {length}
      </span>
    </div>
  );
}
