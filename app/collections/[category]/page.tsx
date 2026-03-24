"use client";

import { useParams, useRouter } from "next/navigation";
import CollectionsClient from "@/components/List/CollectionsClient";

type Product = {
  id: number;
  productName: string;
  category: string;
  slug: string;
};

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();

  const category = params.category as string;

  return (
    <CollectionsClient
      category={category}
    />
  );
}