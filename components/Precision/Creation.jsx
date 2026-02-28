"use client";

import ContainerLayout from "@/layout/ContainerLayout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { span } from "framer-motion/client";

export default function Creation() {

  const [currentCard, setCurrentCard] = useState(1);

  const contentJSON = [
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage1.jpg",
      overlayText:'The Diamond Seed',
      contentText: [
        { text: "Every lab grown diamond used at ", bold:false, newline:false },
        { text: "Dia Diamonds", bold: true, newline:false },
        { text: " begins with a microscopic slice of real diamond called a seed. This seed acts as the foundation where pure carbon atoms attach and grow." , bold:false, newline:false},
        { text: "It is carefully placed inside a controlled growth chamber designed to replicate natural diamond-forming conditions.", newline:true}
      ]
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage2.jpg",
      overlayText:'Growth Proccess',
      contentText: [
        { text: "Lab Grown Diamonds", bold: true, newline:false },
        { text: " are grown using advanced scientific methods that recreate nature with precision.", bold:false, newline:false },
        { text: "Through either High Pressure High Temperature (HPHT) or Chemical Vapor Deposition (CVD), carbon atoms crystallize around the seed under extreme heat and controlled energy.", newline:true, bold:false}
      ]
    },
    {
      imageLeft: "/assets/img/Precision/Creation/bgImage3.jpg",
      overlayText:'Final Creation',
      contentText: [
        { text: "Over several weeks, the diamond grows steadily into a rough crystal. Every stage is monitored to ensure clarity, color balance, and structural perfection.", bold:false, newline:false },
        { text: "At this stage, the diamond is complete in composition and real gemstone in its raw form, ready for refinement.", bold:false, newline:true}
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % contentJSON.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % contentJSON.length);
  };

  const handleSelect = (index) => {
    setCurrentCard(index);
  };

  if (!contentJSON[currentCard]) return null;

  return (
    <section data-theme="dark" className="relative w-full h-auto bg-white overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-[62.65%] left-[69.17%] md:left-[59.38%] md:top-0  w-[62.62%] aspect-square md:aspect-none md:w-[70%] md:h-full bg-[#7C3C3C]/13 rounded-full z-10" />
      <div className="absolute top-[64%] left-[81.93%] md:left-[75.14%] md:top-0 w-[62.62%] aspect-square md:aspect-none md:w-[70%] md:h-full bg-[#F2F2F2]  rounded-full z-0" />


       
      <div className="relative z-20 w-full h-full flex flex-col py-[25%] md:py-[5.83%]">

        {/* Title */}
        <div className="text-center shrink-0 w-[96.71%] md:w-[40%] mx-auto pb-[5.49%]">
          <h2 className="w-full">
            designed for you
            cherished forever.
          </h2>
        </div>

        {/* Content Div */}

        <div className=" w-full flex justify-between flex-wrap md:flex-nowrap md:gap-[8.54%] items-center px-[5.21%] ">

          {/* Item 1 */}
          <AnimatePresence mode="wait">
          <motion.div

          key={currentCard}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.5, delay:0.2, ease:"easeIn"}}

          className="relative w-full md:w-[41.67%] grow  aspect-600/450 border-0 rounded-[20px] overflow-hidden mb-[18.20%] bg-black md:mb-0"> 

              <img src={contentJSON[currentCard].imageLeft} alt={contentJSON[0].overlayText} className="w-full h-auto object=cover object-center mt-[-25%]" />

              <p className="absolute bottom-0 left-0 mb-[7.83%] ml-[9.5%] mr-0 mt-0 text-[#FFFFFF] font-normal text-[16px]">{contentJSON[0].overlayText}</p>
          </motion.div>
          </AnimatePresence>

          {/* Item 2 */}

          <AnimatePresence mode="wait">
          <motion.div

           key={currentCard}
          initial={{opacity:0, x:20}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:20}}
          transition={{duration:0.5, delay:0.2, ease:"easeIn"}}
          
          className="w-full md:w-[41.67%] border-l-[3px] border-0 border-l-[#5A5A5A] px-[7.77%] md:px-0 md:pl-[2.22%] ">
  {contentJSON[currentCard].contentText.map((data, id) => {
    if (data.bold) {
      return <span key={id} className="font-semibold md:tracking-[5%] text-[#383838] text-[13px] md:text-[24px] leading-[100%] md:leading-[140%]">{data.text}</span>;
    } else if (data.newline) {
      return <p className=" text-[#383838] text-[13px] md:text-[24px] leading-[100%] md:leading-[140%] pt-[4%]" key={id}>{data.text}</p>;
    } else {
      return <span className=" text-[#383838] text-[13px] md:text-[24px] leading-[100%] md:leading-[140%]" key={id}>{data.text}</span>;
    }
  })}
</motion.div>
</AnimatePresence>


        </div>

        <div className="w-[14.08%] md:w-[4.03%] mx-auto flex justify-between items-center md:gap-[0.4%] pt-[12.86%] md:pt-[2.36%]">

          <button onClick={()=>setCurrentCard(0)} className={` ${currentCard == 0 ? 'w-[37.93%] aspect-[22/6] bg-[#431A1A]' : 'w-[20.69%] aspect-[12/6] bg-[#000000]/10'}  rounded-[10px]  cursor-pointer `}></button>
          <button onClick={()=>setCurrentCard(1)} className={` ${currentCard == 1 ? 'w-[37.93%] aspect-[22/6] bg-[#431A1A]' : 'w-[20.69%] aspect-[12/6] bg-[#000000]/10'}  rounded-[10px]  cursor-pointer `}></button>
          <button onClick={()=>setCurrentCard(2)} className={` ${currentCard == 2 ? 'w-[37.93%] aspect-[22/6] bg-[#431A1A]' : 'w-[20.69%] aspect-[12/6] bg-[#000000]/10'}  rounded-[10px]  cursor-pointer `}></button>

        </div>

      </div>
    </section>
  );
}