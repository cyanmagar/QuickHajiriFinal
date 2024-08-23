import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import Login from './components/LoginPage/Login';
import Services from './components/LoginPage/Services';
import About from './components/LoginPage/About';

import Layout from './components/Admin/Layout';
import ManageTeacher from './components/Admin/ManageTeacher';
import AddTeacher from './components/Admin/AddTeacher';
import ManageStudent from './components/Admin/ManageStudent';
import AddStudent from './components/Admin/AddStudent';
import ManageFaculty from './components/Admin/ManageFaculty';
import UpgradeSemester from './components/Admin/UpgradeSemester';
import ManageSubject from './components/Admin/ManageSubject';
import ManageAttendance from './components/Admin/ManageAttendance';
import LogOut from './components/Admin/LogOut';
import Tlayout from './components/TeacherPortal/Tlayout';
import TeacherDashboard from './components/TeacherPortal/TeacherDashboard';
import ViewRequest from './components/TeacherPortal/ViewRequest';
import TakeAttendance from './components/TeacherPortal/TakeAttendance';
import AttendanceRecords from './components/TeacherPortal/AttendanceRecords';
import Slayout from './components/StudentPortal/Slayout';
import StudentDashboard from './components/StudentPortal/StudentDashboard';
//import LeaveRequest from './components/StudentPortal/LeaveRequest';
//import ViewAttendance from './components/StudentPortal/StudentDashboard';
const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        {/* <Route path="/components/admin/dashboard" element={<Dashboard />} /> */}
        <Route path='/admin' element={<Layout />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='manage-teacher' element={<ManageTeacher />} />
          <Route path='add-teacher' element={<AddTeacher />} /> 
          <Route path ='manage-student' element={<ManageStudent />} /> 
          <Route path ='add-student' element={<AddStudent />} />
          <Route path='manage-faculty' element={<ManageFaculty />} />
          <Route path ='upgrade-semester' element={<UpgradeSemester />} />
          <Route path='manage-subject' element={<ManageSubject />} />
          <Route path='manage-attendance' element={<ManageAttendance />} />

          </Route>
          
          <Route path='/teacher' element={<Tlayout />} >
          <Route path='dashboard' element={<TeacherDashboard />} />
          <Route path='view-request' element={<ViewRequest />} />
          <Route path='take-attendance' element={<TakeAttendance />} />
          <Route path='attendance-records' element={<AttendanceRecords />} />
          
          </Route>

          <Route path='/student' element={<Slayout />} >
          <Route path='dashboard' element={<StudentDashboard />} />
         
          </Route>
          <Route path='/logout' element={<LogOut />} />
        
      </Routes>
    </Router>
  );
};

export default App;
