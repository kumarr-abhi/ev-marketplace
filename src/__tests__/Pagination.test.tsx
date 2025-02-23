import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

describe("Pagination", () => {
  it("renders current page and total pages", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={() => {}}
        isDisabled={false}
      />
    );
    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
  });

  it("calls onPageChange when buttons are clicked", () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={handlePageChange}
        isDisabled={false}
      />
    );
    fireEvent.click(screen.getByTestId("next-button"));
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it("disables previous button when on first page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => {}}
        isDisabled={false}
      />
    );
    expect(screen.getByTestId("previous-button")).toBeDisabled();
    expect(screen.getByTestId("next-button")).not.toBeDisabled();
  });

  it("disables next button when on last page", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={() => {}}
        isDisabled={false}
      />
    );
    expect(screen.getByTestId("previous-button")).not.toBeDisabled();
    expect(screen.getByTestId("next-button")).toBeDisabled();
  });
});
