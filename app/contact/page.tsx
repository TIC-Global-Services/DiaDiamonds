import Navbar from "@/components/Reusable/Navbar"
import ChatBtn from "@/components/Reusable/ChatBtn"
import ContactInfo from "@/components/Contact/ContactInfo"
import Footer from "@/components/Reusable/Footer"

export default function Contact(){

    return(
        <div className="w-full">
            <ChatBtn />
            <Navbar />
            <ContactInfo />
            <Footer />
        </div>
    )
}