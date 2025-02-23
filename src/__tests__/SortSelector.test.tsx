import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortSelect from "../components/SortSelector";

describe("SortSelect", () => {
  it("renders with initial value", () => {
    render(<SortSelect value="default" onChange={() => {}} />);
    expect(screen.getByRole("combobox")).toHaveValue("default");
  });

  it("calls onChange when selection changes", () => {
    const handleChange = jest.fn();
    render(<SortSelect value="default" onChange={handleChange} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "priceLowToHigh" } });
    expect(handleChange).toHaveBeenCalledWith("priceLowToHigh");
  });
});
