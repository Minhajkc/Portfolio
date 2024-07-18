import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen">
         <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
        </h2>
      <div className="max-w-6xl mx-auto flex flex-col items-center from-blue-900 to-gray-900 py-20 px-2  rounded-2xl shadow-2xl">
     
        <div className="flex flex-col mt- md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
                <img 
                   src="public/Images/Minhaj4.PNG" 
                    alt="Minhaj" 
                    className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg border-4 border-blue-500"
                />
            </div>
            <div className="md:w-1/2 space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                    As a <span className="text-blue-400 font-semibold">MERN Stack Developer</span> and <span className="text-purple-400 font-semibold">UI/UX Designer</span>, I blend technical expertise with creative flair. My journey in the world of web development has been driven by a passion for crafting seamless digital experiences.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                    I specialize in building scalable web applications and designing intuitive user interfaces that not only look great but also solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-4 mt-6 text-white">
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Problem Solver</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        <span>Innovative Thinker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span>Fast Learner</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-5">
            <a href="https://github.com/minhajkc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/minhaj-kc-a7b118308" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/minhaj_kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaXTwitter className="w-8 h-8" />
        
            </a>
            <a href="https://instagram.com/minhaj.kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-8 h-8" />
            </a>
        </div>
    </section>
  );
}

export default About;
