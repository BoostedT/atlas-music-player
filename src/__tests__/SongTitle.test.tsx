import { render } from "@testing-library/react";
import React from "react";
import SongTitle from "../components/SongTitle";

describe("SongTitle", () => {
  it("renders with only title", () => {
    const { asFragment } = render(
      <SongTitle song={{ title: "Test Song", artist: "" }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with title and artist", () => {
    const { asFragment } = render(
      <SongTitle song={{ title: "Test Song", artist: "Test Artist" }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with long title and artist", () => {
    const { asFragment } = render(
      <SongTitle
        song={{
          title: "A Very Very Long Song Title That Should Wrap",
          artist: "An Incredibly Long Artist Name To Test Layout",
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
