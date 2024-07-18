import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";



function Projects() {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 min-h-screen">
              {/* Projects Gallery */}
<section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen " id="projects">
    <div className="max-w-6xl mx-auto  ">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
                <div key={project} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                    <img 
                        src={`https://source.unsplash.com/random/800x600?tech,${project}`} 
                        alt={`Project ${project}`} 
                        className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-white">Project {project}</h3>
                        <p className="text-gray-300 mb-4">
                            Innovative solution showcasing MERN stack proficiency and sleek UI/UX design. 
                            This project demonstrates the seamless integration of frontend and backend technologies.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-600 text-xs text-white rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a 
                            href="#" 
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                        >
                            Explore Project →
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <div className="flex justify-center space-x-6 mt-10">
    <a href="https://github.com/minhajkc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
    </a>
    <a href="https://www.linkedin.com/in/minhaj-kc-a7b118308" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" /></svg>
    </a>
    <a href="https://twitter.com/minhaj_kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M23.953 4.569c-.885.39-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.95.555-2.005.959-3.127 1.184-.896-.957-2.173-1.554-3.586-1.554-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.164-10.148-5.144-.424.724-.667 1.561-.667 2.457 0 1.69.863 3.179 2.173 4.055-.804-.026-1.562-.247-2.228-.616v.062c0 2.362 1.68 4.337 3.91 4.778-.41.111-.843.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.808 2.104-6.115 2.104-.398 0-.79-.023-1.17-.068 2.179 1.396 4.768 2.209 7.557 2.209 9.056 0 14.01-7.498 14.01-13.986 0-.213-.004-.425-.014-.636.962-.695 1.8-1.56 2.46-2.548l-.047-.02z" clipRule="evenodd" /></svg>
    </a>
    <a href="https://instagram.com/minhaj.kc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.013 4.85.07 1.259.057 2.09.277 2.573.465a5.08 5.08 0 011.774 1.16 5.08 5.08 0 011.16 1.774c.188.482.408 1.313.465 2.573.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.057 1.259-.277 2.09-.465 2.573a5.073 5.073 0 01-1.16 1.774 5.073 5.073 0 01-1.774 1.16c-.482.188-1.313.408-2.573.465-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.259-.057-2.09-.277-2.573-.465a5.08 5.08 0 01-1.774-1.16 5.08 5.08 0 01-1.16-1.774c-.188-.482-.408-1.313-.465-2.573-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.057-1.259.277-2.09.465-2.573a5.08 5.08 0 011.16-1.774 5.08 5.08 0 011.774-1.16c.482-.188 1.313-.408 2.573-.465 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.013 7.053.072 5.775.131 4.643.38 3.763.763A7.543 7.543 0 001.622 1.62a7.543 7.543 0 00-.857 2.14c-.383.88-.632 2.011-.691 3.29C0 8.741 0 9.151 0 12c0 2.849.013 3.259.072 4.538.059 1.279.308 2.411.691 3.29.23.532.501 1.027.857 1.482a7.543 7.543 0 001.482.857c.88.383 2.011.632 3.29.691 1.279.059 1.689.072 4.538.072s3.259-.013 4.538-.072c1.279-.059 2.411-.308 3.29-.691a7.543 7.543 0 001.482-.857 7.543 7.543 0 00.857-1.482c.383-.88.632-2.011.691-3.29.059-1.279.072-1.689.072-4.538s-.013-3.259-.072-4.538c-.059-1.279-.308-2.411-.691-3.29a7.543 7.543 0 00-.857-1.482 7.543 7.543 0 00-1.482-.857c-.88-.383-2.011-.632-3.29-.691C15.259.013 14.849 0 12 0zm0 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zm0 10.177a4.015 4.015 0 110-8.03 4.015 4.015 0 010 8.03zm6.406-11.862a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" /></svg>
    </a>
</div>
</section>

    </section>
  );
}

export default Projects;
