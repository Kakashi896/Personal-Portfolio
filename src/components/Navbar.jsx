import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <section id="home">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[61rem] h-auto py-10 flex items-start sm:items-center justify-center">
          <div className="w-full text-center sm:text-left">
            <p className="group text-blue-600 text-lg sm:text-xl flex justify-center sm:justify-start items-center gap-2 sm:gap-3 cursor-pointer hover:text-blue-800 transition-colors">
              Quick nav <IoIosArrowRoundForward />
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start mt-5 gap-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="px-4 py-2 bg-blue-200 rounded-xl hover:bg-blue-300 transition-all text-sm font-medium cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
