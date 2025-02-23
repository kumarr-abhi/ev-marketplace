import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search vehicles..."
        className="w-full px-4 py-2 rounded-full border border-[var(--foreground)] bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)] placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search vehicles"
      />
    </div>
  );
};

export default SearchBar;
