import ChatBtn from "@/components/Reusable/ChatBtn"
import Hero from "@/components/Contact/Hero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo"


export default function Contact() {

    return (
        <div className="w-full">
            <ChatBtn />
            <section data-theme='dark'>
                <Hero />
            </section>

            <section data-theme='light'>
                <ContactForm />
            </section>

            <section data-theme='light'>
                <ContactInfo />
            </section>
        </div>
    )
}