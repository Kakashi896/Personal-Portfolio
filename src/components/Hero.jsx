import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FiMail, FiGithub, FiX } from "react-icons/fi";

const Home = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-start md:mt-15 justify-center px-6 py-10 bg-white text-black">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-4 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Shivam Bhardwaj</h1>
        <p className="text-lg text-zinc-600">Frontend Developer</p>
        <p className="text-base text-gray-700">
          Passionate about building modern and responsive web applications using React.js, Tailwind CSS,
          and other libraries. Currently seeking frontend roles to contribute and grow.
        </p>

        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="/Shivam_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm"
          >
            Resume <MdOutlineFileDownload className="text-lg" />
          </a>
          <a href="mailto:mrakshatsharma15@gmail.com" className="p-2 bg-gray-200 rounded hover:bg-gray-300">
            <FiMail className="text-xl" />
          </a>
          <a href="https://github.com/Kakashi896" target="_blank" rel="noreferrer" className="p-2 bg-gray-200 rounded hover:bg-gray-300">
            <FiGithub className="text-xl" />
          </a>
          <a href="#" className="p-2 bg-gray-200 rounded hover:bg-gray-300">
            <FiX className="text-xl" />
          </a>
          <a href="https://linkedin.com/in/shivam-bhardwaj-704643326/" target="_blank" rel="noreferrer" className="p-2 bg-gray-200 rounded hover:bg-gray-300">
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>

      {/* Right Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 md:mt-0">
       
        <div className="bg-white-900 border-[1px] border-black p-4 rounded-lg flex flex-col items-center  ">
          <FaHtml5 className="text-4xl mb-2 text-orange-500" />
          <span>HTML</span>
        </div>
        <div className="bg-white-900 border-[1px] border-black p-4 rounded-lg flex flex-col items-center ">
          <FaCss3Alt className="text-4xl mb-2 text-blue-500" />
          <span>CSS</span>
        </div>
        <div className="bg-blue-400 p-4 rounded-lg flex flex-col items-center text-white">
          <FaReact className="text-4xl mb-2" />
          <span>React</span>
        </div>
        <div className="bg-white-900 border-[1px] border-black p-4 rounded-lg flex flex-col items-center ">
          <FaJs className="text-4xl mb-2 text-yellow-400" />
          <span>JavaScript</span>
        </div>
        <div className="bg-white-900 border-[1px] border-black p-4 rounded-lg flex flex-col items-center ">
          <SiTailwindcss className="text-4xl mb-2 text-sky-400" />
          <span>Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
