import React from "react"; 

const ManageAttendance = () => {
    return(
        
        <div className="p-4 bg-gray-200 ml-1 mt-20 mb-6 ">
        <h2 className="text-3xl font-semibold mb-4">View Attendance</h2>
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <div className="grid grid-cols-5 gap-4 mb-4">
            <select className="border p-2 rounded">
              <option>Faculty BICTE</option>
            </select>
            <select className="border p-2 rounded">
              <option>Semester 8th</option>
            </select>
            <select className="border p-2 rounded">
              <option>Subject AI</option>
            </select>
            <input type="date" className="border p-2 rounded" value="2081-02-16" />
            <button className="bg-blue-500 text-white p-2 rounded">Attendance Sheet</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">Subject Report</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Student name</th>
                <th className="py-2 px-4 border-b">Semester</th>
                <th className="py-2 px-4 border-b">Total Present Day</th>
                <th className="py-2 px-4 border-b">Total Absence Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">Dhan Bahadur Ale</td>
                <td className="py-2 px-4 border-b">8th</td>
                <td className="py-2 px-4 border-b">15</td>
                <td className="py-2 px-4 border-b">1</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">Bipana Rana</td>
                <td className="py-2 px-4 border-b">8th</td>
                <td className="py-2 px-4 border-b">13</td>
                <td className="py-2 px-4 border-b">3</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      
  
    );
  };
  
  export default ManageAttendance;  
    

