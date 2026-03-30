


export default function ContactForm(){
    return(
        <section className="relative px-[3.64%] py-[8.25%] md:px-0 md:py-0  w-full md:aspect-1440/753 bg-[#F5ECE0]" data-theme="light">

            <div className="w-full md:absolute md:top-[-44.82%] md:left-[25.35%] md:w-[49.31%] rounded-[25px] md:rounded-[0px]  md:mx-auto bg-[#FCF9F4] p-[1.88%]">

                
                    <h2 className="text-center py-8 md:py-0 md:pt-[7.32%] md:pb-[5.49%] text-xl md:text-[24px]">Inquiry Form</h2>
                    <form className="px-[6.32%] md:px-[3.38%] md:py-[1.69%]">

                        <label htmlFor="" className="pb-[2.63%] md:pb-[1.70%]">Full Name</label>
                        <input required type="text" className="w-full aspect-332/40 md:aspect-542/54 mb-[8.96%] p-4 md:mb-[3.39%] bg-[#FFFFFF]/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]" />

                        <label htmlFor="" className="pb-[2.63%] md:pb-[1.70%]">Email</label>
                        <input required type="text" className="w-full aspect-332/40 md:aspect-542/54 mb-[8.96%] p-4 md:mb-[3.39%] bg-[#FFFFFF]/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)] " />

                        <label htmlFor="" className="pb-[2.63%] md:pb-[1.70%]">Subject</label>
                        <input required type="text" className="w-full aspect-332/40 md:aspect-542/54 mb-[8.96%] p-4 md:mb-[3.39%] bg-[#FFFFFF]/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]" />

                        <label htmlFor="" className="pb-[2.63%] md:pb-[1.70%]">Message</label>
                        <textarea className="w-full aspect-332/180 md:aspect-542/180 mb-[8.96%] md:mb-[3.39%] p-4 bg-[#FFFFFF]/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-[inset_-1px_-1px_4px_0_rgba(0,0,0,0.25)]" />

                        <div className="hidden md:block relative w-full ">
                            <input type="text" name="" id="" className=" w-full  z-20 opacity-0 md:py-[2.03%] md:mb-[1.70%]" />
                            <input type="file" className="absolute top-0 left-0 w-full opacity-0 md:py-[2.03%]" />
                            <button className="absolute top-0 left-0 w-full  bg-[#7C3C3C] text-white rounded-[20px] md:py-[2.03%] md:mb-[1.70%]">Attach Files</button>
                            <p className="m-0 text-[13px] text-[#585858F7]">Attach up to 10 files. The maximum allowed size per file is 10 MB.</p>
                        </div>

                        <div className="md:hidden ">
                            <label htmlFor="">Attach File</label>

                            <div className="relative flex flex-col justify-center items-center border-dashed border-[1px] rounded-[10px] py-[5.53%] px-[3.68%] ">

                                <svg className="mb-[5.38%]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15.75C18 17.4833 17.3917 18.9583 16.175 20.175C14.9583 21.3917 13.4833 22 11.75 22C10.0167 22 8.54167 21.3917 7.325 20.175C6.10833 18.9583 5.5 17.4833 5.5 15.75V6.5C5.5 5.25 5.93767 4.18767 6.813 3.313C7.68833 2.43833 8.75067 2.00067 10 2C11.2493 1.99933 12.312 2.437 13.188 3.313C14.064 4.189 14.5013 5.25133 14.5 6.5V15.25C14.5 16.0167 14.2333 16.6667 13.7 17.2C13.1667 17.7333 12.5167 18 11.75 18C10.9833 18 10.3333 17.7333 9.8 17.2C9.26667 16.6667 9 16.0167 9 15.25V6H11V15.25C11 15.4667 11.071 15.646 11.213 15.788C11.355 15.93 11.534 16.0007 11.75 16C11.966 15.9993 12.1453 15.9283 12.288 15.787C12.4307 15.6457 12.5013 15.4667 12.5 15.25V6.5C12.4833 5.8 12.2377 5.20833 11.763 4.725C11.2883 4.24167 10.7007 4 10 4C9.29933 4 8.70767 4.24167 8.225 4.725C7.74233 5.20833 7.50067 5.8 7.5 6.5V15.75C7.48333 16.9333 7.89167 17.9377 8.725 18.763C9.55833 19.5883 10.5667 20.0007 11.75 20C12.9167 20 13.9083 19.5877 14.725 18.763C15.5417 17.9383 15.9667 16.934 16 15.75V6H18V15.75Z" fill="black"/></svg>

                                <h3 className="mb-[5.38%] text-sm md:text-base">Tap to upload</h3>

                                <p className="text-center mb-[5.38%] text-[#B1B1B1] text-xs md:text-sm">Attach up to 10 files. The maximum allowed size per file is 10 MB.</p>

                                <button className="py-2 px-6 md:py-[2.31%] md:px-[11.88%] bg-[#7C3C3C] rounded-[20px] border border-[#0000001A] text-white text-sm md:text-base">Choose File</button>

                                <input type="file" className="absolute w-full h-full inset-0 opacity-0" />
                            </div>
                            
                        </div>


                        <button className=" w-full  bg-[#7C3C3C] text-white rounded-[20px] py-[3.16%] md:py-[2.03%] mt-[11.32%] md:mt-[6.10%] mb-[2.63%] md:mb-[1.70%]">Send</button>
                        <p className="m-0 text-[13px] text-[#585858F7] mb-[27.64%] md:mb-[8.14%] text-center md:text-left">This site is protected by reCAPTCHA Enterprise and the Google Privacy Policy and Terms of Service apply.</p>
                        
                        

                    </form>

            </div>

        </section>
    )
}