import { Suspense } from 'react';
import { redirect } from "next/navigation";

export default function CollectionsNewPage() {
  redirect("/collections/rings");
}
