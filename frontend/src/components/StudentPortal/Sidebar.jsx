import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import DashboardIcon from '../../assets/Dashboard.png';
import Manageteacher from '../../assets/ManageTeacher.png';
import Managefaculty from '../../assets/ManageFaculty.png';
import Upgradesemester from '../../assets/UpgradeSemester.png';
import logout from '../../assets/logout.png';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Sidebar = ({ isCollapsed, toggleCollapse }) => {
  const location = useLocation();

  const shouldHideSidebar = ['/login', '/register'].includes(location.pathname);

  if (shouldHideSidebar) {
    return null;
  }

  return (
    <div
      className={`fixed top-20 left-0 ${isCollapsed ? 'w-20' : 'w-64'} h-[calc(100%-5rem)] bg-gray-100 text-black border-r-2 border-gray-400 z-10 transition-width duration-300`}
    >
      <div className="p-4 relative">
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 border-2 border-gray-400 p-1 rounded-full"
        >
          {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>
        <div className="flex flex-col space-y-3">
          {[
            { src: DashboardIcon, label: 'Dashboard', to: '/student/dashboard' },
            { src: Manageteacher, label: 'Leave Request', to: '/student/leave-request' },
            { src: Managefaculty, label: 'View Attendance', to: '/teacher/view-attendance' },
           
          ].map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? 'p-2 flex items-center space-x-5 bg-orange-500 text-black-800 font-bold transition-colors'
                  : 'p-2 flex items-center space-x-5 bg-gray-100 hover:bg-orange-500 cursor-pointer transition-colors'
              }
            >
              <img src={item.src} alt={`${item.label} Logo`} className="h-8 w-auto" />
              {!isCollapsed && <span className="text-xl font-semibold">{item.label}</span>}
            </NavLink>
          ))}
        </div>
        <div className="mt-12">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? 'p-2 flex items-center space-x-5 bg-orange-500 text-black-800 font-bold transition-colors'
                : 'p-2 flex items-center space-x-5 bg-gray-100 hover:bg-orange-500 cursor-pointer transition-colors'
            }
          >
            <img src={logout} alt="Logout Logo" className="h-8 w-auto" />
            {!isCollapsed && <span className="text-xl font-semibold">Logout</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
