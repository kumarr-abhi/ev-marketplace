import { Vehicle } from "@/lib/vehicleData";

export function filterVehicles(vehicles: Vehicle[], searchTerm: string): Vehicle[] {
  return vehicles.filter((vehicle) =>
    `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
}

export function sortVehicles(vehicles: Vehicle[], sortBy: string): Vehicle[] {
  return [...vehicles].sort((a, b) => {
    switch (sortBy) {
      case "priceLowToHigh":
        return a.price - b.price;
      case "priceHighToLow":
        return b.price - a.price;
      case "yearNewest":
        return b.year - a.year;
      case "yearOldest":
        return a.year - b.year;
      default:
        return 0;
    }
  });
}
