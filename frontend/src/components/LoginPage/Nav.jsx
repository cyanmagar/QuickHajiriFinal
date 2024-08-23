import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../assets/logo.png';

function Nav() {
  return (
    <header className="bg-black bg-opacity-80 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <img src={logo} alt="Logo" className="h-14" />
        <nav className="flex space-x-10 text-white">
          <Link to="/" className="hover:underline">HOME</Link>
          <Link to="/about" className="hover:underline">ABOUT US</Link>
          <Link to="/services" className="hover:underline">SERVICES</Link>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
