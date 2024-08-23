import React, { useState } from 'react';

const ViewAttendance = () => {
  const [semester, setSemester] = useState('8th');
  const [subject, setSubject] = useState('AI');
  const [date, setDate] = useState('2081/02/16');
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: 'Dhan Bahadur Ale', semester: '8th', presentDays: 15, absentDays: 1 },
    { id: 2, name: 'Bipana Rana', semester: '8th', presentDays: 13, absentDays: 3 }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecords = attendanceRecords.filter((record) =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-teal-700 mb-6">View Attendance</h1>

        {/* Filter Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            >
              <option value="8th">8th</option>
              <option value="7th">7th</option>
              <option value="6th">6th</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            >
              <option value="AI">AI</option>
              <option value="Java">Java</option>
              <option value="DSA">DSA</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            />
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 mb-6">
          Attendance Sheet
        </button>

        {/* Attendance Report Table */}
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Subject Report</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-3 py-2 border rounded-lg w-1/4 focus:outline-none"
          />
        </div>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Student name</th>
              <th className="py-2 px-4 border">Semester</th>
              <th className="py-2 px-4 border">Total Present Day</th>
              <th className="py-2 px-4 border">Total Absence Day</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id} className="text-center">
                <td className="border px-4 py-2">{record.id}</td>
                <td className="border px-4 py-2">{record.name}</td>
                <td className="border px-4 py-2">{record.semester}</td>
                <td className="border px-4 py-2">{record.presentDays}</td>
                <td className="border px-4 py-2">{record.absentDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAttendance;
