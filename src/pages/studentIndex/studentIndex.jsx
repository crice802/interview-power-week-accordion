import React, { useState } from 'react';

const StudentIndex = ({students}) => {
  const [isAllActive, setIsAllActive] = useState(false)
  return ( 
    <>
    <button
    onClick={() => setIsAllActive(!isAllActive)}
    >Show All</button>
    {students.map(student => 
      <StudentCard

      />
      )}
    </>
   );
}
 
export default StudentIndex;