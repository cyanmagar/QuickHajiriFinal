import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import teacherService from "../../Services/teacher.service";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ManageTeacher = () => {
  const [teacherList, setTeacherList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [teacher, setTeacher] = useState({
    teacherName: "",
    userName: "",
    password: "",
    teacherEmail: "",
    teacherContact: "",
  });

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    teacherService
      .getAllTeacher()
      .then((res) => {
        setTeacherList(res.data);
      })
      .catch((error) => {
        console.error("Error fetching teachers:", error);
      });
  };

  const handleDelete = (id) => {
    teacherService
      .deleteTeacher(id)
      .then(() => {
        fetchTeachers();
      })
      .catch((error) => {
        console.error("Error deleting teacher:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    teacherService
      .saveTeacher(teacher)
      .then(() => {
        setTeacher({
          teacherName: "",
          userName: "",
          password: "",
          teacherEmail: "",
          teacherContact: "",
        });
        setModalIsOpen(false);
        fetchTeachers(); // Refresh the teacher list
      })
      .catch((error) => {
        console.error("Error saving teacher:", error);
      });
  };

  const handleReset = () => {
    setTeacher({
      teacherName: "",
      userName: "",
      password: "",
      teacherEmail: "",
      teacherContact: "",
    });
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    handleReset();
  };

  return (
    <div className={`page-container flex flex-col flex-grow mt-20 ml-1 mb-6 ${modalIsOpen ? 'blur-sm' : ''}`}>
      <div className="flex-grow bg-gray-200 border p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Teachers</h1>
        <div className="flex justify-end mb-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            onClick={openModal}
          >
            Add Teacher
          </button>
        </div>
        <div className="table-container">
          <h3 className="text-lg font-semibold mb-2">Current Teachers</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">Teacher Name</th>
                <th className="py-2 px-4 border-b">Contact</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {teacherList.map((e, num) => (
                <tr key={e.id}>
                  <td className="py-2 px-4 border-b">{num + 1}</td>
                  <td className="py-2 px-4 border-b">{e.teacherName}</td>
                  <td className="py-2 px-4 border-b">{e.teacherContact}</td>
                  <td className="py-2 px-4 border-b">{e.teacherEmail}</td>
                  <td className="py-2 px-4 border-b">{e.userName}</td>
                  <td className="py-2 px-4 border-b">{e.password}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-2"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Teacher"
        className="bg-white p-6 rounded-md shadow-md mx-auto my-20 max-w-lg mb-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-semibold mb-4">Add Teacher</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherName">
              Full name
            </label>
            <input
              type="text"
              name="teacherName"
              id="teacherName"
              value={teacher.teacherName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={teacher.userName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={teacher.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherEmail">
              Email
            </label>
            <input
              type="email"
              name="teacherEmail"
              id="teacherEmail"
              value={teacher.teacherEmail}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherContact">
              Contact
            </label>
            <input
              type="text"
              name="teacherContact"
              id="teacherContact"
              value={teacher.teacherContact}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-400 hover:bg-gray-500 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageTeacher;