import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaChalkboardTeacher, 
  FaUserGraduate, 
  FaUsers, 
  FaCalendarAlt, 
  FaBook, 
  FaClipboardList, 
  FaSignOutAlt 
} from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Sidebar = ({ isCollapsed, toggleCollapse }) => {
  const location = useLocation();

  const shouldHideSidebar = ['/login', '/register'].includes(location.pathname);

  if (shouldHideSidebar) {
    return null;
  }

  return (
    <div
      className={`fixed top-20 left-0 ${isCollapsed ? 'w-20' : 'w-64'} h-[calc(100%-5rem)] bg-black text-white border-r-2 border-gray-700 z-10 transition-width duration-300 bg-opacity-90`}
    >
      <div className="p-4 relative">
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 border-2 border-gray-600 p-1 rounded-full"
        >
          {isCollapsed ? <FiChevronRight size={24} className="text-white" /> : <FiChevronLeft size={24} className="text-white" />}
        </button>
        <div className="flex flex-col space-y-3">
          {[
            { Icon: FaTachometerAlt, label: 'Dashboard', to: '/admin/dashboard' },
            { Icon: FaChalkboardTeacher, label: 'Manage Teacher', to: '/admin/manage-teacher' },
            { Icon: FaUserGraduate, label: 'Manage Student', to: '/admin/manage-student' },
            { Icon: FaUsers, label: 'Manage Faculty', to: '/admin/manage-faculty' },
            { Icon: FaCalendarAlt, label: 'Upgrade Semester', to: '/admin/upgrade-semester' },
            { Icon: FaBook, label: 'Manage Subject', to: '/admin/manage-subject' },
            { Icon: FaClipboardList, label: 'Manage Attendance', to: '/admin/manage-attendance' },
          ].map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? 'p-2 flex items-center space-x-5 bg-orange-600 text-white font-bold transition-colors'
                  : 'p-2 flex items-center space-x-5 bg-transparent hover:bg-orange-500 cursor-pointer transition-colors'
              }
            >
              <item.Icon size={24} className="text-white" />
              {!isCollapsed && <span className="text-xl font-semibold">{item.label}</span>}
            </NavLink>
          ))}
        </div>
        <div className="mt-12">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? 'p-2 flex items-center space-x-5 bg-orange-600 text-white font-bold transition-colors'
                : 'p-2 flex items-center space-x-5 bg-transparent hover:bg-orange-600 cursor-pointer transition-colors'
            }
          >
            <FaSignOutAlt size={24} className="text-white" />
            {!isCollapsed && <span className="text-xl font-semibold">Logout</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;