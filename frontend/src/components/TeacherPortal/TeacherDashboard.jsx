import React from 'react';
import studentsIcon from '../../assets/Students.png';
import semestersIcon from '../../assets/Semester.png';
import attendanceIcon from '../../assets/TakeAttendance.png';

const TeacherDashboard = () => {
  return (
    <div className="flex flex-col flex-grow mt-20 ml-1 mb-6">
      <div className="bg-gray-200 p-6 flex-grow border-gray-400">
        <h1 className="text-2xl font-bold mb-6 text-black-500">Teacher Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* First Row - Two Items */}
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
            <img src={semestersIcon} alt="Semesters Icon" className="w-16 h-16" />
          </div>
          
          {/* Second Row - Single Centered Item */}
          <div className="col-span-2 flex justify-center">
            <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full md:w-1/2 h-40">
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-gray-500 mb-2">TOTAL STUDENT ATTENDANCE</h2>
                <div className="text-3xl font-bold mb-2">10</div>
              </div>
              <img src={attendanceIcon} alt="Attendance Icon" className="w-16 h-16" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
