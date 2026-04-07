"use client";

import { useParams, useSearchParams } from "next/navigation";
import CategoryCore from "@/components/Products/Category/CategoryCore";
import productsData from "@/products_new.json";
import { Product } from "@/types/product";

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  if (!params?.category) return null;

  const category = (params.category as string).toLowerCase();
  const sort = searchParams.get("sort") ?? undefined;

  const products: Product[] = productsData;

  const productLists = products.filter(
    (p) => p.category.toLowerCase() === category
  );

  return (
    <CategoryCore
      category={category}
      productLists={productLists}
      defaultSort={sort}
    />
  );
}