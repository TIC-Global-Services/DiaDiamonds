import Navbar from "@/components/Reusable/Navbar";
import Hero from "@/components/Precision/Hero";
import Creation from "@/components/Precision/Creation";
import Showcase from "@/components/Precision/Showcase";
import Brilliance from "@/components/Precision/Brilliance";
import Certified from "@/components/Precision/Certified";
import VisitStore from "@/components/Reusable/VisitStore";
import Footer from "@/components/Reusable/Footer";


export default function Precision(){

    return(
        <div className="w-full overflow-hidden">
            <Navbar />
           <Hero />
           <Creation />
           <Showcase />
           <div className="w-full bg-[linear-gradient(180deg,#f8cc96_0%,#f8d8b1_0.01%,#f7e7d3_0.02%,#f7ead9_0.03%,#f7f6f4_100%)]">
            <Brilliance />
           <Certified />
           </div>
           <VisitStore />
           <Footer />
        </div>
    )
}