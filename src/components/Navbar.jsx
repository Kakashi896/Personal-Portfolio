import { button } from 'framer-motion/m';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-scroll';


const Navbar = () => {
  const navItems = [ "Home", "About", "Projects", "Contact" ]


  return (
    
    <section id="home">
    <div className='w-full flex justify-center px-4'>
    <div className='w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] h-[40vh] flex items-center sm:ml-55 relative'>
      <div className='mt-5'>
        <p className='group text-blue-600 text-lg sm:text-xl flex items-center gap-2 sm:gap-5 cursor-pointer hover:text-blue-800 transition-colors'>
          Quick nav <IoIosArrowRoundForward />
        </p>
  
        <div className="flex flex-wrap sm:flex-nowrap mt-5 gap-3 sm:gap-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-50}
              className="px-4 py-2 bg-blue-200 rounded-xl transition-all hover:bg-blue-300 w-full sm:w-auto text-left cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
  </section>
  
  )
}

export default Navbar
