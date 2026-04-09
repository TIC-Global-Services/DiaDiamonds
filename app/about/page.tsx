import Hero from "@/components/About/Hero";
import Value from "@/components/About/Value";
import WhyUs from "@/components/About/WhyUs";
import OurRoots from "@/components/About/OurRoots";
import Emotions from "@/components/About/Emotions";
import OurDiamonds from "@/components/About/OurDiamonds";
import VisitStore from "@/components/Reusable/VisitStore";
import ChatBtn from "@/components/Reusable/ChatBtn";

export default function About() {

    return (
        <div>
            <ChatBtn />

            <section data-theme='light'>
                <Hero />
            </section>

            <section data-theme='dark'>
                <Value />
            </section>

            <section data-theme='light'>
                <WhyUs />
            </section>

            <section data-theme='light'>
                <OurRoots />
            </section>

            <section data-theme='dark'>
                <Emotions />
            </section>


            <section data-theme='dark'>
                <OurDiamonds />
            </section>


            <section data-theme='light'>
                <VisitStore />
            </section>
        </div>
    )
}