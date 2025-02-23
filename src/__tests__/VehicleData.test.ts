import { getVehicles, getVehicleById } from "@/lib/vehicleData";

jest.mock("../app/data/vehicles.json", () => ({
  count: 45,
  data: [
    {
      brand: "Tesla",
      model: "Model S",
      year: 2020,
      price: 79999,
      range_km: 610,
      color: "Red",
      condition: "Used",
      battery_capacity_kWh: 100,
      charging_speed_kW: 250,
      seats: 5,
      drivetrain: "AWD",
      location: "Berlin",
      autopilot: true,
      kilometer_count: 25000,
      accidents: true,
      accident_description: "Rear bumper scratch repaired",
      images: [
        "https://ev-database.org/img/auto/Audi_e-tron/Audi_e-tron-01@2x.jpg",
        "https://ev-database.org/img/auto/Audi_e-tron/Audi_e-tron-02@2x.jpg",
      ],
    },
    {
      brand: "Nissan",
      model: "Leaf",
      year: 2019,
      price: 29999,
      range_km: 270,
      color: "White",
      condition: "New",
      battery_capacity_kWh: 40,
      charging_speed_kW: 50,
      seats: 5,
      drivetrain: "FWD",
      location: "M\u00fcnchen",
      autopilot: false,
      kilometer_count: 0,
      accidents: false,
      images: [
        "https://ev-database.org/img/auto/Porsche_Taycan/Porsche_Taycan-01@2x.jpg",
        "https://ev-database.org/img/auto/Porsche_Taycan/Porsche_Taycan-02@2x.jpg",
      ],
    },
  ],
}));

describe("VehicleData", () => {
  describe("getVehicles", () => {
    test("returns all vehicles", async () => {
      const vehicles = await getVehicles();
      expect(vehicles).toHaveLength(2);
    });

    test("returns vehicles with correct properties", async () => {
      const vehicles = await getVehicles();
      expect(vehicles[0]).toHaveProperty("id");
      expect(vehicles[0]).toHaveProperty("brand");
      expect(vehicles[0]).toHaveProperty("model");
      expect(vehicles[0]).toHaveProperty("year");
      expect(vehicles[0]).toHaveProperty("price");
      expect(vehicles[0]).toHaveProperty("range_km");
      expect(vehicles[0]).toHaveProperty("color");
      expect(vehicles[0]).toHaveProperty("condition");
      expect(vehicles[0]).toHaveProperty("battery_capacity_kWh");
      expect(vehicles[0]).toHaveProperty("charging_speed_kW");
      expect(vehicles[0]).toHaveProperty("seats");
      expect(vehicles[0]).toHaveProperty("drivetrain");
      expect(vehicles[0]).toHaveProperty("location");
      expect(vehicles[0]).toHaveProperty("autopilot");
      expect(vehicles[0]).toHaveProperty("kilometer_count");
      expect(vehicles[0]).toHaveProperty("accidents");
      expect(vehicles[0]).toHaveProperty("images");
      //We can add more properties if available
    });

    test("returns vehicles with correct data", async () => {
      const vehicles = await getVehicles();
      expect(vehicles[0].brand).toBe("Tesla");
      expect(vehicles[1].brand).toBe("Nissan");
      expect(vehicles[0].model).toBe("Model S");
      expect(vehicles[1].model).toBe("Leaf");
      //We can have more conditions to test
    });
  });

  describe("getVehicleById", () => {
    test("should return a vehicle when given a valid id", async () => {
      const vehicle = await getVehicleById("1");
      expect(vehicle).toBeDefined();
      expect(vehicle?.brand).toBe("Tesla");
      expect(vehicle?.model).toBe("Model S");
    });

    test("returns undefined for invalid id", async () => {
      const vehicle = await getVehicleById("99999");
      expect(vehicle).toBeUndefined();
    });

    test("returns vehicle with all expected properties", async () => {
      const vehicle = await getVehicleById("2");
      expect(vehicle).toMatchObject({
        id: "2",
        brand: "Nissan",
        model: "Leaf",
        year: 2019,
        price: 29999,
        range_km: 270,
        color: "White",
        condition: "New",
        battery_capacity_kWh: 40,
        charging_speed_kW: 50,
        seats: 5,
        drivetrain: "FWD",
        location: "München",
        autopilot: false,
        kilometer_count: 0,
        accidents: false,
      });
    });

    test("handles optional accident_description correctly", async () => {
      const vehicleWithDescription = await getVehicleById("1");
      const vehicleWithoutDescription = await getVehicleById("2");
      expect(vehicleWithDescription?.accident_description).toBe(
        "Rear bumper scratch repaired"
      );
      expect(vehicleWithoutDescription?.accident_description).toBeUndefined();
    });
  });
});
