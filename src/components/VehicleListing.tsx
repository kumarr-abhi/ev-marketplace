"use client";

import React, { useMemo, useCallback } from "react";
import { Vehicle } from "@/lib/vehicleData";
import VehicleCard from "./VehicleCard";
import SearchBar from "./SearchBar";
import SortSelect from "./SortSelector";
import Pagination from "./Pagination";
import { filterVehicles, sortVehicles } from "@/app/utils/vehicleUtils";
import { useVehicleListing } from "@/app/hooks/useVehicleListing";

const ITEMS_PER_PAGE = 10;

interface VehicleListingProps {
  initialVehicles: Vehicle[];
}

export default function VehicleListing({
  initialVehicles,
}: VehicleListingProps) {
  const {
    vehicles,
    currentPage,
    searchTerm,
    sortBy,
    setCurrentPage,
    setSearchTerm,
    setSortBy,
  } = useVehicleListing(initialVehicles);

  const filteredAndSortedVehicles = useMemo(() => {
    const filtered = filterVehicles(vehicles, searchTerm);
    return sortVehicles(filtered, sortBy);
  }, [vehicles, searchTerm, sortBy]);

  const paginatedVehicles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredAndSortedVehicles.slice(start, end);
  }, [filteredAndSortedVehicles, currentPage]);

  const totalPages = Math.ceil(
    filteredAndSortedVehicles.length / ITEMS_PER_PAGE
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    },
    [setCurrentPage]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 shadow-md z-10 bg-[var(--background)] text-[var(--foreground)]">
        <div className="flex justify-center items-center p-4 max-w-3xl mx-auto">
          <div className="flex space-x-4 w-full max-w-2xl">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <SortSelect value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </header>

      <main className="flex-grow p-4 mb-16 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
          {paginatedVehicles.map((vehicle: Vehicle) => (
            <div key={vehicle.id} className="h-full">
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
        {paginatedVehicles.length === 0 && (
          <div className="text-center py-8 text-gray-500" role="alert">
            No vehicles found matching your search criteria.
          </div>
        )}
      </main>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isDisabled={filteredAndSortedVehicles.length === 0}
      />
    </div>
  );
}
