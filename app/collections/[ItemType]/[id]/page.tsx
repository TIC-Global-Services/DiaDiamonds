import CollectionsTop from "@/components/Collections/CollectionsTop"
import TopMiniMenu from "@/components/Collections/DedicatedPage/TopMiniMenu"
import Navbar from "@/components/Reusable/Navbar";
import Footer from "@/components/Reusable/Footer";
import ItemDisplay from "@/components/Collections/DedicatedPage/ItemDisplay";
import ItemContent from "@/components/Collections/DedicatedPage/ItemContent";

export default function DedicatedPage(){

    return(
        <div className="w-full overflow-hidden">
            <Navbar />
            <TopMiniMenu item="rings" />
            <ItemDisplay />
            <ItemContent />
            <Footer />
        </div>
    )
}