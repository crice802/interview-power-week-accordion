import React, { useState, useEffect } from "react";
import StudentIndex from "../studentIndex/studentIndex";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  //Api Call
  useEffect(() => {
    const url = "https://api.hatchways.io/assessment/students";
    //cant use async directly in useEffect, so declare async function here
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setStudents(json.students);
      } catch (error) {
        console.log("error", error);
      }
    };
    //call function here this allows us to use async (or decalre function outside useEffect)
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
