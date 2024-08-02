import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 flex justify-between items-center p-4 bg-transparent text-white z-50">
      <div className="text-lg font-bold">
        The X35 | Arpit Singh Bhatia
      </div>
      <div className="flex space-x-8">
        <Link 
          className="cursor-pointer" 
          to="about" 
          smooth={true} 
          duration={500}
        >
          About
        </Link>
        <Link 
          className="cursor-pointer" 
          to="work" 
          smooth={true} 
          duration={500}
        >
          Work
        </Link>
        <Link 
          className="cursor-pointer" 
          to="contact" 
          smooth={true} 
          duration={500}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
