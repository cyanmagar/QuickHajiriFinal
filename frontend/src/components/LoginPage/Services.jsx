import React from 'react';
import Nav from './Nav'; // Import the Nav component
import trackattendance from '../../assets/trackattendance.jpg';
import performancemonitoring from '../../assets/performancemonitoring.jpg';
import leavemanagement from '../../assets/leavemanagement.jpg';
import reporting from '../../assets/reporting.jpg';

function Services() {
  const services = [
    {
      icon: trackattendance,
      title: 'Track Attendance',
      description: 'Our system utilizes advanced image recognition technology to accurately capture and record student attendance. Attendance is taken seamlessly, ensuring that the records are always up-to-date and accurate.',
    },
    {
      icon: leavemanagement,
      title: 'Leave Management',
      description: 'Students can easily apply for leaves through our system, which allows for a streamlined and efficient approval process. Teachers and administrators can review, approve, or reject leave requests with just a few clicks.',
    },
    {
      icon: performancemonitoring,
      title: 'Performance Monitoring',
      description: 'Our system provides a comprehensive view of student attendance and leave records, enabling teachers and administrators to monitor student performance closely. ',
    },
    {
      icon: reporting,
      title: 'Reporting',
      description: 'The Attendance Management System generates detailed reports on attendance and leave data, offering valuable insights for teachers, students, and administrators. ',
    },
  ];

  return (
    <div className="py-0 bg-gray-300">
      <Nav /> {/* Render the Nav component at the top */}
      <div className="container mx-auto">
        <h2 className="text-4xl py-6 font-bold text-center mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="text-center mx-9 my-8">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={service.icon} alt={service.title} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 h-50 w-60 text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
