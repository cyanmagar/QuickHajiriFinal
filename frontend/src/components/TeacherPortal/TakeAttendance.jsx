import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { FiCamera } from 'react-icons/fi';

const TakeAttendance = () => {
  const [faculty, setFaculty] = useState('BICTE');
  const [semester, setSemester] = useState('1st');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('2081/02/16');
  const [imageCaptured, setImageCaptured] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [studentsDetected, setStudentsDetected] = useState(false);
  const [message, setMessage] = useState('');
  const [attendanceListVisible, setAttendanceListVisible] = useState(false);
  const [students, setStudents] = useState([
    { rollNo: 1, name: 'Bipana Rana', present: false, absent: false, status: '' },
    { rollNo: 2, name: 'Bishal Ruchal', present: false, absent: false, status: '' },
    { rollNo: 3, name: 'Dhan Bahadur Ale', present: false, absent: false, status: '' },
    { rollNo: 4, name: 'Latika Sunam', present: false, absent: false, status: '' },
  ]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const webcamRef = useRef(null);

  // Map of semesters to subjects
  const subjectsBySemester = {
    '1st': ['Mathematics', 'Physics', 'Chemistry'],
    '2nd': ['Java', 'Data Structures', 'Computer Networks', 'Discrete Mathematics'],
    '3rd': ['Database Systems', 'Operating Systems', 'Software Engineering'],
    '4th': ['Web Development', 'Algorithms', 'Microprocessors'],
    '5th': ['Artificial Intelligence', 'Machine Learning', 'Compiler Design'],
    '6th': ['Computer Graphics', 'Distributed Systems', 'Information Security'],
    '7th': ['Mobile Computing', 'Cloud Computing', 'Ethical Hacking'],
    '8th': ['Project Management', 'Data Science', 'Big Data'],
  };

  // Update subject options based on selected semester
  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSubject(subjectsBySemester[e.target.value][0]);
  };

  const handleTakePhoto = () => {
    setShowCamera(true);
  };

  const handleCapturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setImageCaptured(true);
    setShowCamera(false);
    setMessage('Photo captured successfully!');
    // Simulate student detection (you should replace this with actual detection logic)
    const detected = detectStudents(imageSrc);
    if (!detected) {
      setAttendanceListVisible(true);
      setMessage('Not all students detected, please take attendance manually.');
    } else {
      setStudentsDetected(true);
      setMessage('All students detected.');
    }
  };

  // Dummy detection function (replace with real detection logic)
  const detectStudents = (imageSrc) => {
    // Assume not all students are detected for the sake of this example
    return false;
  };

  const handleAttendanceChange = (rollNo, status) => {
    // Update attendance status for the specific student
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.rollNo === rollNo
          ? { ...student, present: status === 'present', absent: status === 'absent', status: status.charAt(0).toUpperCase() + status.slice(1) }
          : student
      )
    );
  };

  const handleSelectAll = (e) => {
    const selectAll = e.target.checked;
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({
        ...student,
        present: selectAll,
        absent: !selectAll,
        status: selectAll ? 'Present' : 'Absent',
      }))
    );
  };

  const handleSubmitAttendance = () => {
    setShowSuccessModal(true);
    setMessage('Attendance submitted successfully!');
  };

  const handleSubmit = () => {
    if (capturedImage) {
      setMessage('Attendance submitted successfully!');
      // Add logic to submit the captured image and other data to the backend
    } else {
      setMessage('Please take a photo before submitting.');
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setImageCaptured(false);
    setMessage('Please retake the photo.');
  };

  const handleCancel = () => {
    setCapturedImage(null);
    setImageCaptured(false);
    setMessage('Attendance submission canceled.');
  };

  return (
    <div className="flex flex-col flex-grow mt-20 ml-1 mb-6">
      <div className="bg-gray-200 p-6 flex-grow border-gray-400">
        <h1 className="text-2xl font-bold mb-6 text-black-500">Take Attendance</h1>

        {/* Dropdowns for selection */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
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
            onChange={handleSemesterChange}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          >
            {Object.keys(subjectsBySemester).map((sem) => (
              <option key={sem} value={sem}>{sem} Semester</option>
            ))}
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          >
            {subjectsBySemester[semester].map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>

          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mb-4 sm:mb-0 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Webcam and Image Capture Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {imageCaptured ? (
            <img
              src={capturedImage}
              alt="Captured"
              className="w-full sm:w-2/3 mb-4 sm:mb-0"
            />
          ) : (
            showCamera && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="w-full h-full"
                  />
                  <button
                    onClick={handleCapturePhoto}
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4 flex items-center justify-center"
                  >
                    <FiCamera className="mr-2" /> Capture Photo
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <button
            onClick={handleTakePhoto}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-2 flex items-center justify-center"
          >
            <FiCamera className="mr-2" /> Take Photo
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 px-4 rounded mb-2"
          >
            Submit
          </button>
          <button
            onClick={handleRetake}
            className="bg-green-500 text-white py-2 px-4 rounded mb-2"
          >
            Retake
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>

        {/* Display message after actions */}
        {message && (
          <div className="mt-4 p-4 bg-yellow-200 text-yellow-800 rounded">
            {message}
          </div>
        )}

        {/* Manual Attendance List */}
        {attendanceListVisible && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Attendance List</h2>
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/12 px-4 py-2">Select All
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      className="ml-2"
                    />
                  </th>
                  <th className="w-1/12 px-4 py-2">Roll no.</th>
                  <th className="w-3/12 px-4 py-2">Name</th>
                  <th className="w-2/12 px-4 py-2">Present</th>
                  <th className="w-2/12 px-4 py-2">Absent</th>
                  <th className="w-4/12 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.rollNo} className="text-center">
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={student.present}
                        onChange={() => handleAttendanceChange(student.rollNo, 'present')}
                      />
                    </td>
                    <td className="border px-4 py-2">{student.rollNo}</td>
                    <td className="border px-4 py-2">{student.name}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={student.present}
                        onChange={() => handleAttendanceChange(student.rollNo, 'present')}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={student.absent}
                        onChange={() => handleAttendanceChange(student.rollNo, 'absent')}
                      />
                    </td>
                    <td className="border px-4 py-2">{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSubmitAttendance}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Submit Attendance
              </button>
              <button
                onClick={handleSelectAll}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Select All
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{message}</h2>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakeAttendance;
