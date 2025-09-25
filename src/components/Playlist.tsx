import React from "react";
import PlayListItem from "./PlayListItem";
import { Song } from "./MusicPlayer";

interface Props {
  songs: Song[];
  currentSongId: string;
  onSelect: (id: string) => void;
}

export default function Playlist({ songs, currentSongId, onSelect }: Props) {
  return (
    <div className="text-cloud-50">
      <h3 className="mb-4 text-2xl font-bold">Playlist</h3>
      <div className="space-y-1">
        {songs.map((song) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            active={song.id === currentSongId}
            onClick={() => onSelect(song.id)}
          />
        ))}
      </div>
    </div>
  );
}
