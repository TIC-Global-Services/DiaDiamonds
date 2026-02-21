"use client";

import { useState } from "react";

export default function Testimonials() {

  const [currentTestimony, setCurrentTestimony ]= useState<number>(0);

  const testimonials = [
  {
    stars: [1, 2, 3, 4],
    noStars: [1],
    comments: [
      "Rose Gold Diamond Ring Looks Elegant and Classy",
      "If You are Looking for Quality with a Touch of Elegance, Look no Further than Dia. Their pieces are not only stylish, but also durable."
    ],
    profileImage: "/assets/img/Testimonials/profile1.jpg",
    name: "Asha",
  },
  {
    stars: [1, 2, 3, 4, 5],
    noStars: [],
    comments: [
      "Beautiful design and quick delivery.",
      "Will definitely order again."
    ],
    profileImage: "/assets/img/Testimonials/profile1.png",
    name: "Liam Carter",
  },
  {
    stars: [1, 2, 3, 4],
    noStars: [1],
    comments: [
      "The necklace looks even better in person.",
      "Elegant and timeless."
    ],
    profileImage: "/assets/img/Testimonials/profile1.png",
    name: "Sophia Martinez",
  },
  {
    stars: [1, 2, 3, 4, 5],
    noStars: [],
    comments: [
      "Exceptional quality and attention to detail.",
      "Highly recommended."
    ],
    profileImage: "/assets/img/Testimonials/profile1.png",
    name: "Noah Williams",
  },
];

    const TestimonialLeftImage = '/assets/img/Testimonials/TestimonialLeftImage.jpg';
    const TestimonialProfile1 = '/assets/img/Testimonials/TestimonialProfile1.jpg';

  return (
    <div className="w-full h-[100vh] flex flex-wrap md:flex-nowrap ">
      
      {/* Left Side */}
      <div className="w-full h-2/5 md:h-auto md:w-1/2 overflow-hidden">
        <img 
          src={TestimonialLeftImage}
          alt="testimonial visual"
          className="w-full h-full object-cover md:object-cover  hover:scale-110 delay-75 duration-100 ease-in-out"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-3/5 md:h-full px-[66px] flex items-center bg-[#f8f3ef]">
        
        <div className="w-full">
          
          <div className="flex gap-1">
            
              {testimonials[currentTestimony].stars.map((data, id)=>(
                <svg key={id} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4675 1.03738C15.0158 -0.345795 16.883 -0.345793 17.4313 1.03738L20.6671 9.20114C20.8983 9.78425 21.4209 10.1827 22.0208 10.2331L30.4198 10.9397C31.8428 11.0594 32.4198 12.9229 31.3356 13.8975L24.9365 19.6495C24.4795 20.0604 24.2798 20.7051 24.4194 21.3193L26.3745 29.9198C26.7057 31.3769 25.1951 32.5287 23.9767 31.7479L16.786 27.139C16.2724 26.8098 15.6264 26.8098 15.1128 27.139L7.92205 31.7479C6.70371 32.5287 5.19306 31.3769 5.52429 29.9198L7.47935 21.3193C7.619 20.7051 7.41938 20.0604 6.96232 19.6495L0.563113 13.8975C-0.521095 12.9229 0.0559312 11.0594 1.47897 10.9397L9.87803 10.2331C10.478 10.1827 11.0006 9.78425 11.2317 9.20114L14.4675 1.03738Z" fill="#F8CC96"/></svg>
              ))}

              {testimonials[currentTestimony].noStars.map((data, id)=>(
                <svg key={id} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4675 1.03738C15.0158 -0.345795 16.883 -0.345793 17.4313 1.03738L20.6671 9.20114C20.8983 9.78425 21.4209 10.1827 22.0208 10.2331L30.4198 10.9397C31.8428 11.0594 32.4198 12.9229 31.3356 13.8975L24.9365 19.6495C24.4795 20.0604 24.2798 20.7051 24.4194 21.3193L26.3745 29.9198C26.7057 31.3769 25.1951 32.5287 23.9767 31.7479L16.786 27.139C16.2724 26.8098 15.6264 26.8098 15.1128 27.139L7.92205 31.7479C6.70371 32.5287 5.19306 31.3769 5.52429 29.9198L7.47935 21.3193C7.619 20.7051 7.41938 20.0604 6.96232 19.6495L0.563113 13.8975C-0.521096 12.9229 0.0559311 11.0594 1.47897 10.9397L9.87803 10.2331C10.478 10.1827 11.0006 9.78425 11.2317 9.20114L14.4675 1.03738Z" fill="#717580" fillOpacity="0.23"/></svg>
              ))}
            
          </div>


          <p className="text-[24px] leading-[100%] text-[#000000] pb-[106px] pt-[35px]">
            {testimonials[currentTestimony].comments[0]}
          </p>

          <p className="text-[24px] leading-[100%] text-[#000000] pb-20">
            {testimonials[currentTestimony].comments[1]}
          </p>

          <div className="flex justify-between items-center pt-[14px]">
            
            {/* Identity Block */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentTestimony].profileImage} 
                alt="Testimonial profile picture"
                className="w-12 md:w-[100px] aspect-square rounded-full object-cover"
              />
              <h2 className="text-[18px] font-semibold text-[#000000]">
                {testimonials[currentTestimony].name}
              </h2>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3904 27.1849L8.0948 23.3186L3.74525 22.3521L4.16812 17.8817L1.20801 14.4987L4.16812 11.1157L3.74525 6.64534L8.0948 5.67877L10.3904 1.8125L14.4983 3.5644L18.6062 1.8125L20.9018 5.67877L25.2514 6.64534L24.8285 11.1157L27.7886 14.4987L24.8285 17.8817L25.2514 22.3521L20.9018 23.3186L18.6062 27.1849L14.4983 25.433L10.3904 27.1849ZM13.2297 18.7879L20.0561 11.9615L18.3646 10.2096L13.2297 15.3445L10.632 12.8072L8.94055 14.4987L13.2297 18.7879Z" fill="black"/></svg>
            </div>

            {/* Control Buttons */}
            <div className="flex gap-2">
              <button onClick={()=>{
                if(currentTestimony == 0) return;

                setCurrentTestimony(currentTestimony - 1);
              }} className="w-[35px] aspect-square rounded-full border-[5.29px] border-[#FFFFFF]/10 flex justify-center items-center hover:cursor-pointer active:bg-[#FFFFFF]">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H12.6667M1 6L6 1M1 6L6 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={()=>{
                if(currentTestimony == (testimonials.length-1)) return;

                setCurrentTestimony(currentTestimony + 1);
              }}
               className="w-[35px] aspect-square rounded-full border-[5.29px] border-[#FFFFFF]/10 flex justify-center items-center hover:cursor-pointer active:bg-[#FFFFFF]">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.667 6H1.00032M12.667 6L7.66699 11M12.667 6L7.66699 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
