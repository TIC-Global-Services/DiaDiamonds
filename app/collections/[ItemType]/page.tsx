"use client";

import ChatBtn from "@/components/Reusable/ChatBtn";
import Navbar from "@/components/Reusable/Navbar";
import CollectionsTop from "@/components/Collections/CollectionsTop";
import ProductListing from "../reusable/ProductListing";
import Footer from "@/components/Reusable/Footer";

import { useParams } from "next/navigation";
import { useState } from "react";

import TheArtOfCrafting from "../reusable/TheArtOfCrafting";



const CollectionsItems = {
    
    rings:{
        normal:[
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img1.png",
                color:"Yellow Gold",
                name:"Engagement Ring",
                type:"Round Brilliant",
                id:0
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img2.jpg",
                color:"Rose Gold",
                name:"Engagement Ring",
                type:"Cushion Cut",
                id:1
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img3.png",
                color:"Yellow Gold",
                name:"Floral Diamond rings",
                type:"Marquise Cut",
                id:2
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img4.jpg",
                color:"Rose Gold",
                name:"Floral Engagement ring",
                type:"Round Brilliant",
                id:3
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img5.png",
                color:"Rose Gold",
                name:"Chevron Rings",
                type:"Round Brilliant",
                id:4
                
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img6.png",
                color:"Silver",
                name:"Starlight Silver",
                type:"Round Brilliant",
                id:5
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img7.png",
                color:"Rose Gold",
                name:"Twilight Twist Solitaire",
                type:"Princess Cut",
                id:6
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img8.png",
                color:"Yellow Gold",
                name:"Harmony Two-Stone Ring",
                type:"Emerald + Round",
                id:7
            },
            {
                img:"/assets/img/collections/collectionItem/rings/normal/img9.png",
                color:"Yellow Gold",
                name:"Aurora Curve Ring",
                type:"Round Brilliant",
                id:8
            },
            ],
        roundBrilliant:[
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img1.png",
                color:"Yellow Gold",
                name:"Floral Engagement ring",
                type:"round brilliant",
                id:9
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img2.jpg",
                color:"Rose Gold",
                name:"Floral Engagement ring",
                type:"round brilliant",
                id:10
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img3.jpg",
                color:"Silver",
                name:"Floral Engagement ring",
                type:"round brilliant",
                id:11
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img4.png",
                color:"Yellow Gold",
                name:"Engagement ring",
                type:"round brilliant",
                id:12
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img5.png",
                color:"Rose Gold",
                name:"Engagement ring",
                type:"round brilliant",
                id:13
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img6.png",
                color:"Silver",
                name:"Engagement ring",
                type:"round brilliant",
                id:14
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img7.png",
                color:"Yellow Gold",
                name:"Chevron ring",
                type:"round brilliant",
                id:15
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img8.png",
                color:"Rose Gold",
                name:"Chevron ring",
                type:"round brilliant",
                id:16
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img9.png",
                color:"Silver",
                name:"Chevron ring",
                type:"round brilliant",
                id:17
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img10.png",
                color:"Yellow Gold",
                name:"Aurora Curve Ring",
                type:"round brilliant",
                id:18
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img11.png",
                color:"Rose Gold",
                name:"Aurora Curve Ring",
                type:"round brilliant",
                id:19
            },
            {
                img:"/assets/img/collections/collectionItem/rings/round brilliant/img12.png",
                color:"Silver",
                name:"Aurora Curve Ring",
                type:"round brilliant",
                id:20
            },
            ],
        cushionCut:[
            {
                img:"/assets/img/collections/collectionItem/rings/Cushion Cut/img1.png",
                color:"Silver",
                name:"Engagement Ring",
                type:"Cushion Cut",
                id:21
            },
            {
                img:"/assets/img/collections/collectionItem/rings/Cushion Cut/img2.jpg",
                color:"Rose Gold",
                name:"Engagement Ring",
                type:"Cushion Cut",
                id:22
            },
            {
                img:"/assets/img/collections/collectionItem/rings/Cushion Cut/img3.jpg",
                color:"Yellow Gold",
                name:"Engagement Ring",
                type:"Cushion Cut",
                id:23
            },
            ],
        emeraldRound:[
            {
                img:"/assets/img/collections/collectionItem/rings/EmeraldRound/img1.png",
                color:"Yellow Gold",
                name:"Harmony Two Stone Ring",
                type:"Emerald Round",
                id:24
            },
            {
                img:"/assets/img/collections/collectionItem/rings/EmeraldRound/img2.png",
                color:"Rose Gold",
                name:"Harmony Two Stone Ring",
                type:"Emerald Round",
                id:25
            },
            {
                img:"/assets/img/collections/collectionItem/rings/EmeraldRound/img3.png",
                color:"Silver",
                name:"Harmony Two Stone Ring",
                type:"Emerald Round",
                id:26
            },
            ],
        princessCut:[
            {
                img:"/assets/img/collections/collectionItem/rings/Princess Cut/img1.png",
                color:"Yellow Gold",
                name:"Twilight Twist Solitaire",
                type:"Princess Cut",
                id:27
            },
            ],
        marquiseCut:[
            {
                img:"/assets/img/collections/collectionItem/rings/Marquise Cut/img1.png",
                color:"Rose Gold",
                name:"Floral Diamond Rings",
                type:"Marquise Cut",
                id:28
            },
             {
                img:"/assets/img/collections/collectionItem/rings/Marquise Cut/img2.png",
                color:"Silver",
                name:"Floral Diamond Rings",
                type:"Marquise Cut",
                id:29
            },
             {
                img:"/assets/img/collections/collectionItem/rings/Marquise Cut/img3.png",
                color:"Ywllow Gold",
                name:"Floral Diamond Rings",
                type:"Marquise Cut",
                id:30
            },
            ],
    },
    earrings:{
        normal:[
             {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img1.png",
                color:"Yellow Gold",
                name:"Solar Radiant diamond stud",
                type:"none",
                id:31
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img2.png",
                color:"Silver",
                name:"Solara diamond Earrings",
                type:"none",
                id:32
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img3.png",
                color:"Yellow Gold",
                name:"Cosmic Glow Earrings",
                type:"none",
                id:33
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img4.png",
                color:"Yellow Gold",
                name:"Imperial Clover Studs",
                type:"none",
                id:34
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img5.png",
                color:"Rose Gold",
                name:"Diagonal Shine Earrings",
                type:"none",
                id:35
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img6.png",
                color:"Yellow Gold",
                name:"Pure Brillance studs",
                type:"none",
                id:36
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img7.png",
                color:"Yellow Gold",
                name:"Nova Sparks Stud",
                type:"none",
                id:37
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img8.png",
                color:"Yellow Gold",
                name:"Quad Shine studs",
                type:"none",
                id:38
            },
            {
                img:"/assets/img/collections/collectionItem/Earrings/Normal/img9.png",
                color:"Yellow Gold",
                name:"Luxe Crown Studs",
                type:"none",
                id:39
            },
            ]
    },
    
    bracelets:{
        normal:[
            {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img1.png",
                color:"Rose Gold",
                name:"Regal Radiance Bracelet",
                type:"none",
                id:40
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img2.jpg",
                color:"Yellow Gold",
                name:"Noble Luxe Bracelet",
                type:"none",
                id:41
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img3.png",
                color:"Rose Gold",
                name:"Bloom Luxe Bracelet",
                type:"none",
                id:42
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img4.png",
                color:"Rose Gold",
                name:"Line Spark Bracelet",
                type:"none",
                id:43
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img5.png",
                color:"Yellow Gold",
                name:"Sovereign Diamond Bracelet",
                type:"none",
                id:44
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img6.jpg",
                color:"Silver",
                name:"Petal Crown Bracelet",
                type:"none",
                id:45
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img7.jpg",
                color:"Silver",
                name:"Linear Diamond Bracelet",
                type:"none",
                id:46
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img8.jpg",
                color:"Yellow Gold",
                name:"Charm Diamond Bracelet",
                type:"none",
                id:47
            },
             {
                img:"/assets/img/collections/collectionItem/Bracelets/Normal/img9.jpg",
                color:"Yellow Gold",
                name:"Infinity Diamond Bracelet",
                type:"none",
                id:48
            },
            ]
    },
    
    necklaces:{
        normal:[
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img1.png",
                color:"Yellow Gold",
                name:"Aurora Layered Necklace",
                type:"none",
                id:49
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img2.png",
                color:"Silver",
                name:"Timeless Diamond Necklace",
                type:"none",
                id:50
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img3.png",
                color:"Rose Gold",
                name:"Regal Link Necklace",
                type:"none",
                id:51
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img4.png",
                color:"Rose Gold",
                name:"Blossom Diamond Necklace",
                type:"none",
                id:52
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img5.png",
                color:"Rose Gold",
                name:"Royal Essence Necklace",
                type:"none",
                id:53
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img6.png",
                color:"Yellow Gold",
                name:"Luxe Layered Necklace",
                type:"none",
                id:54
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img7.png",
                color:"Rose Gold",
                name:"Solitaire Diamond Necklace",
                type:"none",
                id:55
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img8.png",
                color:"Rose Gold",
                name:"Regal Stones Necklace",
                type:"none",
                id:56
            },
             {
                img:"/assets/img/collections/collectionItem/Necklaces/Normal/img9.png",
                color:"Rose Gold",
                name:"Tangled Infinity",
                type:"none",
                id:57
            },
            ]
    },
    
    pendants:{
        normal:[
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img1.png",
                color:"Rose Gold",
                name:"Signature Diamond Pendant",
                type:"none",
                id:58
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img2.png",
                color:"Rose Gold",
                name:"Eternal Glow Pendant",
                type:"none",
                id:59
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img3.png",
                color:"Yellow Gold",
                name:"Pure Brilliance Pendant",
                type:"none",
                id:60
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img4.png",
                color:"Yellow Gold",
                name:"Viora Diamond Pendant",
                type:"none",
                id:61
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img5.png",
                color:"Rose Gold",
                name:"Oria Luxe Pendant",
                type:"none",
                id:62
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img6.png",
                color:"Yellow Gold",
                name:"Sunburst Diamond Pendant",
                type:"none",
                id:63
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img7.png",
                color:"Silver",
                name:"Heart Spark Pendant",
                type:"none",
                id:64
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img8.png",
                color:"Silver",
                name:"Pure Brilliance Pendant",
                type:"none",
                id:65
            },
             {
                img:"/assets/img/collections/collectionItem/Pendants/Normal/img9.png",
                color:"Rose Gold",
                name:"Royal Glow Pendant",
                type:"none",
                id:66
            },
            ],
    }
    
    
    
    
}

type DataProps = {
    img:string,
    color:string,
    name:string,
    type:string,
    id:number,
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

type CollectionKey = keyof typeof CollectionsItems;

export default function Collections(){

    const params = useParams()

    const [item, setItem] = useState<string>(params.ItemType as string);

    const currentItemType =
    CollectionsItems[item as keyof typeof CollectionsItems] ?? CollectionsItems.rings;


    return(
        <div className="w-full overflow-hidden">
            <ChatBtn />
            <Navbar />
            {/* Make sure to pass in the params to get the current item dynamically */}
            <CollectionsTop item={item} setItem={setItem} /> 
            <ProductListing data={currentItemType} item={item} setItem={setItem} />
            <TheArtOfCrafting img='/assets/img/collections/TheArtOfCrafting/bgImage1.png' text="Where Every Sparkle Tells a Story, Moments Shine Brighter Together" />
            <Footer/>
        </div>
    )
}