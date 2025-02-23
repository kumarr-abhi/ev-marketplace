import { Vehicle } from "@/lib/vehicleData";
import Image from "next/image";
import Link from "next/link";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48">
        <Link href={`/vehicle/${vehicle.id}`}>
          <Image
            src={vehicle.images[0]}
            alt={`${vehicle.brand} ${vehicle.model}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              <Link href={`/vehicle/${vehicle.id}`}>
                {`${vehicle.year} ${vehicle.brand} ${vehicle.model}`}
              </Link>
            </h3>

            <div className="text-sm text-gray-600 mt-1">
              {`${vehicle.kilometer_count.toLocaleString()} km`} •{" "}
              {vehicle.drivetrain}
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold text-green-600 mb-4">
          ${vehicle.price.toLocaleString()}
        </div>
        <div className="mt-auto">
          <Link href={`/vehicle/${vehicle.id}`}>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
        <div className="text-sm text-gray-600 mt-3 flex items-center border-t border-dashed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {vehicle.location}
        </div>
      </div>
    </div>
  );
}
