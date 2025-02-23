import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders with initial value", () => {
    render(<SearchBar value="initial" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("initial");
  });

  test("calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
