import { getVehicleById } from "@/app/lib/vehicleData";
import VehicleDetail from "@/components/VehicleDetail";

export default async function VehicleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const vehicle = await getVehicleById(id);

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return <VehicleDetail vehicle={vehicle} />;
}
