import Image from "next/image";
import PrimaryBtn from "../Reusable/PrimaryBtn";
import bgImage from '@/public/assets/img/Contact/bgImage.png'

export default function Hero() {

    return (
        <section data-theme="dark" className="relative w-full h-[100dvh] md:h-auto md:aspect-1440/960 overflow-hidden flex">

            <div className="relative w-full h-full">
                <Image
                    src={bgImage}
                    alt="bgImage"
                    fill
                    priority
                    className="object-cover md:object-fill object-[30%_50%]"
                />
            </div>


            <div className="absolute top-[65.6%] md:top-[38.75%] md:left-[23.82%] w-full md:w-[52.36%] flex flex-col justify-center items-center">

                <h2 className="text-white text-center font-medium text-[24px] md:text-[44px] leading-[46px] uppercase m-0 pb-[3.4%] md:pb-[1.86%]">Discover timeless elegance</h2>

                <p className="text-white text-[13px] md:text-[22px] leading-[24px] m-0 md:m-auto pb-[6.31%] md:pb-[3.45%]">Exquisite Diamond Jewellery of Unparalleled Brilliance  </p>

                <PrimaryBtn text="SHOP NOW" />
            </div>

        </section>
    )
}