"use client";

import { useState } from "react";

interface SortByProps {
  onFilterChange: (filter: string) => void;
}

const SortBy: React.FC<SortByProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<string>("all");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    onFilterChange(selectedFilter); // Send selected filter to parent component
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <p className="p-2">Sort By:</p>
      <select
        className="border text-gray-600 p-2 w-[180px] rounded-md"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="all">All Food</option>
        <option value="1-30">$1 to $30</option>
        <option value="30-50">$30 to $50</option>
      </select>
    </div>
  );
};

export default SortBy;
