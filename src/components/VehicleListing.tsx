"use client";

import { Vehicle } from "@/app/lib/vehicleData";
import { useState } from "react";
import VehicleCard from "./VehicleCard";

export default function VehicleListing({
  initialVehicles,
}: {
  initialVehicles: Vehicle[];
}) {
  const [vehicles, setVehicles] = useState(initialVehicles);
  return (
    <div>
      <div className="flex">
        <div>Searchbar</div>
        <div>Sort By</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {vehicles.map((vehicle: Vehicle, index: number) => (
          <div key={index} className="h-full flex flex-col">
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
      <div>Pagination section</div>
    </div>
  );
}
