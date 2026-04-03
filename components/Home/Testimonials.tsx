"use client";

import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import testimonialLeftImage from "@/public/assets/img/Testimonials/TestimonialLeftImage.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowSmLeft as LeftArrow, HiOutlineArrowSmRight as RightArrow } from "react-icons/hi";

export default function Testimonials() {
  const [currentTestimony, setCurrentTestimony] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  const testimonials = [
    {
      stars: [1, 2, 3, 4],
      noStars: [1],
      comments: [
        "Rose Gold Diamond Ring Looks Elegant and Classy!",
        "If You are Looking for Quality with a Touch of Elegance, Look no Further than Dia.",
      ],
      profileImage: "/assets/img/Testimonials/profile1.jpg",
      name: "Asha",
    },
    {
      stars: [1, 2, 3, 4, 5],
      noStars: [],
      comments: [
        "Beautiful design and quick delivery. Will definitely order again.",
      ],
      profileImage: "/assets/img/Testimonials/profile2.jpg",
      name: "Liam Carter",
    },
    {
      stars: [1, 2, 3, 4],
      noStars: [1],
      comments: [
        "The necklace looks even better in person. Elegant and timeless.",
      ],
      profileImage: "/assets/img/Testimonials/profile3.jpg",
      name: "Sophia Martinez",
    },
    {
      stars: [1, 2, 3, 4, 5],
      noStars: [],
      comments: [
        "Exceptional quality and attention to detail. Highly recommended.",
      ],
      profileImage: "/assets/img/Testimonials/profile4.jpg",
      name: "Noah Williams",
    },
  ];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentTestimony((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, testimonials.length]);

  return (
    <section
      data-theme="light"
      className="w-full md:min-h-screen flex flex-col md:flex-row bg-black"
    >
      {/* LEFT SIDE */}
      <div className="w-full aspect-[3/4] md:aspect-[4/3]  md:w-1/2 overflow-hidden">
        <Parallax speed={-10}>
          <Image
            src={testimonialLeftImage}
            alt="testimonial visual"
            quality={80}
            className="w-full h-full object-cover object-center"
          />
        </Parallax>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="w-full md:w-1/2 flex items-center bg-[#f8f3ef] px-6 md:px-10 lg:px-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="w-full py-10 md:py-[8%] min-h-[280px] md:min-h-0 flex flex-col justify-center">

          {/* Smooth Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimony}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Stars */}
              <div className="flex gap-1 justify-center md:justify-start">
                {testimonials[currentTestimony].stars.map((_, id) => (
                  <svg key={id} width="28" height="28" viewBox="0 0 32 32">
                    <path
                      d="M14.4675 1.03738C15.0158 -0.345795 16.883 -0.345793 17.4313 1.03738L20.6671 9.20114C20.8983 9.78425 21.4209 10.1827 22.0208 10.2331L30.4198 10.9397C31.8428 11.0594 32.4198 12.9229 31.3356 13.8975L24.9365 19.6495C24.4795 20.0604 24.2798 20.7051 24.4194 21.3193L26.3745 29.9198C26.7057 31.3769 25.1951 32.5287 23.9767 31.7479L16.786 27.139C16.2724 26.8098 15.6264 26.8098 15.1128 27.139L7.92205 31.7479C6.70371 32.5287 5.19306 31.3769 5.52429 29.9198L7.47935 21.3193C7.619 20.7051 7.41938 20.0604 6.96232 19.6495L0.563113 13.8975C-0.521095 12.9229 0.0559312 11.0594 1.47897 10.9397L9.87803 10.2331C10.478 10.1827 11.0006 9.78425 11.2317 9.20114L14.4675 1.03738Z"
                      fill="#F8CC96"
                    />
                  </svg>
                ))}

                {testimonials[currentTestimony].noStars.map((_, id) => (
                  <svg key={id} width="28" height="28" viewBox="0 0 32 32">
                    <path
                      d="M14.4675 1.03738C15.0158 -0.345795 16.883 -0.345793 17.4313 1.03738L20.6671 9.20114C20.8983 9.78425 21.4209 10.1827 22.0208 10.2331L30.4198 10.9397C31.8428 11.0594 32.4198 12.9229 31.3356 13.8975L24.9365 19.6495C24.4795 20.0604 24.2798 20.7051 24.4194 21.3193L26.3745 29.9198C26.7057 31.3769 25.1951 32.5287 23.9767 31.7479L16.786 27.139C16.2724 26.8098 15.6264 26.8098 15.1128 27.139L7.92205 31.7479C6.70371 32.5287 5.19306 31.3769 5.52429 29.9198L7.47935 21.3193C7.619 20.7051 7.41938 20.0604 6.96232 19.6495L0.563113 13.8975C-0.521096 12.9229 0.0559311 11.0594 1.47897 10.9397L9.87803 10.2331C10.478 10.1827 11.0006 9.78425 11.2317 9.20114L14.4675 1.03738Z"
                      fill="#717580"
                      fillOpacity="0.25"
                    />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm md:text-xl pt-4 text-center md:text-left">
                {testimonials[currentTestimony].comments[0]}
              </p>

              {testimonials[currentTestimony].comments[1] && (
                <p className="text-xs md:text-lg text-black/70 pt-2 text-center md:text-left">
                  {testimonials[currentTestimony].comments[1]}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Identity + Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">

            <div className="flex items-center gap-3">
              <img
                src={testimonials[currentTestimony].profileImage}
                className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover shrink-0"
              />
              <h3 className="text-sm md:text-base font-semibold leading-tight">
                {testimonials[currentTestimony].name}
              </h3>
            </div>

             {/* Glass Buttons */}
            <div className="flex gap-3 pt-6 md:pt-0">

              <button
                onClick={() =>
                  setCurrentTestimony((i) => (i - 1 + testimonials.length) % testimonials.length)
                }
                className="
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  backdrop-blur-md
                  bg-white/20
                  border border-white/30
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:bg-white/30
                  active:scale-90 cursor-pointer
                "
              >
                <LeftArrow size={20} />
              </button>

              <button
                onClick={() =>
                  setCurrentTestimony((i) => (i + 1) % testimonials.length)
                }
                className="
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  backdrop-blur-md
                  bg-white/20
                  border border-white/30
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:bg-white/30
                  active:scale-90 cursor-pointer
                "
              >
                <RightArrow size={20} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}