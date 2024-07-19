import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import SkillCategory from './SkillCategory';
import Logo from '../assets/images/Logo.png'
import Minhaj from '../assets/images/Minhaj4.png';
import CodingBackground from './CodingBackground';


function Home() {
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const skills = ['MERN Stack Developer', 'UI/UX Designer'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const scrollToTop = () => {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    };


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const [loading, setLoading] = useState(false);

      const handleSubmit = async (e) => {
        e.preventDefault();
        
      
        if (!formData.name || !formData.email || !formData.message) {
            alert('Items field cannot be empty');
            return;
        }
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycby9GzqGyg_gX_IKdr-PTZ90AM1J49M4uYnl_IjDaZ8ujeNPmWq5k8ZgLDvThz-hZw_m/exec';
        setLoading(true);
        
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
    
            if (response.ok) {
                alert('Form submitted successfully');
                window.location.reload();
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };
    
    
    const projects = [
        { 
          id: 1,
          title: "FruitBasket-E-Commerce",
          image: "/images/Fruitbasket.png",
          description: 'FruitBasket eCommerce application is a lightweight, Node.js-powered platform for buying and selling fruits online. Using MongoDB for data storage and Handlebars.js for templating, it offers a seamless shopping experience.',
          link: 'https://Fruitbasket.site',
          technologies: [ 'Node.js', 'MongoDB', 'Express','HBS']
        },
        { 
          id: 2,
          title: "RestoHub-Order-taking-App",
          image: "/images/Restohub.png",
          description: 'RestoHub is a restaurant management application designed to streamline operations between administrators, waiters, and chefs. It offers distinct functionalities for each role.',
          link: 'https://resto-hub.vercel.app/',
          technologies: ['React']
        },
        { 
          id: 3,
          title: "Sales-Enterprise-App-Using-React",
          image: "/images/Enterprice.png",
          description: 'A React mini web application built in React for managing product inventory, sales tracking, and revenue calculation. It offers distinct functionalities for Admin and sales man.',
          link: 'https://sales-enterprise-app-react.vercel.app/',
          technologies: ['React']
        },
      ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center min-h-screen p-5 text-center relative overflow-hidden bg-pattern-one" id='home'>
    <div className="absolute inset-0 z-0">
    <CodingBackground />
        <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.png')] opacity-10"></div>
    </div>
    
    <div className="z-0">
        
        <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Minhaj</span>
        </h1>
        <p className="text-2xl mb-8 h-8 animate-fade-in">
            <span className="typing-effect">{skills[currentSkillIndex]}</span>
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 animate-fade-in">
            Passionate about creating innovative web solutions and user-centric designs. 
            Let's bring your digital ideas to life!
        </p>
        <div className="flex justify-center space-x-4 mb-8">
    <a href="#contact" className="px-4 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Get In Touch
    </a>
    <a href="#projects" className="px-4 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 transition-all duration-300 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        View Projects
    </a>
</div>
<div className="flex justify-center space-x-6">
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
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
</section>

       {/* About Me */}
       <section className="py-20 px-4 bg-gradient-to-l from-gray-900 to-blue-900">
        
    <div className="max-w-6xl mx-auto ">
      
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
                <img 
                    src={Minhaj} 
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
                <div className="flex flex-wrap gap-4 mt-6">
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
        <div className=" bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-center float-end">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
    </div>
    
   
</section>

{/* Skills Showcase */}
<section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory title="Frontend Development" icon="🖥️" skills={['React','JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']} />
            <SkillCategory title="Backend Development" icon="🔧" skills={['Node.js', 'Express.js','RESTful APIs', 'MongoDB']} />
            <SkillCategory title="DevOps & Tools" icon="🛠️" skills={['Git', 'AWS',  'Webpack', 'Babel', 'npm/Yarn']} />
            <SkillCategory title="UI/UX Design" icon="🎨" skills={['Figma', 'Sketch', 'Prototyping', 'Usability Testing', 'Responsive Design', 'Color Theory']} />
            <SkillCategory title="Other Technologies" icon="📚" skills={['Redux', 'WebSockets','Performance Optimization']} />
            <SkillCategory title="Soft Skills" icon="🤝" skills={['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Creativity', 'Critical Thinking','Project Management', 'Mentoring']} />
        </div>
        <div className=" bottom-10 left-1/2 transform -translate-x-1/2 mt-10 animate-bounce text-center float-right">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
    </div>
  
</section>
           {/* Projects Gallery */}
<section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900" id="projects">
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <img 
            src={project.image} 
            alt={`Project ${project.title}`} 
            className="w-full h-48 object-cover hover:opacity-75 transition-opacity duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-blue-600 text-xs text-white rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              Explore Project →
            </a>
          </div>
        </div>
      ))}
        </div>
           <div className=" bottom-10 left-1/2 transform -translate-x-1/2 mt-10 animate-bounce text-center float-right">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
    </div>
</section>

           {/* Contact Form */}
<section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900" id="contact">
<h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
           Contact Me
        </h2>
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-blue-900 p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                <div className="space-y-4">
    <div className="flex items-center">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span>Minhajvvo@gmail.com</span>
    </div>
    <div className="flex items-center">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span>+91 7034936080</span>
    </div>
    <div className="flex items-center">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <span>Calicut, Kerala</span>
    </div>
  
</div>
            </div>
            <div className="md:w-1/2 p-8">
            {loading ? (
         <div className="text-center text-blue-500">
         Please wait, form is submitting...
       </div>
      ):null}
            <form className="space-y-6" id="gform" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          name="message"
          rows="4"
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Send Message
      </button>
    </form>
            </div>
        </div>
    </div>
    <svg
        className="h-6 w-6 float-right animate-bounce cursor-pointer mt-10 mr-"
        fill="none"
        onClick={scrollToTop}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
      </svg>
</section>
{/* Footer */}
<footer className="bg-gray-900 text-gray-300 py-8">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0 ">
        <img className="h-5 w-auto mb-4 " src={Logo} alt="Logo" />
            <p className="text-sm">MERN Stack Developer & UI/UX Designer</p>
           <p className="text-sm">+91 7034936080</p>
        </div>
      <div className="flex justify-center space-x-6">
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
    </div>
    <div className="text-center mt-8 text-sm">
        <p>© {new Date().getFullYear()} Minhaj. All rights reserved.</p>
    </div>
</footer>
        </div>
    );
}

export default Home;