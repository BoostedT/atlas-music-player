import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/v1/songs", () => {
    return HttpResponse.json([
      {
        id: "song-1",
        title: "Mock Song One",
        artist: "Mock Artist A",
        duration: 210,
        cover: "https://example.com/mock-cover1.jpg",
        song: "https://example.com/mock-song1.mp3",
      },
      {
        id: "song-2",
        title: "Mock Song Two",
        artist: "Mock Artist B",
        duration: 180,
        cover: "https://example.com/mock-cover2.jpg",
        song: "https://example.com/mock-song2.mp3",
      },
    ]);
  }),
];
