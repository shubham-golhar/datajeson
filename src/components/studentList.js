import React, { useEffect } from "react";
export default function StudentList({ students, xyz, a }) {
  useEffect(() => {
    console.log('asfsafasf', a)
    return () => {
      debugger
    }
  }, []);


  return (
    <div className="container">
      <div className="row">
        {students
          .filter((s) => s.Info)
          .slice(0, 14)
          .map((s) => {
            return (
              <div className="col-3 ">
                <StudentCard student={s} key={s.ID} abc={function (s1) { return xyz(s1) }} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

function StudentCard({ student, abc }) {
  return (
    <div
      className="card mb-5 p-3 mx-3 studentCard"
      style={{ height: "200px" }}
      onClick={() => abc(student)}
    >
      <div className="text-center mb-3" style={{ fontSize: "20px" }}>
        <b>{student.Name}</b>
      </div>
      <div className="studInfo">{student.Info}</div>
    </div>
  );
}
