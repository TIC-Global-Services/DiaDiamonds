"use client";

import { useParams } from "next/navigation";
import CategoryCore from "@/components/Products/Category/CategoryCore";
import productsData from "@/products.json";
import { Product } from "@/types/product";

export default function CategoryPage() {
  const params = useParams();

  if (!params?.category) return null;

  const category = (params.category as string).toLowerCase();

  const products: Product[] = productsData;

  const productLists = products.filter(
    (p) => p.category.toLowerCase() === category
  );

  return (
    <CategoryCore
      category={category}
      productLists={productLists}
    />
  );
}