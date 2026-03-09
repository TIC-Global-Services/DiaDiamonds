

export default function ContactForm(){
    return(
        <section className="relative w-full md:aspect-1440/753 bg-[#F5ECE0]">

            <div className="w-full md:absolute md:top-[-44.82%] md:left-[25.35%] md:w-[49.31%]  md:mx-auto bg-[#FCF9F4] p-[1.88%]">

                
                    <h2 className="text-center md:pt-[7.32%] md:pb-[5.49%] md:text-[24px]">Inquiry Form</h2>

                    <form className="md:px-[3.38%] md:py-[1.69%]">

                        <label htmlFor="" className="pb-[1.70%]">Full Name</label>
                        <input type="text" className="w-full rounded-[20px] md:aspect-542/54 md:mb-[3.39%] bg-[#FFFFFF]/40 border-[#FFFFFF]/70" />

                        <label htmlFor="" className="pb-[1.70%]">Email</label>
                        <input type="text" className="w-full rounded-[20px] md:aspect-542/54 md:mb-[3.39%] bg-[#FFFFFF]/40 border-[#FFFFFF]/70" />

                        <label htmlFor="" className="pb-[1.70%]">Subject</label>
                        <input type="text" className="w-full rounded-[20px] md:aspect-542/54 md:mb-[3.39%] bg-[#FFFFFF]/40 border-[#FFFFFF]/70" />

                        <label htmlFor="" className="pb-[1.70%]">Message</label>
                        <textarea className="w-full rounded-[20px] md:aspect-542/180 md:mb-[3.39%] bg-[#FFFFFF]/40 border-[#FFFFFF]/70" />

                        <div className="relative w-full ">
                            <input type="file" name="" id="" className=" w-full  z-20 opacity-0 md:py-[2.03%] md:mb-[1.70%]" />
                            <input type="file" name="" id="" className="absolute top-0 left-0 w-full  z-20 opacity-0 md:py-[2.03%] md:mb-[1.70%]" />
                            <button className="absolute top-0 left-0 w-full  bg-[#7C3C3C] text-white rounded-[20px] md:py-[2.03%] md:mb-[1.70%]">Attach Files</button>
                            <p className="m-0 text-[13px] text-[#585858F7]">Attach up to 10 files. The maximum allowed size per file is 10 MB.</p>
                        </div>


                        <button className=" w-full  bg-[#7C3C3C] text-white rounded-[20px] md:py-[2.03%] md:mt-[6.10%] md:mb-[1.70%]">Send</button>
                        <p className="m-0 text-[13px] text-[#585858F7] md:mb-[8.14%]">This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>
                        
                        

                    </form>

            </div>

        </section>
    )
}