import CollectionsTop from "@/components/Collections/CollectionsTop"
import TopMiniMenu from "@/components/Collections/DedicatedPage/TopMiniMenu"
import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import ItemDisplay from "@/components/Collections/DedicatedPage/ItemDisplay";

export default function DedicatedPage(){

    return(
        <div className="w-full overflow-hidden">
            <Navbar />
            <TopMiniMenu item="rings" />
            <ItemDisplay />
            <Footer />
        </div>
    )
}