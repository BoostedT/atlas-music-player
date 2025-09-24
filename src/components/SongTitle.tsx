import React from "react";

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number; // seconds
  artworkUrl: string;
  lyrics?: string;
}

interface Props {
  song: Song;
}

export default function SongTitle({ song }: Props) {
  return (
    <div>
      <h2 className="text-lg font-bold">{song.title}</h2>
      <p className="text-sm text-gray-600">{song.artist}</p>
    </div>
  );
}
