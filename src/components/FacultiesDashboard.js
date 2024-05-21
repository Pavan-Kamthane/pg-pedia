import React from 'react';
import { useAuth } from '../AuthContext';

const FacultyDashboard = () => {
  const { currentUser, userType } = useAuth();

  if (!currentUser) {
    return <p>Loading...</p>; // or handle the case where currentUser is null
  }

  return (
    <div>
      <h1>Faculty Dashboard</h1>
      {userType && <p>User Type: {userType}</p>}
    </div>
  );
};

export default FacultyDashboard;
