import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import BrandValue from "@/components/Home/BrandValue";
import Arrivals from "@/components/Home/Arrivals";
import DiamondSpotlight from "@/components/Home/DiamondSpotlight";
import TheArtOfRefinement from "@/components/Home/TheArtOfRefinement";
import Craftsmanship from "@/components/Home/Craftmanship";
import DIAExperience from "@/components/Home/DIAExperience";
import Testimonials from "@/components/Home/Testimonials";
import OurCollection from "@/components/Home/OurCollections";
import QandA from "@/components/Home/Q&A";
import Shop from "@/components/Home/Shop";
import Search from "@/components/Home/Search";
import ChatBtn from "@/components/Reusable/ChatBtn";

export default function Home() {
  return (
    <div className="">
      <ChatBtn/>
      <Navbar />
      <Hero />
      <OurCollection />
      <DiamondSpotlight />
      <Shop />
      <TheArtOfRefinement />
      <Craftsmanship />
      <BrandValue />
      <Arrivals />
      <DIAExperience />
      <Testimonials />
      <QandA />
      <Footer />
    </div>
  );
}
