import "./App.scss";
import Table from "./components/table";
import StudentList from "./components/studentList";
import studData from "./data/student.json";
import { useEffect, useState } from "react";
// import Tble from "./components/tablepra";
// import studData from "./data/student.json";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  console.log(selectedStudent);

  useEffect(() => {
    setSelectedStudent("kaushik");
    console.log(selectedStudent);
  }, [selectedStudent]);

  return (
    <div className="container ">
      {/* <Table students={studData} /> */}
      <h1 className="text-center mb-5">Selected student</h1>
      {selectedStudent ? <div className="text-center card mb-5"></div> : null}
      <StudentList students={studData} />
    </div>
  );
}

export default App;
