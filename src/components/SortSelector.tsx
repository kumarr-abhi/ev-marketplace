import React from "react";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex-shrink-0">
      <select
        className="px-4 py-2 rounded-full border border-[var(--foreground)] bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort vehicles"
      >
        <option value="default">Sort: Default</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="yearNewest">Year: Newest</option>
        <option value="yearOldest">Year: Oldest</option>
      </select>
    </div>
  );
};

export default SortSelect;
