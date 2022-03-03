import React, { useState, useEffect } from 'react';
import './App.css'



const App = () => {
  const [students, setStudents] = useState('')
  
  useEffect(() => {
    const url = 'https://api.hatchways.io/assessment/students'
    const fetchData = async() => {
      try{
        const response = await fetch(url)
        const json = await response.json()
        console.log(json.students)
        setStudents(json.students)
      }catch(error) {
        console.log('error', error)
      }
    }

    fetchData()
  },[])
  

  
  return ( 
    <>
    <h1>Email: {students.email}</h1>
    </>
   );
}
 
export default App;