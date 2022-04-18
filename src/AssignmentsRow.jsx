import MDEditor from "@uiw/react-md-editor";
import { React, useState } from "react";
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
      <div className="flex">
        <div className="flex justify-center items-center my-3 w-1/2 space-x-1">
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
          <button
            onClick={() => setSubmissionForm(true)}
            className="text-green-500 font-bold"
          >
            submit
          </button>
        </div>
        <div className="flex justify-center items-center my-3 w-1/2 space-x-1">
          <svg
            className="text-indigo-500"
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="inline"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
          </svg>
          <a
            target="_blank"
            href={assignment.submissions[0].submission_link}
            className="text-indigo-500 underline font-bold"
          >
            See your submission
          </a>
        </div>
      </div>
      {showSubmissionForm && (
        <SubmissionForm
          ID={assignment.id}
          cancel={() => setSubmissionForm(false)}
        />
      )}
    </Card>
  );
}
export default AssignmentsRow;
