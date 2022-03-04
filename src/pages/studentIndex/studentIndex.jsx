import React, { useState } from "react";
import StudentCard from "../../componets/StudentCard";

const StudentIndex = ({ students }) => {
  const [isAllActive, setIsAllActive] = useState(false);

  return (
    <>
      <button onClick={() => setIsAllActive(!isAllActive)}>
        {isAllActive ? "Hide all" : "Show All"}
      </button>
      {/* drilling students thru props to pass to Student Card which is mapped based on the return from api call */}
      {students.map((student) => (
        <StudentCard
          student={student}
          key={student.id}
          // need to drill this down so button works 
          isAllActive={isAllActive}
        />
      ))}
    </>
  );
};

export default StudentIndex;
