import ContainerLayout from "@/layout/ContainerLayout";

export default function OurRoots() {

    const ImageLeft = '/assets/img/About/OurRoots/ImageLeft.png';
    const ProfileImage = '/assets/img/About/OurRoots/ProfileImage.jpg';

  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-wrap md:flex-nowrap">
      {/* Image container */}
      <div className="w-full h-full md:w-1/2 overflow-hidden">
        <img
          src={ImageLeft}
          alt="Our Roots"
          className="w-full h-full object-cover transform hover:scale-110 transition duration-300 ease-in-out delay-100"
        />
      </div>

      {/* Content container */}
      <div className="w-full md:w-1/2">
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center items-center gap-[60px]">
            {/* Image inside content */}
            <img
              src={ProfileImage}
              alt="Profile Image"
              className="w-[60%] aspect-[190/175] border-0 rounded-[30px] object-cover"
            />

            {/* Heading */}
            <h2 className="font-medium text-[40px] leading-[100%] uppercase text-[#000000]">
              Our Roots
            </h2>

            {/* Paragraph with owner span */}
            <p className="font-light text-[20px] leading-[140%] text-center text-[#000000]/50">
             Our story begins with <span className="font-bold text-[20px] leading-[100%] text-[#000000]">V Nataraja Mudaliar and Sons Jewellers</span>, a name that has earned generations of confidence through fine jewellery, ethical practices, and timeless design. For decades, the brand has stood as a symbol of reliability and refined craftsmanship, shaping jewellery that families return to, time and again. 
            </p>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}