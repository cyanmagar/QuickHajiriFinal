import React from 'react';
import {Link} from 'react-router-dom';
import studentService from '../../Services/student.service';
import Modal from "react-modal";



const ManageStudent = () => {
  return (
  
        <div className="page-container flex flex-col flex-grow mt-20 ml-1 mb-6">
          <div className="flex-grow bg-gray-200 border-1 border-gray-400 p-4 ml-2">
            <h1 className="text-2xl font-semibold mb-4">Student</h1>
            <div className="flex justify-end mb-4">
              <Link to="/admin/add-student">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Student</button>
              </Link>
            </div>
            <div className="table-container">
              <h3 className="text-lg font-semibold mb-2">Current Students</h3>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">#</th>
                    <th className="py-2 px-4 border-b">Student Name</th>
                    <th className="py-2 px-4 border-b">Contact</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Username</th>
                    <th className="py-2 px-4 border-b">Password</th>
                    <th className="py-2 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">Amrit Thapa</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">amrit12@gmail.com</td>
                    <td className="py-2 px-4 border-b">amrit</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">2</td>
                    <td className="py-2 px-4 border-b">Sujan Ale</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">sujan123@gmail.com</td>
                    <td className="py-2 px-4 border-b">sujan</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">3</td>
                    <td className="py-2 px-4 border-b">Anju Thapa</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">aleanju1@gmail.com</td>
                    <td className="py-2 px-4 border-b">anju</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">4</td>
                    <td className="py-2 px-4 border-b">Binita Thapa</td>
                    <td className="py-2 px-4 border-b">9008564156</td>
                    <td className="py-2 px-4 border-b">binitathapa@gmail.com</td>
                    <td className="py-2 px-4 border-b">binita</td>
                    <td className="py-2 px-4 border-b">********</td>
                    <td className="py-2 px-4 border-b">
                      <i className="fas fa-edit mr-2"></i>
                      <i className="fas fa-trash-alt"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
  );
};

export default ManageStudent;