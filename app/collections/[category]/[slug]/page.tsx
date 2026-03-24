"use client";

import { generateSlug } from "@/utils/slug";
import { useParams, useRouter } from "next/navigation";
import productsData from "@/products.json";
import ProductView from "@/components/CollectionsNew/productview";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const category = (params.category as string).toLowerCase();
  const slug = params.slug as string;

  const product = productsData.find(
    (p) =>
      generateSlug(p.productName) === slug &&
      p.category.toLowerCase() === category
  );

  if (!product) return <div>Product not found</div>;

  return (
    <ProductView
      productId={product.id}
      onBack={() => router.push(`/collections/${category}`)}
      onProductClick={(id) => {
        const p = productsData.find((x) => x.id === id);
        if (!p) return;

        router.push(
          `/collections/${p.category.toLowerCase()}/${generateSlug(p.productName)}`
        );
      }}
    />
  );
}