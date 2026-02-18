import Hero from "@/components/Home/Hero";
import Image from "next/image";
import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import BrandValue from "@/components/Home/BrandValue";
import Arrivals from "@/components/Home/Arrivals";
import DiamondSpotlight from "@/components/Home/DiamondSpotlight";
import TheArtOfRefinement from "@/components/Home/TheArtOfRefinement";
import Craftsmanship from "@/components/Home/Craftmanship";
import DIAExperience from "@/components/Home/DIAExperience";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiamondSpotlight />
      <TheArtOfRefinement />
      <Craftsmanship />
      <BrandValue />
      <Arrivals />
      <DIAExperience />
      <Testimonials />
      <Footer />
    </div>
  );
}
