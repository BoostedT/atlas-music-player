import React from "react";

export default function SongTitle({
  title = "Unknown Title",
  artist = "Unknown Artist",
}) {
  return (
    <div className="text-center">
      <h3 className="text-base font-semibold leading-tight truncate">{title}</h3>
      <p className="text-sm text-gray-500 leading-snug truncate">{artist}</p>
    </div>
  );
}
