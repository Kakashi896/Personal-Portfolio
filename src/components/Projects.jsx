import React from 'react';
import { RiProjectorFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Newsly from '../assets/Newsly.png';
import Arogyam from '../assets/Arogyam.png';
import Notemints from '../assets/Notemints.png';
import Portfolio from '../assets/Portfolio.png';

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
    link: "http://newsly-daily-news.netlify.app/",
  },
  {
    title: "Portfolio",
    image: Portfolio,
    description: "Interactive portfolio showcasing my projects with smooth animations and responsive design.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Arogyam UI",
    image: Arogyam,
    description: "Mental health wellness platform featuring soothing UI/UX design, meditation guides, and mood tracking.",
    tech: ["UI Design", "Responsive"],
    link: "https://arogyam-ui.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-14">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10">
        <RiProjectorFill className="text-5xl text-blue-500" />
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-500">My Projects</h1>
        <div className='flex-grow h-[1px] bg-blue-500 mt-2 ml-4 rounded-full'></div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12 p-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
            {/* Image Section */}
            <div className="relative">
              <img src={proj.image} alt={proj.title} className="w-full h-[380px] object-cover transition-all duration-300" />
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 bg-zinc-800/75 flex justify-center items-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity"
              >
                Visit {proj.title} 
              </a>
            </div>
            
            {/* Card Content */}
            <div className="p-5 space-y-4">
              <p className="text-gray-600 text-sm">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-gray-100 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200"
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
        <p className="text-gray-700 font-medium mb-4">Want to see more?</p>
        <a
          href="https://github.com/Kakashi896"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition"
        >
          Visit My GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
