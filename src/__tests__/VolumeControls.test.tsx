import { render, fireEvent } from "@testing-library/react";
import React from "react";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls", () => {
  it("renders at default volume", () => {
    const { asFragment } = render(<VolumeControls value={50} onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders at muted volume (0)", () => {
    const { asFragment } = render(<VolumeControls value={0} onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders at max volume (100)", () => {
    const { asFragment } = render(<VolumeControls value={100} onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange when slider is moved", () => {
    const mockChange = vi.fn();
    const { getByRole } = render(<VolumeControls value={30} onChange={mockChange} />);
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: "70" } });
    expect(mockChange).toHaveBeenCalled();
  });
});
