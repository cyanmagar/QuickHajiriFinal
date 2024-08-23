import React from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const ManageFaculty = () => {
    return (
    
          <div className='page-container flex flex-col flex-grow mt-20 ml-1 mb-6'>
          <div className="bg-gray-200 p-6 flex-grow  border-gray-400">

          <h2 className="text-2xl font-bold mb-6 text-teal-800">Add Faculty</h2>
            <div className="manage-faculty flex flex-col md:flex-row p-4">
              {/* Form Section */}
              <div className="form-container w-36 h-42 md:w-1/3 bg-white p-6 shadow-md rounded-md mr-4">
                 <div className="form-group mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Faculty name</label>
                  <input type="text" placeholder="Name" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="form-group mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">No. of Semester</label>
                  <input type="text" placeholder="Number of Semesters" className="px-3 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="button-group flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
                  <button className="bg-gray-300 text-black px-4 py-2 rounded-md">Reset</button>
                </div>
              </div>
              {/* Table Section */}
              <div className="table-container w-full md:w-2/3 bg-white p-6 shadow-md rounded-md">
                <h2 className="text-xl font-semibold mb-4">Current Faculty</h2>
                <div className="relative mb-4">
                  <input type="text" placeholder="Search..." className="px-3 py-2 border border-gray-300 rounded-md w-full" />
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-2 border-b">#</th>
                      <th className="py-2 border-b">Faculty name</th>
                      <th className="py-2 border-b">No. of Semester</th>
                      <th className="py-2 border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(5)].map((_, i) => (
                      <tr key={i}>
                        <td className="py-2 border-b text-center">{i + 1}</td>
                        <td className="py-2 border-b text-center">BICTE</td>
                        <td className="py-2 border-b text-center">08</td>
                        <td className="py-2 border-b text-center">
                          <button className="text-blue-500 mr-2"><FiEdit /></button>
                          <button className="text-red-500"><FiTrash2 /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
    );
  };
  
  export default ManageFaculty;
  