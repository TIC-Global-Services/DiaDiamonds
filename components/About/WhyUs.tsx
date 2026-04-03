"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { motion} from "framer-motion";

export default function WhyUs() {

    const BgImage = '/assets/img/About/WhyUs/BgImage.png';
    const diamond = '/assets/img/Diamond.png';
    const singleSparkle = '/assets/img/singleSparkle.png';

  return (
    <section data-theme="light" className="w-full h-[100dvh] relative overflow-hidden">
      {/* Background image */}
      <img
        src={BgImage}
        alt="WhyUs Background"
        className="w-full h-[100vh] md:h-auto object-cover object-[50%_80%] md:object-cover"
      /> 

      {/* Absolute overlay */}
      <div className="w-full absolute inset-0">
        <ContainerLayout>
          {/* Heading */}
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5, delay:0.2, ease:'easeInOut'}}
          viewport={{once:false}}
          className="flex items-start pt-[0%] md:pt-0">
            <h2 className="text-xl md:text-[40px] font-medium leading-[120%] md:leading-[100%] tracking-[3%] md:tracking-[5%] uppercase text-[#000000] pb-1 md:pb-8">
            Why Dia Diam
          </h2>
          <img src={diamond} alt="diamond logo" className="w-5 md:w-10 aspect-square" />
          <h2 className="text-xl md:text-[40px] font-medium leading-[120%] md:leading-[100%] tracking-[3%] md:tracking-[5%] uppercase text-[#000000] pb-1 md:pb-8">
            nds?
          </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
          
          initial={{ opacity: 0, x: -50 }}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5, delay:0.2, ease:'easeInOut'}}
          viewport={{once:false}}
          className="text-xs md:text-[20px] leading-[140%] md:leading-[140%] text-[#000000]/50 w-[90%] md:w-[40%]">
          Because true brilliance is more than sparkle. At Dia Diamonds, every creation is guided by ethics, certified authenticity, and timeless craftsmanship — ensuring jewellery that feels as meaningful as it looks.
          </motion.p>
        </ContainerLayout>
      </div>
     
    </section>
  );
}