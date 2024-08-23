import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        <div className={`flex-1 mt-1 ${isCollapsed ? 'ml-20' : 'ml-64'} mb-20 flex flex-col transition-all duration-300`}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
