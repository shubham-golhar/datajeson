import React from "react";
export default function Tble({ std }) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Persona</th>
            <th>Seat</th>
            <th>Stockings</th>
          </tr>
        </thead>
        <tbody>
          {std
            .slice(0, 19)
            .filter((s) => s.Seat > 5)
            .sort((a, b) => a.Seat - b.Seat)
            .map((st, ig) => (
              <tr key={`${st}_${ig}`}>
                <td>{st.Name}</td>
                <td>{st.Persona}</td>
                <td>{st.Seat}</td>
                <td>{st.Stockings}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
<Tble />;
