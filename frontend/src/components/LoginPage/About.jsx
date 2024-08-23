import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Nav from './Nav'; // Import the Nav component
import bipana from '../../assets/bipana.png'; 
import bishal from '../../assets/bishal.png';
import dhan from '../../assets/dhan.png';
import latika from '../../assets/latika.png';
import logo from '../../assets/logo.png'; 

const teamMembers = [
  {
    name: 'Bipana Rana',
    role: 'Front End Developer',
    image: bipana,
    github: 'https://github.com/bipanarana',
    linkedin: 'https://linkedin.com/in/bipanarana',
    instagram: 'https://instagram.com/bipanarana',
  },
  {
    name: 'Bishal Ruchal',
    role: 'Documentation & Testing',
    image: bishal,
    github: 'https://github.com/bishalruchal',
    linkedin: 'https://linkedin.com/in/bishalruchal',
    instagram: 'https://instagram.com/bishalruchal',
  },
  {
    name: 'Dhan Bahadur Ale',
    role: 'Backend Developer',
    image: dhan,
    github: 'https://github.com/dhanbahadurale',
    linkedin: 'https://linkedin.com/in/dhanbahadurale',
    instagram: 'https://instagram.com/dhanbahadurale',
  },
  {
    name: 'Latika Sunam',
    role: 'Front End Developer',
    image: latika,
    github: 'https://github.com/latikasunam',
    linkedin: 'https://linkedin.com/in/latikasunam',
    instagram: 'https://instagram.com/latikasunam',
  },
];

function About() {
  return (
    <div className="py-0 bg-gray-300">
      <Nav /> {/* Render the Nav component at the top */}
      <div className="container mx-auto">
        <h2 className="text-4xl py-6 font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-wrap justify-center items-center mb-12">
          <div className="w-full md:w-2/4 text-center">
            <img src={logo} alt="Logo" className="h-40 w-42 mx-auto mb-4" />
          </div>
          <div className="w-full md:w-2/4 px-4 md:px-0 text-justify ">
            <p>
              Our Attendance Management System is designed to streamline the process of tracking and managing student attendance. Utilizing advanced image recognition technology, our system ensures accurate and up-to-date attendance records. With features such as leave management, performance monitoring, and detailed reporting, our solution provides comprehensive support for teachers and administrators to improve overall school management.
            </p>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="max-w-xs mx-14 my-8 text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 border-2 border-black rounded-full overflow-hidden">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className=" mb-4">{member.role}</p>
              <div className="flex justify-center space-x-5">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
