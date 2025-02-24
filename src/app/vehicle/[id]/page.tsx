import { getVehicleById } from "@/lib/vehicleData";
import VehicleDetail from "@/components/VehicleDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const vehicle = await getVehicleById(id);

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  return <VehicleDetail vehicle={vehicle} />;
}
