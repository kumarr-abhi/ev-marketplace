import { useState } from 'react';
import { Vehicle } from "@/lib/vehicleData";

export function useVehicleListing(initialVehicles: Vehicle[]) {
  const [vehicles] = useState(initialVehicles);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return {
    vehicles,
    currentPage,
    searchTerm,
    sortBy,
    setCurrentPage,
    setSearchTerm: handleSearch,
    setSortBy: handleSort,
  };
}
