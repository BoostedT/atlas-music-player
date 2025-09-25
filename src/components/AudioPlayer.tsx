import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
  song: string;
  isPlaying: boolean;
  volume: number;
  speed: number;
  onEnded: () => void;
}

export default function AudioPlayer({
  song,
  isPlaying,
  volume,
  speed,
  onEnded,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume / 100;
    audio.playbackRate = speed;

    if (isPlaying) {
      audio.play()?.catch?.(() => { });
    } else {
      audio.pause();
    }
  }, [isPlaying, volume, speed, song]);

  if (!song) return null;

  return (
    <audio
      ref={audioRef}
      src={song}
      onEnded={onEnded}
      preload="auto"
      style={{ display: "none" }}
    />
  );
}
