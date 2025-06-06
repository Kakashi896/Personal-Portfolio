import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <section className='w-full min-h-[60vh] flex flex-col items-center  px-4 text-center gap-4'>
      <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-bold tracking-tight text-gray-900'>
        So.Hello
      </h1>

      <p className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-zinc-500 font-'>
        I am Shivam Bhardwaj
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-3'>
        <span className='text-lg sm:text-xl md:text-2xl text-gray-700 font-medium'>
          A Frontend web developer
        </span>

        <a
          href="/Shivam_Resume.pdf"
          download
          className='flex items-center gap-2 px-6 py-2 bg-blue-200 text-blue-600 rounded-xl hover:bg-blue-300 transition duration-200 font-semibold text-base sm:text-lg'
          aria-label="Download Shivam Bhardwaj's CV"
        >
          Download CV <MdOutlineFileDownload className="text-xl" />
        </a>
      </div>
    </section>
  );
};

export default Home;
