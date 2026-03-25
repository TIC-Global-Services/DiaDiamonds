
import Hero from "@/components/Precision/Hero";
import Creation from "@/components/Precision/Creation";
import Showcase from "@/components/Precision/Showcase";
import Brilliance from "@/components/Precision/Brilliance";
import Certified from "@/components/Precision/Certified";
import VisitStore from "@/components/Reusable/VisitStore";



export default function Precision() {

    return (
        <div className="w-full overflow-hidden">
            <Hero />
            <Creation />
            <Showcase />
            <Brilliance />
            <Certified />
            <VisitStore />
        </div>
    )
}   