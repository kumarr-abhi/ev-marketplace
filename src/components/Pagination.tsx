import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isDisabled: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isDisabled,
}) => {
  return (
    <footer className="sticky bottom-0 bg-[var(--background)] text-[var(--foreground)] shadow-md p-4">
      <div className="flex justify-center items-center space-x-4 max-w-3xl mx-auto">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isDisabled}
          className="px-4 py-2 bg-transparent border border-[var(--foreground)] text-[var(--foreground)] rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300"
          aria-label="Previous page"
        >
          Previous
        </button>
        <span className="text-sm" aria-live="polite">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isDisabled}
          className="px-4 py-2 bg-transparent border border-[var(--foreground)] text-[var(--foreground)] rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors duration-300"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default Pagination;
