import React from 'react';
import { RiProjectorFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Newsly from '../assets/Newsly.png';
import Mindspace from '../assets/Mindspace.png';
import Notemints from '../assets/Notemints.png';
import Portfolio from '../assets/port.png';

const projects = [
  {
    title: "NoteMints",
    image: Notemints,
    description: "Feature-rich note-taking application with markdown support, cloud sync, and organizational tools.",
    tech: ["React", "Local Storage", "States function"],
    link: "https://notemints-your-note-keeper.netlify.app/",
  },
  {
    title: "Newsly",
    image: Newsly,
    description: "A modern tech news aggregator fetching data from RESTful APIs with real-time updates and personalized feeds.",
    tech: ["React", "API Integration", "Tailwind CSS"],
    link: "https://newslyyyy.netlify.app/",
  },
  {
    title: "Portfolio",
    image: Portfolio,
    description: "Interactive portfolio showcasing my projects with smooth animations and responsive design.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "MindSpace with Mood Tracker",
    image: Mindspace,
    description: "Mental health wellness platform featuring soothing UI/UX design, and mood tracking.",
    tech: ["UI Design", "Responsive", "Mood Tracking"],
    link: "https://mindspace2.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-10 sm:py-14">
      {/* Title */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <RiProjectorFill className="text-4xl sm:text-5xl text-blue-500" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl  bg-clip-text text-transparent bg-zinc-900">My Projects</h1>
        <div className="flex-grow h-[1px] bg-blue-500 mt-2 ml-0 sm:ml-4 rounded-full"></div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            {/* Image Section */}
            <div className="relative">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-52 sm:h-64 md:h-90 object-cover transition-all duration-300" 
              />
              <a 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-zinc-900/70 flex justify-center items-center text-white text-base font-semibold opacity-0 hover:opacity-100 transition-opacity"
              >
                Visit {proj.title}
              </a>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 space-y-3">
              <p className="text-gray-600 text-sm sm:text-base">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 font-medium mb-3 text-sm sm:text-base">Want to see more?</p>
        <a
          href="https://github.com/Kakashi896"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition"
        >
          Visit My GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
