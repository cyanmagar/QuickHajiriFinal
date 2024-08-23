import React, { useState } from 'react';

const LeaveRequest = () => {
  const [formData, setFormData] = useState({
    subject: '',
    date: '',
    days: '',
    reason: ''
  });

  const [records, setRecords] = useState([
    { id: 1, date: '2081/02/16', subject: 'Java', reason: 'Sick', days: 2, status: 'Accepted' },
    { id: 2, date: '2081/02/16', subject: 'AI', reason: 'Sick', days: 2, status: 'Declined' }
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: records.length + 1,
      date: formData.date,
      subject: formData.subject,
      reason: formData.reason,
      days: formData.days,
      status: 'Pending' // Default status
    };
    setRecords([...records, newRecord]);
    setFormData({ subject: '', date: '', days: '', reason: '' }); // Reset form
  };

  const handleReset = () => {
    setFormData({ subject: '', date: '', days: '', reason: '' });
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-teal-700 mb-6">Absent Application</h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">No of days</label>
              <input
                type="number"
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="No of days"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Reason</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              placeholder="Reason for being absent..."
              rows="3"
              required
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Absence Records Table */}
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Absence records</h2>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Subject</th>
              <th className="py-2 px-4 border">Absence reason</th>
              <th className="py-2 px-4 border">No. of days</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="text-center">
                <td className="border px-4 py-2">{record.id}</td>
                <td className="border px-4 py-2">{record.date}</td>
                <td className="border px-4 py-2">{record.subject}</td>
                <td className="border px-4 py-2">{record.reason}</td>
                <td className="border px-4 py-2">{record.days}</td>
                <td className="border px-4 py-2">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequest;
