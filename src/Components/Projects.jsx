import React from 'react';
import { CodeIcon } from "@heroicons/react/solid";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';




function Projects() {

  const projects = [
    { 
      id: 1,
      title: "FruitBasket-E-Commerce",
      image: "/images/Fruitbasket.png",
      description:'FruitBasket eCommerce application is a lightweight, Node.js-powered platform for buying and selling fruits online. Using MongoDB for data storage and Handlebars.js for templating, it offers a seam…',
      link:'https://Fruitbasket.site'
    
    },
    { 
      id: 2,
      title: "RestoHub-Order-taking-App",
      image: "/images/Restohub.png",
      description:'RestoHub is a restaurant management application designed to streamline operations between administrators, waiters, and chefs. It offers distinct functionalities for each role',
       link:'https://resto-hub.vercel.app/'
    },
    { 
      id: 3,
      title: "Sales-Enterprise-App-Using-React",
      image: "/images/Enterprice.png",
      description:'A React mini web application built in React for managing product inventory, sales tracking, and revenue calculation. It offers distinct functionalities for Admin and sales man    ',
      link:'https://sales-enterprise-app-react.vercel.app/'
    },
  ]

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 min-h-screen">
           
<section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen " id="projects">
    <div className="max-w-6xl mx-auto  ">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
                    <img 
                        src={`${project.image}`} 
                        alt={`Project ${project}`} 
                        className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"
                    />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                        <p className="text-gray-300 mb-4">
                        {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-600 text-xs text-white rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a 
                            href={`${project.link}`} 
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

    </section>
  );
}

export default Projects;
