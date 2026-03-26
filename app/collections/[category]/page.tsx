"use client";

import { useParams } from "next/navigation";
import CollectionsClient from "@/components/List/CollectionsClient";


export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  return (
    <CollectionsClient
      category={category}
    />
  );
}