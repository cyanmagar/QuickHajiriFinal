import React, { useState, useRef } from 'react';
import studentService from '../../Services/student.service';
import Modal from 'react-modal';
import Webcam from 'react-webcam';

Modal.setAppElement('#root');

const AddStudent = () => {
  const [student, setStudent] = useState({
    studentName: "",
    userName: "",
    password: "",
    email: "",
    studentContact: "",
    rollNo: "",
    batch: "",
    gender: "",
    semester: "",
    faculty: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [webcamOpen, setWebcamOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const webcamRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for contact number
    if (name === 'studentContact') {
      if (/^\d*$/.test(value)) {
        setStudent({
          ...student,
          [name]: value
        });
      }
    }
    // Validation for roll number to ensure only numeric input
    else if (name === 'rollNo') {
      if (/^\d*$/.test(value)) {
        setStudent({
          ...student,
          [name]: value
        });
      }
    }
    // Default case for other fields
    else {
      setStudent({
        ...student,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission, e.g., send form data to an API
    studentService
    .saveStudent(student)
    .then((res)=>{
      setStudent({
        studentName: "",
        userName: "",
        password: "",
        email: "",
        studentContact: "",
        rollNo: "",
        batch: "",
        gender: "",
        semester: "",
        faculty: "",
      });
    }).catch((error)=>{
      console.log(error);
    });
    console.log('Form Data:', student);
    console.log('Captured Image:', imageSrc);
    setModalIsOpen(true);
  };

  const handleReset = () => {
    setStudent({
      studentName: "",
      userName: "",
      password: "",
      email: "",
      studentContact: "",
      rollNo: "",
      batch: "",
      gender: "",
      semester: "",
      faculty: "",
    });
    setImageSrc(null);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    handleReset();
  };

  const openWebcam = () => {
    setWebcamOpen(true);
  };

  const closeWebcam = () => {
    setWebcamOpen(false);
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    closeWebcam();
  };

  return (
   
        <div className="flex-1 mt-20 ml-0 mb-20 flex flex-col">
          <div className="flex-grow bg-gray-100 border-1 border-gray-400 p-4 mt-20 ml-2">
            <h1 className="text-2xl font-semibold mb-4">Add Students</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto grid grid-cols-2 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentName">
                  Full name
                </label>
                <input
                  type="text"
                  name="studentName"
                  id="studentName"
                  value={student.studentName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
                  Roll no
                </label>
                <input
                  type="text"
                  name="rollNo"
                  id="rollNo"
                  value={student.rollNo}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="batch">
                  Batch
                </label>
                <input
                  type="text"
                  name="batch"
                  id="batch"
                  value={student.batch}
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
                  value={student.userName}
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
                  value={student.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={student.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentContact">
                  studentContact
                </label>
                <input
                  type="text"
                  name="studentContact"
                  id="studentContact"
                  value={student.studentContact}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <div className="flex items-center">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={student.gender === 'Male'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={student.gender === 'Female'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={student.gender === 'Other'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
                  Semester
                </label>
                <input
                  type="text"
                  name="semester"
                  id="semester"
                  value={student.semester}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="faculty">
                  Faculty
                </label>
                <input
                  type="text"
                  name="faculty"
                  id="faculty"
                  value={student.faculty}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4 col-span-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
                <button
                  type="button"
                  onClick={openWebcam}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Capture Photo
                </button>
                {imageSrc && (
                  <div className="mt-4">
                    <img src={imageSrc} alt="Captured" className="rounded-md shadow-md" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between col-span-2">
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
        <h2 className="text-xl font-semibold mb-4">Form Submitted Successfully!</h2>
        <button
          onClick={closeModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={webcamOpen}
        onRequestClose={closeWebcam}
        contentLabel="Webcam Capture"
        className="bg-white p-6 rounded-md shadow-md mx-auto my-20 max-w-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-semibold mb-4">Capture Image</h2>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full h-full"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={captureImage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Capture
          </button>
          <button
            onClick={closeWebcam}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddStudent;
