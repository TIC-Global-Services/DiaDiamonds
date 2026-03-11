"use client";

import { useState } from "react";

import CollectionsTop from "@/components/Collections/CollectionsTop"
import TopMiniMenu from "@/components/Collections/DedicatedPage/TopMiniMenu"
import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import ItemDisplay from "@/components/Collections/DedicatedPage/ItemDisplay";
import { ItemData } from "@/app/collections/[ItemType]/[id]/data"
import ItemContent from "@/components/Collections/DedicatedPage/ItemContent";
import YouMayLike from "@/components/Collections/DedicatedPage/YouMayLike";

import { useParams } from "next/navigation";

type Variant = "YG" | "RG" | "S";

type Size = "XS" | "S" | "M";

export default function DedicatedPage(){

    const id = useParams().id;
    const titleText = useParams().ItemType?.toString();

    const currentItem = ItemData[Number(id)];

    const [currentVariant, setCurrentVariant] = useState<Variant>(currentItem.currentVar);
    const [currentSize, setCurrentSize] = useState<Size>(currentItem.currentSize);

    return(
        <div className="w-full overflow-hidden">
            <Navbar />
            <TopMiniMenu item={titleText} />
            <ItemDisplay id={Number(id)} currentVariant={currentVariant} setCurrentVariant={setCurrentVariant} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
            <ItemContent id={Number(id)} currentVariant={currentVariant} setCurrentVariant={setCurrentVariant} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
            <YouMayLike />
            <Footer />
        </div>
    )
}