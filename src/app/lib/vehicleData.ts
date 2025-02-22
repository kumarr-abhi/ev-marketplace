export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  range_km: number;
  color: string;
  condition: string;
  battery_capacity_kWh: number;
  charging_speed_kW: number;
  seats: number;
  drivetrain: string;
  location: string;
  autopilot: boolean;
  kilometer_count: number;
  accidents: boolean;
  accident_description?: string;
  images: string[];
}

//These promises will be replaced by api call to fetch data from backend

export async function getVehicles(): Promise<Vehicle[]> {
  return new Promise(async (resolve) => {
    const vehicleDataWithoutId = await import("../data/vehicles.json");
    const vehicleData = vehicleDataWithoutId?.data.map((vehicle, index) => ({
      id: index + 1 + "",
      ...vehicle,
    }));
    setTimeout(() => resolve(vehicleData), 100);
  });
}

export async function getVehicleById(id: string): Promise<Vehicle | undefined> {
  return new Promise(async (resolve) => {
    const vehicles = await getVehicles();
    setTimeout(() => resolve(vehicles.find((v) => v.id === id)), 100);
  });
}
