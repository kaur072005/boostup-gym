// src/components/Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Programs', 'Trainers', 'Gallery', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 ${styles.navbar}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-white">
          BOOST<span className="text-yellow-300">UP</span>
        </div>

        <div className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#join"
            className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            Join Now
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4 text-white">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-lg hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#join"
            className="block bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
