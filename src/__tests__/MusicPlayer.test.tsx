import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";
import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer(
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json([{ id: "song-1" }, { id: "song-2" }]);
  }),
  // Song 1
  http.get("/api/v1/songs/song-1", () => {
    return HttpResponse.json({
      id: "song-1",
      title: "Mock Song One",
      artist: "Mock Artist A",
      genre: "Rock",
      duration: 200,
      cover: "cover1.jpg",
      song: "song1.mp3",
    });
  }),
  // Song 2
  http.get("/api/v1/songs/song-2", () => {
    return HttpResponse.json({
      id: "song-2",
      title: "Mock Song Two",
      artist: "Mock Artist B",
      genre: "Pop",
      duration: 180,
      cover: "cover2.jpg",
      song: "song2.mp3",
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("MusicPlayer", () => {
  it("renders first song in playlist by default", async () => {
    render(<MusicPlayer />);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /mock song one/i })
      ).toBeInTheDocument();
    });
  });

  it("toggles play/pause when play button is clicked", async () => {
    render(<MusicPlayer />);

    const playBtn = await screen.findByRole("button", { name: /play/i });
    fireEvent.click(playBtn);

    expect(await screen.findByRole("button", { name: /pause/i })).toBeInTheDocument();
  });

  it("changes to next song when forward button is clicked", async () => {
    render(<MusicPlayer />);

    const forwardBtn = await screen.findByRole("button", { name: /forward/i });
    fireEvent.click(forwardBtn);

    expect(
      await screen.findByRole("heading", { name: /mock song two/i })
    ).toBeInTheDocument();
  });

  it("changes to previous song when back button is clicked", async () => {
    render(<MusicPlayer />);

    const forwardBtn = await screen.findByRole("button", { name: /forward/i });
    fireEvent.click(forwardBtn);

    const backBtn = await screen.findByRole("button", { name: /back/i });
    fireEvent.click(backBtn);

    expect(
      await screen.findByRole("heading", { name: /mock song one/i })
    ).toBeInTheDocument();
  });

  it("cycles speed when speed button is clicked", async () => {
    render(<MusicPlayer />);

    const speedBtn = await screen.findByRole("button", { name: /change speed/i });

    fireEvent.click(speedBtn);
    expect(await screen.findByText(/2x/i)).toBeInTheDocument();

    fireEvent.click(speedBtn);
    expect(await screen.findByText(/0.5x/i)).toBeInTheDocument();

    fireEvent.click(speedBtn);
    expect(await screen.findByText(/1x/i)).toBeInTheDocument();
  });
});
