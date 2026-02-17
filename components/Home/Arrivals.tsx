export default function Arrivals() {
  const firstImage = '/assets/img/Arrivals/ArrivalsImg1.png'; 
  const secondImage = '/assets/img/Arrivals/ArrivalsImg2.png'; 

  return (
    <div className="w-full h-dvh flex flex-wrap md:flex-nowrap">
      
      <div className="w-full md:w-1/2 h-full">
        <img src={firstImage} alt="First Arrival" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-1/2 h-full">
        <img src={secondImage} alt="Second Arrival" className="w-full h-full object-cover" />
      </div>

    </div>
  );
}
