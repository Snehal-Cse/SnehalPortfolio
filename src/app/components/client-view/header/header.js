'use client'
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen">
      <div className="max-h-40 h-18 w-full flex flex-row px-4 font-extrabold justify-between items-center font-['Georgia'] mt-4">
        <img className="h-12 w-22 ml-4" src="./portfolioImg.jpg" alt="Logo" />
        
      
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-zinc-500 focus:outline-none">
            &#9776; 
          </button>
        </div>

     
        <ul className={`w-100 flex-col sm:flex sm:flex-row justify-evenly cursor-pointer text-lg mr-16 px-2 gap-x-2 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <a href="/"><li className="text-zinc-500 hover:text-indigo-900 px-2 text-lg sm:text-xl">HOME</li></a>
          <a href="/about"><li className="text-zinc-500 hover:text-indigo-900 px-2 text-lg sm:text-xl">PORTFOLIO</li></a>
          <a href="/contact"><li className="text-zinc-500 hover:text-indigo-900 px-2 text-lg sm:text-xl">CONTACT</li></a>
        </ul>
      </div>
    </div>
  );
}
