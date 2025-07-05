// src/pages/Hero.tsx
import { Download, Mail, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactOrbitScene from './ReactOrbitScene';

import TechStack from './TechStack';

export default function Hero() {
  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate("/projects");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className='min-h-screen justify-center overflow-hidden pt-16'
      >
        {/* Background */}
        <div className="relative  flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-gray-900 dark:text-white">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Krishna Sahu
                  </span>
                </span>
                <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 text-gray-600 dark:text-gray-400">
                  👋 Full-stack Developer
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                Building scalable web applications and real-time systems that solve real problems. Currently crafting{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">PulseBoard</span> - a real-time event
                monitoring system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ">
                <button
                   onClick={navigateToProjects}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Projects
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>

                <button
                  onClick={navigateToContact}
                  className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Floating Buttons */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            <a
              href="https://github.com/devkrish201"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>

            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg text-xs font-bold">
              👀 {Math.floor(Math.random() * 50) + 10}
            </div>
          </div>
        </div>
        <div className='pt-8'>
          <TechStack />
        </div>
      </section>

    </>
  );
}
