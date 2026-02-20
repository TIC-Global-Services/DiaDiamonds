export default function Arrivals() {
  const firstImage = '/assets/img/Arrivals/ArrivalsImg1.png'; 
  const secondImage = '/assets/img/Arrivals/ArrivalsImg2.png'; 

  return (
    <div className="w-full h-screen flex flex-wrap md:flex-nowrap overflow-hidden">
      
      <div className="overflow-hidden w-full md:w-1/2 h-1/2 md:h-full">
      <div className="relative w-full h-full hover:scale-110 delay-100 duration-300 ease-in-out">
        <img src={firstImage} alt="First Arrival" className="w-full h-full object-cover " />
        <h2 className="absolute inset-0 font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-full h-full flex justify-center items-center uppercase">NEW ARRIVALS</h2>
      </div>
      </div>

      <div className="overflow-hidden w-full md:w-1/2 h-1/2 md:h-full">
      <div className="w-full h-full relative hover:scale-110 delay-100 duration-300 ease-in-out ">
        <img src={secondImage} alt="Second Arrival" className=" w-full h-full object-cover " />
        <h2 className="absolute inset-0 font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-full h-full flex justify-center items-center uppercase ">NEW COLLECTIONS</h2>
      </div>
      </div>

    </div>
  );
}
