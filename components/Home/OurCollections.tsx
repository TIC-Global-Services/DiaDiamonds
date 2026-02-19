import CollectionItem from "./Reusable/CollectionItem";

export default function OurCollection() {

    const collections = [
        {
            name:'Celestial Swirl Studs',
            color:'Yellow gold',
            img:'/assets/img/CollectionItems/collectionItem1.png',
        },
        {
            name:'Fine Diamond Ring',
            color:'Rose gold',
            img:'/assets/img/CollectionItems/collectionItem2.png',
        },
        {
            name:'Celeste Halo Bracelet',
            color:'Yellow',
            img:'/assets/img/CollectionItems/collectionItem3.png',
        },
        {
            name:'Crescent Aurelia ',
            color:'Rose gold',
            img:'/assets/img/CollectionItems/collectionItem4.png',
        },
    ]
  return (
    <div className="w-full py-21 px-5 overflow-hidden">
      
      {/* Inner flex container */}
      <div className="w-full flex flex-col justify-center items-center pb-20">
        {/* Section heading */}
        <h2 className="text-xl md:text-[40px] font-medium leading-[91%] tracking-[-3%] uppercase text-[#000000]">
          Our Collections
        </h2>

        {/* Section paragraph */}
        <p className="pt-[30px] text-base md:text-[14px] leading-[142%] text-[#000000] text-center">
          Timeless rings for every moment, crafted to shine, made to last
        </p>
      </div>

      {/* Collection items grid */}
      <div className="w-full flex flex-wrap md:flex-nowrap gap-5 ">
        {collections.map((collection, id) => (
          <CollectionItem 
            key={id} 
            bgImage={collection.img} 
            color={collection.color} 
            name={collection.name} 
          />
        ))}
      </div>

      {/* Large sibling div */}
      <div className="w-full flex justify-center items-center pt-4 relative gap-2 flex-wrap md:flex-nowrap">
        {/* First inner div with top border */}
        <div className="w-full border-b-2 border-[#000000]/20 relative shrink">
          {/* Absolute border div inside first inner div */}
          <div className="absolute border-t-5 border-[#7C3C3C] w-[30%] top-0 left-0"></div>
        </div>

        {/* Second inner div with buttons */}
        <div className=" flex items-center gap-2 ">
          {/* First button */}
          <button className="w-10 h-10 rounded-[10px] bg-[#F9F9F9] flex justify-center items-center">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0502 7.07071L9.0857 12.106L14.121 17.0705" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>

          </button>

          {/* Second button */}
          <button className="w-10 h-10  bg-[#7C3C3C] rounded-[10px] flex justify-center items-center">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.581227 10.4997L5.54053 5.45931L0.500164 0.500004" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        </div>
      </div>

    </div>
  );
}
