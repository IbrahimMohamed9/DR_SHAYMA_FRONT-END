import HonorListTemplate from "@/components/templates/HonorListTemplate";
import axiosInstance from "@/config/axios";

export default async function HonorListPage() {
  const volunteers = await axiosInstance.get("/volunteers");

  return <HonorListTemplate volunteers={volunteers.data} />;
}
