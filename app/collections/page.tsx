import { redirect } from "next/navigation";
import productsData from "@/products_new.json";

// fallback
export default function CollectionsPage() {
  const firstCategory = productsData[0]?.category;
  redirect(`/collections/${firstCategory}`);
}