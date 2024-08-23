import React, { useState } from "react";
import teacherService from "../../Services/teacher.service";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    teacherName: "",
    userName: "",
    password: "",
    teacherEmail: "",
    teacherContact: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      .then((res) => {
        setTeacher({
          teacherName: "",
          userName: "",
          password: "",
          teacherEmail: "",
          teacherContact: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Form Data:", teacher);
    setModalIsOpen(true);
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

  const closeModal = () => {
    setModalIsOpen(false);
    handleReset();
  };

  return (
    <div className="flex-1 mt-20 ml-0 mb-6 flex flex-col">
      <div className="flex-grow bg-gray-100 border-1 border-gray-400 p-4 mt-20 ml-2">
        <h1 className="text-2xl font-semibold mb-4">Add Teacher</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-white p-6 rounded-md shadow-md max-w-2xl mx-auto"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="teacherName"
            >
              Full name
            </label>
            <input
              type="text"
              name="teacherName"
              id="teacherName"
              value={teacher.teacherName}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={teacher.userName}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={teacher.password}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="teacherEmail"
            >
              Email
            </label>
            <input
              type="email"
              name="teacherEmail"
              id="teacherEmail"
              value={teacher.teacherEmail}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="teacherContact"
            >
              Contact
            </label>
            <input
              type="text"
              name="teacherContact"
              id="teacherContact"
              value={teacher.teacherContact}
              onChange={(e) => handleChange(e)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form Submission"
        className="bg-white p-6 rounded-md shadow-md mx-auto my-20 max-w-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-semibold mb-4">
          Form Submitted Successfully!
        </h2>

        <button
          onClick={closeModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AddTeacher;