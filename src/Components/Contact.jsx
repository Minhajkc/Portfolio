import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
function Contact() {

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-blue-900 h-screen overflow-auto " id="contact">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Me
        </h2>
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-auto ">
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

<div className="flex justify-center space-x-6 mt-20">
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
            <div className="md:w-1/2 p-8">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input type="text" id="name" placeholder="Your Name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input type="email" id="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <textarea id="message" placeholder="Your Message" rows="4" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        
    </div>

</section>
  )
}

export default Contact;
