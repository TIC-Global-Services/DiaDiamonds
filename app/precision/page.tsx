import Navbar from "@/components/Reusable/Navbar";
import Hero from "@/components/Precision/Hero";
import Creation from "@/components/Precision/Creation";
import Showcase from "@/components/Precision/Showcase";
import Brilliance from "@/components/Precision/Brilliance";
import Certified from "@/components/Precision/Certified";
import VisitStore from "@/components/Reusable/VisitStore";
import Footer from "@/components/Reusable/Footer";
import ChatBtn from "@/components/Reusable/ChatBtn";


export default function Precision(){

    return(
        <div className="w-full overflow-hidden">
            <ChatBtn/>
            <Navbar />
           <Hero />
           <Creation />
           <Showcase />
            <Brilliance />
           <Certified />
           <VisitStore />
           <Footer />
        </div>
    )
}