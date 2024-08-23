import React from "react";
import logo from "../../assets/logo.png";
import teacher from "../../assets/dhan.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-90 p-3 fixed top-0 left-0 right-0 z-10 border-b border-gray-400 w-full">
      <div className="flex justify-between items-center max-w-full px-4 mx-auto">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Quick Hajiri Logo" className="h-12 w-auto" />
        </div>

        <div className="flex items-center space-x-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border border-gray-400 rectangle-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
            />
            <FiSearch className="absolute right-3 top-2 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border border-gray-400">
              <img src={teacher} alt="Admin Logo" className="w-full h-full bg-white object-cover" />
            </div>
            <span className="text-lg text-white">(Teacher)</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
