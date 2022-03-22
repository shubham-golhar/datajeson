import "./App.scss";
import Table from "./components/table";
import StudentList from "./components/studentList";
import studData from "./data/student.json";
import { useEffect, useState } from "react";
// import Tble from "./components/tablepra";
// import studData from "./data/student.json";

function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  let [myName, setMyName] = useState("Kaushik")
  const [a, setA] = useState(true)
  const hide = () => {
    setA(false)
    // setMyName("asfasf")

  }
  return (
    <div className="container ">
      <h1 onClick={() => hide()}>{myName}</h1>
      {/* <Table students={studData} /> */}
      {a && <><h1 className="text-center mb-5">Selected student</h1>
        <>{selectedStudent ? <div className="text-center card mb-5">
          <StudentDetails selectedStudent={selectedStudent} />
        </div> : null}</>
        <StudentList students={studData} xyz={(stu) => setSelectedStudent(stu)} a={a} /></>}
    </div>
  );
}

export default App;

function StudentDetails({ selectedStudent }) {
  return (
    <><div>Name: {selectedStudent.Name}</div>

    </>
  )
}
