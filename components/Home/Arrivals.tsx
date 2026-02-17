export default function Arrivals() {
  const firstImage = '/assets/img/Arrivals/ArrivalsImg1.png'; 
  const secondImage = '/assets/img/Arrivals/ArrivalsImg2.png'; 

  return (
    <div className="w-full h-screen flex flex-wrap md:flex-nowrap">
      
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <img src={firstImage} alt="First Arrival" className="w-full h-full object-cover" />
        <h2 className="absolute inset-0 font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-full h-full flex justify-center items-center uppercase">NEW ARRIVALS</h2>
      </div>
      
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <img src={secondImage} alt="Second Arrival" className=" w-full h-full object-cover" />
        <h2 className="absolute inset-0 font-medium text-[40px] leading-[100%] text-[#FFFFFF] w-full h-full flex justify-center items-center uppercase ">NEW COLLECTIONS</h2>
      </div>

    </div>
  );
}
