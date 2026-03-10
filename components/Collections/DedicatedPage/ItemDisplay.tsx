

export default function ItemDisplay(){

    return(
        <section className="w-full md:px-[6.67%] flex justify-between">

            {/* Left Info & Options */}
            <div className="w-full md:w-[39.74%] pl-[4.37%] md:pl-0">

                    <h3 className="md:pt-[7.47%] text-[24px] leading-[32px] tracking-[-0.72px] uppercase text-[#000000">Engagement Ring </h3>
                <p className="md:pt-[1.61%] md:pb-[3.23%] text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000]">Ring in Yellow Gold with Diamonds</p>
                <p className="md:pb-[4.91%] font-baskerville text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000]">Round Brilliant Cut </p>


                {/* Mobile Image */}
                <div className="md:hidden w-[67.72%] aspect-[279/177] overflow-hidden mx-auto">

                    <img src='/assets/img/Collections/DedicatedPage/ring1.jpg' alt="ring1" className="w-full h-full object-cover" />

                </div>

                {/* Mobile Size options */}
                <div className=" md:hidden w-full border-t-[1px] border-l-0 border-r-0 border-b-0 border-[#0000001F] py-[4.37%] md:py-[3.57%] flex gap-[2.67%] md:gap-[2.27%] md:mb-[6.81%]">

                    <h3 className="md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000]/40 md:pt-[3.91%]">Size:</h3>
                    <button className="w-[6.07%] md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">XS</button>
                    <button className="w-[6.07%] md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">S</button>
                    <button className="w-[6.07%] md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full text-[13px] leading-[20px] tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">M</button>

                </div>

                <div className="flex md:gap-[5.46%] md:pb-[9.71%]">

                    <div className="md:w-[24.48%] aspect-square ">

                        <div className="w-full h-full overflow-hidden border-b-[1px] border-t-0 border-x-0 border-[#000000]">

                        <img src="/assets/img/Collections/DedicatedPage/ring1.jpg" alt="" className="w-full object-cover" />
                        
                        </div>

                        <h3 className="text-center pt-[1.21%] md:pt-[5.50%]">Yellow Gold</h3>

                    </div>

                    <div className="md:w-[24.48%] aspect-square ">

                        <div className="w-full h-auto overflow-hidden">

                        <img src="/assets/img/Collections/DedicatedPage/ring1.jpg" alt="" className="w-full object-cover" />
                        
                        </div>

                        <h3 className="text-center pt-[1.21%] md:pt-[5.50%]">Rose Gold</h3>

                    </div>
                    
                    <div className="md:w-[24.48%] aspect-square ">

                        <div className="w-full h-auto overflow-hidden">

                        <img src="/assets/img/Collections/DedicatedPage/ring1.jpg" alt="" className="w-full object-cover" />
                        
                        </div>

                        <h3 className="text-center pt-[1.21%] md:pt-[5.50%]">Silver</h3>

                    </div>

                    


                </div>


                <div className="hidden md:flex w-full border-t-[1px] border-l-0 border-r-0 border-b-0 border-[#0000001F] md:py-[3.57%] flex md:gap-[2.27%] md:mb-[6.81%]">

                    <h3 className="md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000]/40 md:pt-[3.91%]">Size:</h3>
                    <button className="md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">XS</button>
                    <button className="md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">S</button>
                    <button className="md:w-[5.06%] aspect-square border-[0.5px] flex justify-center items-center rounded-full md:text-[13px] md:leading-[20px] md:tracking-[-0.26px] text-[#000000] bg-[#D9D9D900] border-[#0000001A] md:mt-[3.91%]">M</button>

                </div>

                <button className="block w-[76.36%] mt-[11.65%] md:mt-0 md:w-[90.55%] mx-auto py-[5.72%] md:py-[4.65%]  bg-[#F4F0EA0A] border-[1px] border-[#FFFFFF] rounded-[30px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] font-semibold text-[10.3px] leading-[16px] tracking-[0.88px] uppercase text-[#000000] cursor-pointer ">CONTACT STORE</button>

            </div>

            <div className="hidden md:block md:w-[47.15%] md:aspect-square overflow-hidden">

                <img src="/assets/img/Collections/DedicatedPage/ring1.jpg" alt="" className="w-full object-cover" />

            </div>

        </section>
    )
}