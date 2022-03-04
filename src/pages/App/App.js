import React, { useState, useEffect } from "react";
import StudentIndex from "../studentIndex/studentIndex";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  //Api Call
  useEffect(() => {
    const url = "https://api.hatchways.io/assessment/students";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setStudents(json.students);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Students:</h1>
      <StudentIndex students={students} />
    </>
  );
};

export default App;
