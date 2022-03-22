import React from "react";

export default function StudentList({ students }) {
  return (
    <div className="container">
      <div className="row">
        {students
          .filter((s) => s.Info)
          .slice(0, 14)
          .map((s) => {
            return (
              <div className="col-3 ">
                <StudentCard student={s} key={s.ID} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

function StudentCard({ student }) {
  function studentCardClick(s) {
    console.log("sdfsdf", s.Name);
  }
  return (
    <div
      className="card mb-5 p-3 mx-3 studentCard"
      style={{ height: "200px" }}
      onClick={() => studentCardClick(student)}
    >
      <div className="text-center mb-3" style={{ fontSize: "20px" }}>
        <b>{student.Name}</b>
      </div>
      <div className="studInfo">{student.Info}</div>
    </div>
  );
}
