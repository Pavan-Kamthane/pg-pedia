import React from "react";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import "../styles/facultyDashboard.css";

const FacultyDashboard = () => {
  const { currentUser, userType } = useAuth();

  if (!currentUser) {
    return <p>Loading...</p>; // or handle the case where currentUser is null
  }

  return (
  
      <div className="facultyDashboard">
        <div className="userDetails">
          <h1>Dashboard</h1>
          <p>
            {/* welcome message to faculty */}
            🌟Welcome,<span>{currentUser.name}!</span> to <span>PG-Pedia</span>
            🌟
            <br />
          </p>
        </div>

        <div className="numberMenteesAndRequestsPending">
          <div className="menteesBox">
            <h2>Mentees</h2>
            <p>0</p>
            <Link 
              to={"/mentees"}
            >
              View Mentees
            </Link>
          </div>
          <div className="requestsPending">
            <h2>Requests Pending</h2>
            <p>0</p>
            <Link>
              View Requests
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default FacultyDashboard;
