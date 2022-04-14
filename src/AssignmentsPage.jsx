import { React, useState, useEffect } from "react";
import AssignmentsRow from "./AssignmentsRow";
import axios from "axios";

function AssignmentsPage() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const token = axios.get("https://api.codeyogi.io/batches/1/assignments", {
      withCredentials: true,
    });

    token.then((response) => {
      setAssignments(response.data);
    });
  }, []);

  return (
    <div className="p-4 grow">
      <h1 className="font-bold p-4 text-2xl">Assignments</h1>
      <div className="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2">
        {assignments.map((a) => (
          <AssignmentsRow assignment={a} key={a.id} />
        ))}
      </div>
    </div>
  );
}
export default AssignmentsPage;
