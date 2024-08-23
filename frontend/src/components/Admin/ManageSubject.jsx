import React, { useState } from 'react';

const ManageSubject = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, subject: 'BICTE', teacher: 'DB' },
    { id: 2, subject: 'BICTE', teacher: 'DB' },
    // Add more initial subjects here
  ]);

  const [subjectForm, setSubjectForm] = useState({
    faculty: '',
    semester: '',
    subjectName: '',
    teacher: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubjectForm({ ...subjectForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubjects([
      ...subjects,
      { id: subjects.length + 1, subject: subjectForm.subjectName, teacher: subjectForm.teacher },
    ]);
    setSubjectForm({ faculty: '', semester: '', subjectName: '', teacher: '' });
  };

  const handleReset = () => {
    setSubjectForm({ faculty: '', semester: '', subjectName: '', teacher: '' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 mt-20 ml-1 mb-6 p-6">
      <h1 className="text-2xl font-bold mb-6 text-teal-800">Add Subject</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Faculty</label>
            <input
              type="text"
              name="faculty"
              value={subjectForm.faculty}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="BICTE"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Semester</label>
            <input
              type="text"
              name="semester"
              value={subjectForm.semester}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject Name</label>
            <input
              type="text"
              name="subjectName"
              value={subjectForm.subjectName}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Teacher</label>
            <input
              type="text"
              name="teacher"
              value={subjectForm.teacher}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Assign Teacher"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Subject List</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">#</th>
                  <th className="py-2 px-4 text-left">Subject</th>
                  <th className="py-2 px-4 text-left">Assigned Teacher</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => (
                  <tr key={subject.id} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{subject.subject}</td>
                    <td className="py-2 px-4">{subject.teacher}</td>
                    <td className="py-2 px-4">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                      </button>
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

export default ManageSubject;
