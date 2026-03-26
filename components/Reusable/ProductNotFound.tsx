"use client";

import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Reusable/Breadcrumbs";

export default function ProductNotFound() {
  const router = useRouter();

  return (
    <div className="w-full bg-[#FFFFFF] overflow-hidden pt-[94px]">

      {/* Breadcrumbs Section */}
      <Breadcrumbs
        className="mt-4"
        items={[
          { label: "HOME", href: "/" },
          { label: "COLLECTION", href: "/collections" },
          { label: "PRODUCT NOT FOUND" },
        ]}
      />

      {/* Main Content */}
      <section className="w-full flex flex-col items-center justify-center text-center px-[4.37%] md:px-[6.67%] min-h-[60vh] gap-6">

        <h3 className="text-xl md:text-2xl leading-[32px] tracking-tight uppercase text-[#000000] font-normal">
          Product Not Found
        </h3>

        <p className="font-baskerville text-[10px] md:text-xl leading-[1.2] tracking-tight text-[#000000] max-w-md">
          The piece you're looking for may have moved or is no longer available.
        </p>

        <p className="text-[12px] md:text-sm leading-[1.6] tracking-tight text-[#000000]/50 max-w-sm">
          Explore our curated collections to find something equally timeless and beautiful.
        </p>

        <div className="w-full border-b border-[#000000]/10 max-w-sm" />

        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => router.back()}
            className="py-3 px-8 bg-white border border-[#F0F0F0] rounded-[25px] font-bold text-[9px] leading-[16px] tracking-[1px] uppercase text-[#000000] cursor-pointer hover:bg-black hover:text-white transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.03)]"
          >
            Go Back
          </button>

          <button
            onClick={() => router.push("/collections")}
            className="py-3 px-8 bg-white border border-[#F0F0F0] rounded-[25px] font-bold text-[9px] leading-[16px] tracking-[1px] uppercase text-[#000000] cursor-pointer hover:bg-black hover:text-white transition-colors shadow-[0_4px_14px_0_rgba(0,0,0,0.03)]"
          >
            View All Collections
          </button>
        </div>

      </section>

      {/* Bottom Divider */}
      <div className="w-[98%] mx-auto mt-[10%] md:mt-[4%]">
        <div className="w-full border-b-[3px] border-[#000000]/20 relative">
          <div className="absolute -translate-y-1/4 w-full top-0 left-0 flex justify-start">
            <div className="border-t-[5px] border-[#7C3C3C] md:w-[34%]" />
          </div>
        </div>
      </div>

    </div>
  );
}