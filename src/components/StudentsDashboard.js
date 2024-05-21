import React from "react";
import { useAuth } from "../AuthContext";
import "../styles/StudentsDashboard.css";
import { Link } from "react-router-dom";

const StudentsDashboard = () => {
  const { currentUser, userType } = useAuth();

  if (!currentUser) {
    return <p
      style={{ color: "red", textAlign: "center", marginTop: "20px" }}
    >Loading...</p>; // or handle the case where currentUser is null
  }

  return (
    <div className="student_dashboard">
      <div className="userDetails">
        <h1>Dashboard</h1>
        <p>
          🌟Welcome <span>
          {currentUser.name}
            </span> 
            to <span>PG-Pedia🌟   </span>
        </p>

        <p>
          {/* write description */}
          PG-Pedia is a platform for students to learn about the various postgraduate courses available in India. It also provides information about the entrance exams and
          the colleges offering these courses. The platform is designed to help students make informed decisions about their future.
        </p>
      </div>

      <div className="progressReport">
        <div className="box">
          <span>
            8
          </span>
          <p>
            No. Of Submission
          </p>
        </div>
        <div className="box">
          <span>
            4
          </span>
          <p>
            No. Of Validation
          </p>
        </div>
        <div className="box">
          <span>
            2
          </span>
          <p>
            No. Of Rejections
          </p>
        </div>
      </div>

      <div className="listOfSubbmissionsAndCorrections">
        <div className="listOfSubmissions">
          <h2>Submissions</h2>
          <div className="submission">
            <p>Course: MCA</p>
            <p>College: NIT Trichy</p>
            <p>Submitted on: 12th Oct 2021</p>
            <p>Status: Pending</p>
          </div>
          <div className="submission">
            <p>Course: M.Tech</p>
            <p>College: IIT Bombay</p>
            <p>Submitted on: 15th Oct 2021</p>
            <p>Status: Pending</p>
          </div>
          <div className="submission">
            <p>Course: MBA</p>
            <p>College: IIM Bangalore</p>
            <p>Submitted on: 18th Oct 2021</p>
            <p>Status: Pending</p>
          </div>
        </div>
        <div className="listOfCorrections">
          <h2>Corrections</h2>
          <div className="correction">
            <p>Course: MCA</p>
            <p>College: NIT Trichy</p>
            <p>Submitted on: 12th Oct 2021</p>
            <p>Status: Pending</p>
          </div>
          <div className="correction">
            <p>Course: M.Tech</p>
            <p>College: IIT Bombay</p>
            <p>Submitted on: 15th Oct 2021</p>
            <p>Status: Pending</p>
          </div>
          <div className="correction">
            <p>Course: MBA</p>
            <p>College: IIM Bangalore</p>
            <p>Submitted on: 18th Oct 2021</p>
            <p>Status: Pending</p>
          </div>
        </div>
      </div>

      <div className="submitDessertationButton">
        <h2>
          Submit Dissertation
        </h2>

        <p>
          Click the button below to submit your dissertation.
        </p>

        <Link
          to="/submit-dissertation"
          className="submitDissertation"
        >
          Submit Dissertation
        </Link>
        
      </div>


    </div>
  );
};

export default StudentsDashboard;
