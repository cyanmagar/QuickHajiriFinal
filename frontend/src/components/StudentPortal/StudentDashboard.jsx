import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import presentIcon from '../../assets/Students.png'; // Replace with your icon path
import absentIcon from '../../assets/Students.png'; // Replace with your icon path

const StudentDashboard = () => {
  const presentDays = 10;
  const absentDays = 6;

  const data = [
    { name: 'Present Days', value: presentDays },
    { name: 'Absent Days', value: absentDays },
  ];

  const COLORS = ['#0088FE', '#FF8042']; // Colors for the pie chart

  return (
    <div className="flex flex-col flex-grow mt-20 ml-1 mb-6">
      <div className="bg-gray-200 p-6 flex-grow border-gray-400">
        <h1 className="text-2xl font-bold mb-6 text-black-500">Student Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Present Days */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full h-40">
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-gray-500 mb-2">Present days in this month</h2>
              <div className="text-3xl font-bold mb-2">{presentDays}</div>
            </div>
            <img src={presentIcon} alt="Present Icon" className="w-16 h-16" />
          </div>
          
          {/* Absent Days */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg flex justify-between items-center hover:scale-105 transition-transform duration-300 w-full h-40">
            <div className="flex flex-col">
              <h2 className="text-sm font-medium text-gray-500 mb-2">Absence days in this month</h2>
              <div className="text-3xl font-bold mb-2">{absentDays}</div>
            </div>
            <img src={absentIcon} alt="Absent Icon" className="w-16 h-16" />
          </div>
          
          {/* Attendance Pie Chart */}
          <div className="col-span-2 flex justify-center">
            <div className="bg-gray-100 p-6 shadow-md rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-300 w-full md:w-1/2 h-60">
              <h2 className="text-sm font-medium text-gray-500 mb-4">Attendance Summary</h2>
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
