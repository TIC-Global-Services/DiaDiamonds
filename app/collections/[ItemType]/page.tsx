"use client";

import ChatBtn from "@/components/Reusable/ChatBtn";
import Navbar from "@/components/Reusable/Navbar";
import CollectionsTop from "@/components/Collections/CollectionsTop";
import ProductListing from "../reusable/ProductListing";
import Footer from "@/components/Reusable/Footer";

import { useParams } from "next/navigation";
import { useState } from "react";
import { ParamValue } from "next/dist/server/request/params";



const CollectionsItems = {
    
    rings:{
        normal:[
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img1.png",
                color:"Yellow Gold",
                name:"Engagement Ring",
                type:"Round Brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img2.jpg",
                color:"Rose Gold",
                name:"Engagement Ring",
                type:"Cushion Cut"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img3.png",
                color:"Yellow Gold",
                name:"Floral Diamond rings",
                type:"Marquise Cut"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img4.jpg",
                color:"Rose Gold",
                name:"Floral Engagement ring",
                type:"Round Brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img5.png",
                color:"Rose Gold",
                name:"Chevron Rings",
                type:"Round Brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img6.png",
                color:"Silver",
                name:"Starlight Silver",
                type:"Round Brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img7.png",
                color:"Rose Gold",
                name:"Twilight Twist Solitaire",
                type:"Princess Cut"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img8.png",
                color:"Yellow Gold",
                name:"Harmony Two-Stone Ring",
                type:"Emerald + Round"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img9.png",
                color:"Yellow Gold",
                name:"Aurora Curve Ring",
                type:"Round Brilliant"
            },
            ],
        roundBrilliant:[
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img1.png",
                color:"Yellow Gold",
                name:"Floral Engagement ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img2.png",
                color:"Rose Gold",
                name:"Floral Engagement ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img3.png",
                color:"Silver",
                name:"Floral Engagement ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img4.png",
                color:"Yellow Gold",
                name:"Engagement ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img5.png",
                color:"Rose Gold",
                name:"Engagement ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img6.png",
                color:"Silver",
                name:"Engagement ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img7.png",
                color:"Yellow Gold",
                name:"Chevron ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img8.png",
                color:"Rose Gold",
                name:"Chevron ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img9.png",
                color:"Silver",
                name:"Chevron ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img10.png",
                color:"Yellow Gold",
                name:"Aurora Curve Ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img11.png",
                color:"Rose Gold",
                name:"Aurora Curve Ring",
                type:"round brilliant"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img12.png",
                color:"Silver",
                name:"Aurora Curve Ring",
                type:"round brilliant"
            },
            ],
        cushionCut:[
            {
                img:"/assets/img/collections/collectionItem/rings/Cushion Cut/img1.png",
                color:"Silver",
                name:"Engagement Ring",
                type:"Cushion Cut"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/Cushion Cut/img2.png",
                color:"Rose Gold",
                name:"Engagement Ring",
                type:"Cushion Cut"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/Cushion Cut/img3.png",
                color:"Yellow Gold",
                name:"Engagement Ring",
                type:"Cushion Cut"
            },
            ],
        emeraldRound:[
            {
                img:"/assets/img/collections/collectionItem/rings/EmeraldRound/img1.png",
                color:"Yellow Gold",
                name:"Harmony Two Stone Ring",
                type:"Emerald Round"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/EmeraldRound/img2.png",
                color:"Rose Gold",
                name:"Harmony Two Stone Ring",
                type:"Emerald Round"
            },
            {
                img:"/assets/img/collections/collectionItem/rings/EmeraldRound/img3.png",
                color:"Silver",
                name:"Harmony Two Stone Ring",
                type:"Emerald Round"
            },
            ],
        princessCut:[
            {
                img:"/assets/img/collections/collectionItem/rings/Princess Cut/img1.png",
                color:"Yellow Gold",
                name:"Twilight Twist Solitaire",
                type:"Princess Cut"
            },
            ],
        marquiseCut:[
            {
                img:"/assets/img/collections/collectionItem/rings/Marquise Cut/img1.png",
                color:"Rose Gold",
                name:"Floral Diamond Rings",
                type:"Marquise Cut"
            },
             {
                img:"/assets/img/collections/collectionItem/rings/Marquise Cut/img2.png",
                color:"Silver",
                name:"Floral Diamond Rings",
                type:"Marquise Cut"
            },
             {
                img:"/assets/img/collections/collectionItem/rings/Marquise Cut/img3.png",
                color:"Ywllow Gold",
                name:"Floral Diamond Rings",
                type:"Marquise Cut"
            },
            ],
    },
    earrings:{
        normal:[
             {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img1.png",
                color:"Yellow Gold",
                name:"Solar Radiant diamond stud",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img2.png",
                color:"Silver",
                name:"Solara diamond Earrings",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img3.png",
                color:"Yellow Gold",
                name:"Cosmic Glow Earrings",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img4.png",
                color:"Yellow Gold",
                name:"Imperial Clover Studs",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img5.png",
                color:"Rose Gold",
                name:"Diagonal Shine Earrings",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img6.png",
                color:"Yellow Gold",
                name:"Pure Brillance studs",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img7.png",
                color:"Yellow Gold",
                name:"Nova Sparks Stud",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img8.png",
                color:"Yellow Gold",
                name:"Quad Shine studs",
                type:"none"
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img9.png",
                color:"Yellow Gold",
                name:"Luxe Crown Studs",
                type:"none"
            },
            ]
    },
    
    bracelets:{
        normal:[
            {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img1.png",
                color:"Rose Gold",
                name:"Regal Radiance Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img2.jpg",
                color:"Yellow Gold",
                name:"Noble Luxe Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img3.png",
                color:"Rose Gold",
                name:"Bloom Luxe Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img4.png",
                color:"Rose Gold",
                name:"Line Spark Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img5.png",
                color:"Yellow Gold",
                name:"Sovereign Diamond Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img6.jpg",
                color:"Silver",
                name:"Petal Crown Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img7.jpg",
                color:"Silver",
                name:"Linear Diamond Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img8.jpg",
                color:"Yellow Gold",
                name:"Charm Diamond Bracelet",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img9.jpg",
                color:"Yellow Gold",
                name:"Infinity Diamond Bracelet",
                type:"none"
            },
            ]
    },
    
    necklaces:{
        normal:[
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img1.png",
                color:"Yellow Gold",
                name:"Aurora Layered Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img2.png",
                color:"Silver",
                name:"Timeless Diamond Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img3.png",
                color:"Rose Gold",
                name:"Regal Link Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img4.png",
                color:"Rose Gold",
                name:"Blossom Diamond Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img5.png",
                color:"Rose Gold",
                name:"Royal Essence Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img6.png",
                color:"Yellow Gold",
                name:"Luxe Layered Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img7.png",
                color:"Rose Gold",
                name:"Solitaire Diamond Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img8.png",
                color:"Rose Gold",
                name:"Regal Stones Necklace",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img9.png",
                color:"Rose Gold",
                name:"Tangled Infinity",
                type:"none"
            },
            ]
    },
    
    pendants:{
        normal:[
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img1.png",
                color:"Rose Gold",
                name:"Signature Diamond Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img2.png",
                color:"Rose Gold",
                name:"Eternal Glow Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img3.png",
                color:"Yellow Gold",
                name:"Pure Brilliance Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img4.png",
                color:"Yellow Gold",
                name:"Viora Diamond Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img5.png",
                color:"Rose Gold",
                name:"Oria Luxe Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img6.png",
                color:"Yellow Gold",
                name:"Sunburst Diamond Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img7.png",
                color:"Silver",
                name:"Heart Spark Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img8.png",
                color:"Silver",
                name:"Pure Brilliance Pendant",
                type:"none"
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img9.png",
                color:"Rose Gold",
                name:"Royal Glow Pendant",
                type:"none"
            },
            ],
    }
    
    
    
    
}

type DataProps = {
    img:string,
    color:string,
    name:string,
    type:string,
} 

type RingItemsType = {
    normal: DataProps[],
}

type ItemsType = {
    normal: DataProps[],
    roundBrilliant: DataProps[],
    cushionCut: DataProps[],
    emeraldRound: DataProps[],
    princessCut: DataProps[],
    marquiseCut: DataProps[],

}

type Item = {
    data: RingItemsType | ItemsType
}

export default function Collections(){

    let currentItemType;

    const [Item, setItem] = useState<ParamValue>(useParams().ItemsType);

    switch(Item){

        case "rings":
            currentItemType = CollectionsItems.rings;
            break

        case "necklaces":
            currentItemType = CollectionsItems.necklaces;
            break
        
        case "pendants":
            currentItemType = CollectionsItems.pendants;
            break

        case "earrings":
            currentItemType = CollectionsItems.earrings;
            break
        
        case "bracelets":
            currentItemType = CollectionsItems.bracelets;
            break

        default:
            currentItemType = CollectionsItems.rings

    }

    return(
        <div className="w-full overflow-hidden">
            <ChatBtn />
            <Navbar />
            {/* Make sure to pass in the params to get the current item dynamically */}
            <CollectionsTop item={Item} setItem={setItem} /> 
            <ProductListing data={currentItemType} item={Item} setItem={setItem} />
            <Footer/>
        </div>
    )
}