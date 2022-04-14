import MDEditor from "@uiw/react-md-editor";
import { React, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import SubmissionForm from "./SubmissionForm";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

function AssignmentsRow({ assignment }) {
  const [showSubmissionForm, setSubmissionForm] = useState(false);
  const navigate = useNavigate();

  return (
    <Card>
      <div
        onClick={() => navigate(`/Assignments/${assignment.id}/Details`)}
        className="px-6 py-2 font-bold mt-4 flex flex-col space-y-4"
      >
        <h1 className="flex space-x-4">
          <MDEditor.Markdown source={assignment.title} />
          <span className="text-gray-700">
            (
            {DateTime.fromISO(assignment.updated_at).toLocaleString(
              DateTime.DATE_MED
            )}
            )
          </span>
        </h1>
        <span className="text-red-600">
          due date:
          {DateTime.fromISO(assignment.due_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </span>
      </div>
      <div className="flex justify-center items-center my-3">
        <svg
          className="text-indigo-700 h-8 w-8"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          class="mr-4  w-4 h-4 sm:w-6 sm:h-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
        </svg>
        <Button onClick={() => setSubmissionForm(true)}>submit</Button>
      </div>
      {showSubmissionForm && <SubmissionForm ID={assignment.id} />}
    </Card>
  );
}
export default AssignmentsRow;
