import React, { useState } from "react";

const StudentCard = ({ isAllActive, student }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div key={student.id} className="accordian">
        <div className="accordian-item">
          <div
            className="accordian-title"
            onClick={() => setIsActive(!isActive)}
          >
            <img width="200px" src={student.pic} alt={student.firstName} />
            {student.firstName} {student.lastName}
          </div>
          <div>{isAllActive || isActive ? "-" : "+"}</div>
        </div>
        {(isAllActive || isActive) && (
          <div className="accordion-content">
            <div>
              <strong>Email:</strong> <em>{student.email}</em>
            </div>
            <div>
              <strong>Company:</strong> <em>{student.company}</em>
            </div>
            <div>
              <strong>City:</strong> <em>{student.city}</em>
            </div>
            <div>
              <strong>Skill:</strong> <em>{student.skill}</em>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
