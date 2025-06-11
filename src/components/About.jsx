import React from 'react';
import { motion } from 'framer-motion';
import { FcAbout } from "react-icons/fc";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CiFaceSmile, CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { SiTailwindcss, SiReact, SiFigma, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";


const About = () => {
  const sender = [
    "Hi Shivam! how are you ?",
    "Got it! Could you tell me more about yourself",
    "That's amazing! Skill set you have",
    "Can you share your socials?"
  ];

  const shivam = [
    "Hi! I'm doing great and currently looking for a frontend developer role.",
    <>
      I'm a frontend developer based in <span className="text-blue-500 font-semibold">Agra, India</span>.
    </>,
    <>
      My developer journey began in college, where I learned 
      <span className="text-green-500 font-semibold mx-1">HTML</span>,
      <span className="text-yellow-500 font-semibold mx-1">CSS</span>, and
      <span className="text-blue-400 font-semibold mx-1">JavaScript</span>.
    </>,
    <>
      I then started working with 
      <span className="text-sky-500 font-semibold mx-1">React</span> and explored libraries and get basic familarity of
      <span className="text-pink-400 font-semibold mx-1">Framer Motion</span> and
      <span className="text-green-400 font-semibold mx-1">GSAP</span>,
      and also utility-first frameworks like 
      <span className="text-indigo-500 font-semibold mx-1">Tailwind CSS</span>.
      and then dive in <span className='text-green-500 font-semibold mx-1'>UI/UX</span> principles
      <span className='text-purple-600 font-semibold mx-1'>Figma</span> and many more
    </>,
    "I enjoy building interactive web applications and creating user-friendly interfaces."
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.9 }
  };

  const techIcons = [
    { icon: <SiHtml5 className="text-orange-500 text-3xl" />, name: "HTML5" },
    { icon: <SiCss3 className="text-blue-500 text-3xl" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400 text-3xl" />, name: "JavaScript" },
    { icon: <SiReact className="text-blue-400 text-3xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-400 text-3xl" />, name: "Tailwind CSS" },
    { icon: <SiFigma className="text-purple-500 text-3xl" />, name: "Figma" },
    { icon: <SiNotion className="text-black text-3xl" />, name: "Notion" },
    { icon: <BsCodeSlash className="text-gray-700 text-3xl" />, name: "More..." },
  ];

  return (
    <section id="about" className='w-full min-h-screen pb-10 '>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center pt-16 gap-3'
        >
          <FcAbout className='text-4xl sm:text-5xl' />
          <h1 className='text-3xl sm:text-4xl md:text-5xl  bg-clip-text text-transparent bg-zinc-900'>
            About Me
          </h1>
          <div className='flex-grow h-[1px] bg-blue-500 mt-2 ml-4 rounded-full'></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='bg-white/80 backdrop-blur-sm mx-auto mt-12 w-full max-w-7xl rounded-2xl p-6 sm:p-8 shadow-xl shadow-blue-100/50 border border-blue-100 space-y-6'
        >
          {/* Conversation starts */}
          {/* Sender 1 */}
          <motion.div variants={messageVariants} className='flex justify-end'>
            <div className='flex items-start max-w-[90%] sm:max-w-[80%]'>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className='bg-gradient-to-r from-blue-500 to-blue-600 max-w-full shadow-lg shadow-blue-200 font-medium text-white p-4 rounded-3xl rounded-tr-none'
              >
                {sender[0]}
              </motion.p>
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className='bg-white p-2 rounded-full shadow-md ml-2 -mt-1'
              >
                <BsPerson className='text-2xl text-blue-600' />
              </motion.div>
            </div>
          </motion.div>

          {/* Shivam 1 */}
          <motion.div variants={messageVariants} className='flex items-start'>
            <motion.div 
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className='bg-white p-2 rounded-full shadow-md mr-2 -mt-1'
            >
              <CiFaceSmile className='text-2xl text-yellow-500' />
            </motion.div>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className='bg-gray-100 max-w-[90%] sm:max-w-[80%] shadow-lg shadow-blue-100 font-medium p-4 rounded-3xl rounded-tl-none border border-gray-200'
            >
              {shivam[0]}
            </motion.p>
          </motion.div>

          {/* Sender 2 */}
          <motion.div variants={messageVariants} className='flex justify-end'>
            <div className='flex items-start max-w-[90%] sm:max-w-[80%]'>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className='bg-gradient-to-r from-blue-500 to-blue-600 max-w-full shadow-lg shadow-blue-200 font-medium text-white p-4 rounded-3xl rounded-tr-none'
              >
                {sender[1]}
              </motion.p>
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className='bg-white p-2 rounded-full shadow-md ml-2 -mt-1'
              >
                <BsPerson className='text-2xl text-blue-600' />
              </motion.div>
            </div>
          </motion.div>

          {/* Shivam 2 to 5 */}
          {shivam.slice(1).map((msg, idx) => (
            <motion.div 
              key={idx} 
              variants={messageVariants}
              className='flex items-start'
            >
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className='bg-white p-2 rounded-full shadow-md mr-2 -mt-1'
              >
                <CiFaceSmile className='text-2xl text-yellow-500' />
              </motion.div>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className='bg-gray-100 max-w-[90%] sm:max-w-[80%] shadow-lg shadow-blue-100 font-medium p-4 rounded-3xl rounded-tl-none border border-gray-200'
              >
                {msg}
              </motion.p>
            </motion.div>
          ))}

          {/* Tech Stack Surprise */}
          {/* <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
          >
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800 flex items-center justify-center gap-2">
              <BsCodeSlash className="text-blue-600" /> My Tech Stack
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center p-2"
                >
                  <div className="p-3 bg-white rounded-xl shadow-md flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-600">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
          <motion.div variants={messageVariants} className='flex justify-end'>
            <div className='flex items-start max-w-[90%] sm:max-w-[80%]'>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className='bg-gradient-to-r from-blue-500 to-blue-600 max-w-full shadow-lg shadow-blue-200 font-medium text-white p-4 rounded-3xl rounded-tr-none'
              >
                {sender[3]}
              </motion.p>
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className='bg-white p-2 rounded-full shadow-md ml-2 -mt-1'
              >
                <BsPerson className='text-2xl text-blue-600' />
              </motion.div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div 
            variants={messageVariants}
            className='flex items-start mt-6 flex-wrap'
          >
            <motion.div 
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className='bg-white p-2 rounded-full shadow-md mr-2 -mt-1'
            >
              <CiFaceSmile className='text-2xl text-yellow-500' />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className='ml-4 bg-white p-6 rounded-2xl shadow-lg shadow-blue-100/50 w-full border border-gray-200 font-medium'
            >
              <div className='flex flex-wrap items-center gap-4 mb-3'>
                <p className="text-gray-700">Here are my</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='https://github.com/Kakashi896'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-800 hover:text-blue-600 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg transition-colors'
                >
                  <FaGithub className='text-xl' /> GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='https://www.linkedin.com/in/shivam-bhardwaj-704643326/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-800 hover:text-blue-600 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg transition-colors'
                >
                  <FaLinkedin className='text-xl text-blue-700' /> LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:mrakshatsharma15@gmail.com"
                  className='text-gray-800 hover:text-red-500 flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg transition-colors'
                >
                  <CiMail className='text-xl' /> Email
                </motion.a>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 mt-4"
              >
                <p className="text-gray-700">
                  Find more info about me in my
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Shivam_Resume.pdf" 
                  download 
                  className='text-blue-600 hover:underline flex items-center gap-1 px-3 py-2 bg-blue-50 rounded-lg'
                >
                  <FaFileDownload /> CV
                </motion.a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="mt-4 text-right"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 font-semibold">
                  Good Luck 😊
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden lg:block absolute right-20 top-1/3 -z-10"
        >
          <div className="w-32 h-32 rounded-full bg-blue-200/30 blur-xl"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="hidden lg:block absolute left-20 bottom-1/4 -z-10"
        >
          <div className="w-40 h-40 rounded-full bg-purple-200/30 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;