import Hero from "@/components/Home/Hero";
import Image from "next/image";
import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import BrandValue from "@/components/Home/BrandValue";
import Arrivals from "@/components/Home/Arrivals";
import DiamondSpotlight from "@/components/Home/DiamondSpotlight";
import TheArtOfRefinement from "@/components/Home/TheArtOfRefinement";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiamondSpotlight />
      <TheArtOfRefinement />
      <BrandValue />
      <Arrivals />
      <Footer />
    </div>
  );
}
