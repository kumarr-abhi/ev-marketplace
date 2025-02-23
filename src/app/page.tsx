import VehicleListing from "@/components/VehicleListing";
import { getVehicles } from "@/lib/vehicleData";

export default async function Home() {
  const vehicles = await getVehicles();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <VehicleListing initialVehicles={vehicles} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
