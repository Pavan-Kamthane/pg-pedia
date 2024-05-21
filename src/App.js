import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import './styles/theme.css'
import Footer from './components/Footer';
import FacultiesDashboard from './components/FacultiesDashboard';
import StudentsDashboard from './components/StudentsDashboard';
import SubmitDissertation from './components/SubmitDissertation';
// import TeacherDashboard from './components/TeacherDashboard';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* public screen */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* private screen */}
          <Route path="/student-dashboard" 
            element={
              <ProtectedRoute element={<StudentsDashboard/>} />
            } 
          />
          <Route path="/faculty-dashboard" 
            element={
              <ProtectedRoute element={<FacultiesDashboard />} />
            } 
          />

          <Route path='/submit-dissertation'
            element={
              <ProtectedRoute element={<SubmitDissertation />} />
            }
          />
          

          
        </Routes>
        <Footer/>
      </AuthProvider>
    </Router>
  );
};

export default App;
