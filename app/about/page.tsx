import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import Hero from "@/components/About/Hero";
import Value from "@/components/About/Value";
import WhyUs from "@/components/About/WhyUs";
import OurRoots from "@/components/About/OurRoots";
import Emotions from "@/components/About/Emotions";
import OurDiamonds from "@/components/About/OurDiamonds";
import VisitStore from "@/components/About/VisitStore";
import ChatBtn from "@/components/Reusable/ChatBtn";

export default function About(){

    return(
        <div>
        <ChatBtn />
        <Navbar />
        <Hero />
        <Value />
        <WhyUs />
        <OurRoots />
        <Emotions />
        <OurDiamonds />
        <VisitStore />
        <Footer/>
        </div>
    )
}