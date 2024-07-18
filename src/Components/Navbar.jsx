import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-l from-gray-900 via-blue-800 to-blue-900 backdrop-blur-md sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            
              <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">  <img className="h-5 w-auto" src="public/images/Logo.PNG" alt="Logo"  /></Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</Link>
                <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
                <Link to="/projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
                <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white">Hire Me</Link>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={closeMobileMenu}>About</Link>
          <Link to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={closeMobileMenu}>Projects</Link>
          <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" onClick={closeMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
