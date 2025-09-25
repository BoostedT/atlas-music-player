import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";   // 👈 import globals here
import React from "react";
import CoverArt from "../components/CoverArt";

describe("CoverArt", () => {
  it("renders with default artwork", () => {
    const { asFragment } = render(
      <CoverArt coverSrc="https://example.com/cover.jpg" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with empty artwork", () => {
    const { asFragment } = render(<CoverArt coverSrc="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
