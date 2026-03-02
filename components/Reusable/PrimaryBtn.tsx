import { button } from "framer-motion/client";


type PrimaryBtnProps = {
    text:string,
    color:string,
}

export default function PrimaryBtn({text, color}:PrimaryBtnProps){

    return(
       <button
  className="
  relative
  px-[30px] py-[12px] 
  rounded-full
  text-[#E7DFD7] text-[16px] uppercase
  bg-[rgba(255,255,255,0)]
  backdrop-blur-[2.5px]
  shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  overflow-hidden
  btn-glass-border
  BtnAnimation
  isolate
  cursor-pointer
  "
>
  <span className={`relative z-10 uppercase ${color == "white" ? 'text-white' : 'text-black'}`}>{text}</span>
</button>
    )
}