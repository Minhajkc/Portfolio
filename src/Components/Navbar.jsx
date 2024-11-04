import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, FolderKanban, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLink = ({ to, icon: Icon }) => (
    <Link
      to={to}
      className="p-2 text-blue-900 hover:text-gray-700 hover:bg-gray-300 rounded-lg transition-colors"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <Icon size={20} />
    </Link>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-10">
      <div className="bg-gray-300 rounded-full shadow-lg backdrop-blur-md bg-opacity-90 p-2">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-1">
          <NavLink to="/" icon={Home} />
          <NavLink to="/about" icon={User} />
          <NavLink to="/projects" icon={FolderKanban} />
          <NavLink to="/contact" icon={Mail} />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="sm:hidden p-2 text-black hover:text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-100 rounded-lg shadow-lg p-2 flex flex-col items-center space-y-1">
            <NavLink to="/" icon={Home} />
            <NavLink to="/about" icon={User} />
            <NavLink to="/projects" icon={FolderKanban} />
            <NavLink to="/contact" icon={Mail} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
