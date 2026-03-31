"use client";
import { useParams, useRouter } from "next/navigation";
import productsData from "@/products_new.json";
import ProductView from "@/components/Products/SingleProduct/ProductViewPage";
import ProductNotFound from "@/components/Reusable/ProductNotFound";
import { Product } from "@/types/product";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  const Products = productsData as Product[];

  //Prevent flicker: wait until params exist
  if (!params?.category || !params?.slug) {
    return null; // or loading spinner
  }

  const category = (params.category as string).toLowerCase();
  const slug = params.slug as string;

  const product = Products.find(
    (p) =>
      p.slug === slug &&
      p.category.toLowerCase() === category
  );

  console.log("Product Data:", product)

  if (!product) return <ProductNotFound />;

  return (
    <ProductView
      product={product}
      onBack={() => router.push(`/collections/${category}`)}
      onProductClick={(id) => {
        const p = productsData.find((x) => x.id === id);
        if (!p) return;

        router.push(
          `/collections/${p.category.toLowerCase()}/${p.slug}`
        );
      }}
    />
  );
}