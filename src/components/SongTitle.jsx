import React from "react";

export default function SongTitle({
  title = "Unknown Title",
  artist = "Unknown Artist",
}) {
  return (
    <div className="text-center">
      <h3 className="text-base text-smoke-400 font-semibold leading-tight truncate">{title}</h3>
      <p className="text-sm text-jelly-500 leading-snug truncate">{artist}</p>
    </div>
  );
}
