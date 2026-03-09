import Navbar from "@/components/Reusable/Navbar"
import ChatBtn from "@/components/Reusable/ChatBtn"
import Hero from "@/components/Contact/Hero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo"
import Footer from "@/components/Reusable/Footer"

export default function Contact(){

    return(
        <div className="w-full">
            <ChatBtn />
            <Navbar />
            <Hero />
            <ContactForm />
            <ContactInfo />
            <Footer />
        </div>
    )
}