import React from 'react';

import { FiCheck, FiX } from 'react-icons/fi';

const ViewRequest = () => {
  return (
    <div className="flex flex-col flex-grow mt-20 ml-1 mb-6">
      <div className="bg-gray-200 p-6 flex-grow border-gray-400">
        <h1 className="text-2xl font-bold mb-6 text-black-500">View Request</h1>

        {/* First Table: Absence Records with Actions */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Absence records</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-r">#</th>
                <th className="px-4 py-2 border-r">Student name</th>
                <th className="px-4 py-2 border-r">Faculty</th>
                <th className="px-4 py-2 border-r">Semester</th>
                <th className="px-4 py-2 border-r">Absence reason</th>
                <th className="px-4 py-2 border-r">No. of days</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">1</td>
                <td className="px-4 py-2 border-r">Maria</td>
                <td className="px-4 py-2 border-r">BICT</td>
                <td className="px-4 py-2 border-r">First</td>
                <td className="px-4 py-2 border-r">Sick</td>
                <td className="px-4 py-2 border-r">2</td>
                <td className="px-4 py-2 flex">
                  <FiCheck className="w-6 h-6 mr-4 text-green-500 cursor-pointer" />
                  <FiX className="w-6 h-6 text-red-500 cursor-pointer" />
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">2</td>
                <td className="px-4 py-2 border-r">Maria</td>
                <td className="px-4 py-2 border-r">BICT</td>
                <td className="px-4 py-2 border-r">First</td>
                <td className="px-4 py-2 border-r">Sick</td>
                <td className="px-4 py-2 border-r">3</td>
                <td className="px-4 py-2 flex">
                  <FiCheck className="w-6 h-6 mr-4 text-green-500 cursor-pointer" />
                  <FiX className="w-6 h-6 text-red-500 cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Second Table: Absence Records with Status */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Absence records</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-r">#</th>
                <th className="px-4 py-2 border-r">Student name</th>
                <th className="px-4 py-2 border-r">Faculty</th>
                <th className="px-4 py-2 border-r">Semester</th>
                <th className="px-4 py-2 border-r">Absence reason</th>
                <th className="px-4 py-2 border-r">No. of days</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">1</td>
                <td className="px-4 py-2 border-r">Maria</td>
                <td className="px-4 py-2 border-r">BICT</td>
                <td className="px-4 py-2 border-r">First</td>
                <td className="px-4 py-2 border-r">Sick</td>
                <td className="px-4 py-2 border-r">2</td>
                <td className="px-4 py-2">Accepted</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 border-r">2</td>
                <td className="px-4 py-2 border-r">Maria</td>
                <td className="px-4 py-2 border-r">BICT</td>
                <td className="px-4 py-2 border-r">First</td>
                <td className="px-4 py-2 border-r">Sick</td>
                <td className="px-4 py-2 border-r">2</td>
                <td className="px-4 py-2">Declined</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewRequest;
