import { Vehicle } from "@/lib/vehicleData";

interface VehicleInfoTableProps {
  vehicle: Vehicle;
}

export default function VehicleInfoTable({ vehicle }: VehicleInfoTableProps) {
  const details = [
    { label: "Year", value: vehicle.year },
    { label: "Range", value: `${vehicle.range_km} km` },
    { label: "Color", value: vehicle.color },
    { label: "Condition", value: vehicle.condition },
    { label: "Battery", value: `${vehicle.battery_capacity_kWh} kWh` },
    { label: "Charging", value: `${vehicle.charging_speed_kW} kW` },
    { label: "Seats", value: vehicle.seats },
    { label: "Drivetrain", value: vehicle.drivetrain },
    { label: "Location", value: vehicle.location },
    { label: "Autopilot", value: vehicle.autopilot ? "Yes" : "No" },
    {
      label: "Mileage",
      value: `${vehicle.kilometer_count.toLocaleString()} km`,
    },
    { label: "Accidents", value: vehicle.accidents ? "Yes" : "No" },
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="text-3xl font-extrabold text-green-600 dark:text-green-400">
          ${vehicle.price.toLocaleString()}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {details.map(({ label, value }) => (
          <div
            key={label}
            className="border-b border-gray-200 dark:border-gray-700 pb-2"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {label}
            </span>
            <p className="font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
