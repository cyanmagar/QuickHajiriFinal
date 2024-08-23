import React from 'react';
import studentsIcon from '../../assets/Students.png';
import semesters from '../../assets/Semester.png';
import Nteacher from '../../assets/NTeacher.png';
import takeattendance from '../../assets/TakeAttendance.png';


const Dashboard = () => {
  return (
    
        <div className="page-container flex flex-col flex-grow mt-20 ml-1 mb-6">
          <div className="bg-gray-200 p-6 flex-grow  border-gray-400">
            <h1 className="text-2xl font-bold mb-6 text-black-500">Administrator Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full h-40">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium text-gray-500 mb-2">STUDENTS</h2>
                  <div className="text-3xl font-bold mb-2">10</div>
                </div>
                <img src={studentsIcon} alt="Students Icon" className="w-16 h-16" />
              </div>
              
              <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full h-40">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium text-gray-500 mb-2">SEMESTERS</h2>
                  <div className="text-3xl font-bold mb-2">10</div>
                </div>
                <img src={semesters} alt="Semester" className="w-16 h-16" />
              </div>
              
              <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full h-40">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium text-gray-500 mb-2">TEACHERS</h2>
                  <div className="text-3xl font-bold mb-2">10</div>
                </div>
                <img src={Nteacher} alt="Noofteachers" className="w-16 h-16" />
              </div>
              
              <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full h-40">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium text-gray-500 mb-2">TOTAL STUDENT ATTENDANCE</h2>
                  <div className="text-3xl font-bold mb-2">10</div>
                </div>
                <img src={takeattendance} alt="Take Attendance" className="w-16 h-16" />
              </div>
            </div>
          </div>
          
    </div>
  );
};

export default Dashboard;
