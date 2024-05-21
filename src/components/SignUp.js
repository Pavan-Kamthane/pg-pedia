import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('student'); // Default to 'student'
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading state to true when sign-up process starts
      await signUp(email, password, name, userType);
      // Navigate to the dashboard after successful sign up
      // navigate('/');
      if(
        userType === 'student'
      ){
        navigate('/student-dashboard', userType);
      }
      else{
        navigate('/faculty-dashboard',userType);
      }
    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.error("Failed to sign up", error);
    } finally {
      setLoading(false); // Set loading state to false after sign-up process completes
    }
  };

  return (
    <div className='signup'>
      <div className="content">
        <h1>Welcome to <span>PG-Pedia</span></h1>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <select 
            value={userType} 
            onChange={(e) => setUserType(e.target.value)} 
            required
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Already have an account? <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
