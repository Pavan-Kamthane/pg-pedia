import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/mentees.css";

const Mentees = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "students"));
        const studentsList = querySnapshot.docs.map((doc) => doc.data());
        setStudents(studentsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching students: ", error);
        setError("Failed to fetch students. Please try again.");
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="mentees">
      <h1>All Mentees</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentees;
