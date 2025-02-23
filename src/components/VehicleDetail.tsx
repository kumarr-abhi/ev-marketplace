"use client";

import { Vehicle } from "@/app/lib/vehicleData";
import Link from "next/link";
import ImageGallery from "./ImageGallery";
import VehicleInfoTable from "./VehicleInfoTable";

interface VehicleDetailProps {
  vehicle: Vehicle;
}

export default function VehicleDetail({ vehicle }: VehicleDetailProps) {
  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline inline-block"
        aria-label="Back to listings"
      >
        &larr; Back to listings
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-center">
        {vehicle.brand} {vehicle.model}
      </h1>
      <div className="">
        <ImageGallery
          images={vehicle.images}
          alt={`${vehicle.brand} ${vehicle.model}`}
        />
      </div>
      <VehicleInfoTable vehicle={vehicle} />
      {vehicle.accident_description && (
        <p className="mt-4 text-sm">
          <span className="font-semibold">Accident Description:</span>{" "}
          {vehicle.accident_description}
        </p>
      )}
    </div>
  );
}
