import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
export default function Footer(){
    return(
        <div className="flex flex-row w-screen h-16 justify-center items-center font-extrabold text-base  ">
        <h1 className="mr-4 text-2xl font-['Georgia']">Connect With Me~</h1>
        <div className = "w-16 flex flex-row justify-between text-lg gap-x-1">
      <a href="https://www.instagram.com/snehal_bandi/"> <div className ="cursor-pointer"> <FaInstagramSquare /></div></a>
      <a href="https://www.linkedin.com/in/snehal-bandi-16316a266/?trk=opento_sprofile_topcard"> <div className ="cursor-pointer"> <FaLinkedin /></div></a>
      <a href="https://wa.me/9351825366"><div className ="cursor-pointer"> <FaSquareWhatsapp /></div></a>
      <a href="mailto: snehalbandi5@gmail.com"> <div className ="cursor-pointer "> <IoMail/></div></a>
        </div>
      </div>
    )
}




