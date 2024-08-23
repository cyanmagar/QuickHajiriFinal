import React, { useState } from 'react';

const AttendanceRecords = () => {
  const [faculty, setFaculty] = useState('BICTE');
  const [semester, setSemester] = useState('8th');
  const [subject, setSubject] = useState('AI');
  const [date, setDate] = useState('2081/02/16');
  const [showSubjectReport, setShowSubjectReport] = useState(false);

  const handleShowReport = () => {
    setShowSubjectReport(true);
  };

  return (
    <div className="flex flex-col items-center mt-20 ml-1 mb-6">
      <div className="bg-gray-200 p-6 border-gray-400 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6 text-black-500">View Request</h1>

        {/* Dropdowns for selection */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <select
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="BICTE">Faculty BICTE</option>
            {/* Add more faculties here */}
          </select>

          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="8th">8th Semester</option>
            {/* Add more semesters here */}
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          >
            <option value="AI">AI</option>
            {/* Add more subjects here */}
          </select>

          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Button to show the subject report */}
        <div className="flex justify-end">
          <button
            onClick={handleShowReport}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Attendance Sheet
          </button>
        </div>

        {/* Subject Report Table */}
        {showSubjectReport && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Subject Report</h2>
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/12 px-4 py-2">#</th>
                  <th className="w-3/12 px-4 py-2">Student name</th>
                  <th className="w-2/12 px-4 py-2">Semester</th>
                  <th className="w-3/12 px-4 py-2">Total Present Day</th>
                  <th className="w-3/12 px-4 py-2">Total Absence Day</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Dhan Bahadur Ale</td>
                  <td className="border px-4 py-2">8th</td>
                  <td className="border px-4 py-2">15</td>
                  <td className="border px-4 py-2">1</td>
                </tr>
                <tr className="text-center">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Bipana Rana</td>
                  <td className="border px-4 py-2">8th</td>
                  <td className="border px-4 py-2">13</td>
                  <td className="border px-4 py-2">3</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceRecords;
