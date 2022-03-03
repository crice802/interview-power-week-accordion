import React, { useState } from 'react';
import StudentCard from '../../componets/StudentCard';

const StudentIndex = ({students}) => {
  const [isAllActive, setIsAllActive] = useState(false)
  return ( 
    <>
    <button
    onClick={() => setIsAllActive(!isAllActive)}
    >Show All</button>
    {students.map(student => 
      <StudentCard
        student={student}
        key={student.id}
        isAllActive={isAllActive}
      />
      )}
    </>
   );
}
 
export default StudentIndex;