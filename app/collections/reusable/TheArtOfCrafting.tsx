

type ArtOfCraftingProps = {
    img:string,
    text:string,
}


export default function TheArtOfCrafting({img, text}:ArtOfCraftingProps){


    return(
        <section className="w-full flex flex-wrap md:flex-nowrap md:items-stretch">

            <div className="w-full md:w-[65.28%] aspect-412/529 md:aspect-940/847 overflow-hidden flex stretch">

                <img src={img} alt={'bgImage'} className="w-full  aspect-412/529 md:aspect-940/847 h-auto  object-cover"/>

            </div>

            <div className="w-full md:w-[34.72%] px-[29.61%] py-[21.84%] md:px-[4%] md:py-0 text-center flex flex-col md:gap-[1.67%] justify-center items-center bg-[#E7DFD7]">

                <h2 className="text-[13px] md:text-[32px] leading-[92%] md:leading-[40px] tracking-[0%] md:tracking-[-1.28px] ">The Art Of Crafting</h2>
                <p className="text-[10px] md:text-[15.6px] leading-[100%] md:leading-[24px] tracking-[5%] md:tracking-[-0.5px] m-0">{text}</p>
            </div>

        </section>
    )

}