import { render, fireEvent } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem.tsx";
import React from "react";

const baseProps = {
  title: "Test Song",
  artist: "Test Artist",
  duration: 200,
  active: false,
  onClick: vi.fn(),
};

describe("PlayListItem", () => {
  it("renders inactive playlist item", () => {
    const { asFragment } = render(<PlayListItem {...baseProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders active playlist item", () => {
    const { asFragment } = render(<PlayListItem {...baseProps} active={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClick when clicked", () => {
    const mockClick = vi.fn();
    const { getByRole } = render(<PlayListItem {...baseProps} onClick={mockClick} />);
    fireEvent.click(getByRole("button"));
    expect(mockClick).toHaveBeenCalled();
  });
});
