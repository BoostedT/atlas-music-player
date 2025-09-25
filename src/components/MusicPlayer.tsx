import React, { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";
import AudioPlayer from "./AudioPlayer";

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
}

export default function MusicPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1);
  const [volume, setVolume] = useState<number>(50);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const res = await fetch("/api/v1/playlist");
        if (!res.ok) throw new Error("Failed to fetch playlist");

        const playlist = await res.json();
        const fullSongs: Song[] = await Promise.all(
          playlist.map(async (item: any) => {
            const songRes = await fetch(`/api/v1/songs/${item.id}`);
            const songData = await songRes.json();
            return {
              id: songData.id,
              title: songData.title,
              artist: songData.artist,
              genre: songData.genre,
              duration: songData.duration,
              cover: songData.cover,
              song: songData.song,
            };
          })
        );

        setSongs(fullSongs);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSongs();
  }, []);

  if (loading) return <LoadingSkeleton />;
  if (!songs.length)
    return <div className="p-6 text-center">No songs available</div>;

  const currentSong = songs[currentIndex];

  return (
    <section className="mx-auto max-w-6xl p-4">
      <div
        className="rounded-2xl border p-4 md:p-6 transition-colors duration-300
                      bg-white border-night-800 text-neutral-900
                      dark:bg-night-900 dark:border-jelly-500 dark:text-cloud-50"
      >
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left: Currently Playing */}
          <div
            className="md:w-1/2 md:pr-6 md:border-r transition-colors duration-300
                          border-night-800 dark:border-jelly-500"
          >
            <CurrentlyPlaying
              coverSrc={currentSong.cover}
              title={currentSong.title}
              artist={currentSong.artist}
              speed={speed}
              isPlaying={isPlaying}
              canBack={currentIndex > 0}
              onSpeed={() =>
                setSpeed((prev) => (prev === 0.5 ? 1 : prev === 1 ? 2 : 0.5))
              }
              onBack={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              onPlayPause={() => setIsPlaying((p) => !p)}
              onForward={() =>
                setCurrentIndex((i) => Math.min(songs.length - 1, i + 1))
              }
              onShuffle={() =>
                setCurrentIndex(Math.floor(Math.random() * songs.length))
              }
              value={volume}
              onVolumeChange={(e) => setVolume(Number(e.target.value))}
            />

            <AudioPlayer
              song={currentSong.song}
              isPlaying={isPlaying}
              volume={volume}
              speed={speed}
              onEnded={() =>
                setCurrentIndex((i) => (i < songs.length - 1 ? i + 1 : 0))
              }
            />
          </div>
          {/* Right: Playlist */}
          <div className="md:w-1/2 md:pl-6 text-neutral-700 dark:text-mist-300">
            <Playlist
              songs={songs}
              currentSongId={currentSong.id}
              onSelect={(id) => {
                setCurrentIndex(songs.findIndex((s) => s.id === id));
                setIsPlaying(true);
              }}
            />
          </div>
        </div>
      </div>

      <AudioPlayer
        song={currentSong.song}
        isPlaying={isPlaying}
        volume={volume}
        speed={speed}
        onEnded={() =>
          setCurrentIndex((i) => (i < songs.length - 1 ? i + 1 : 0))
        }
      />
    </section>
  );
}
