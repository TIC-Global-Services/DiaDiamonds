
import Hero from "@/components/Precision/Hero";
import Creation from "@/components/Precision/Creation";
import Showcase from "@/components/Precision/Showcase";
import Brilliance from "@/components/Precision/Brilliance";
import Certified from "@/components/Precision/Certified";
import VisitStore from "@/components/Reusable/VisitStore";
import ChatBtn from "@/components/Reusable/ChatBtn";



export default function Precision() {

    return (
        <div className="w-full overflow-hidden">
            <ChatBtn />

            <section data-theme='dark' data-priority="hero" className="h-screen min-h-[100dvh]">
                <Hero />
            </section>

            <section data-theme='light'>
                <Creation />
            </section>

            <section data-theme='dark'>
                <Showcase />
            </section>

            <section data-theme='light'>
                <Brilliance />
            </section>

            <section data-theme='light'>
                <Certified />
            </section>

            <VisitStore />
        </div>
    )
}   