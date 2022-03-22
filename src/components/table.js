import React from "react";
export default function Table({ students }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Hairstyle</th>
          <th>Seat</th>
        </tr>
      </thead>
      <tbody>
        {students.slice(0, 9).map((student, i) => {
          return (
            <tr key={`${student.ID}_${i}`}>
              <td>{student.Name}</td>
              <td>{student.Hairstyle}</td>
              <td>{student.Seat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

<Table />;
