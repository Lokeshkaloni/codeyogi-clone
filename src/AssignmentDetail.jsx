import { React, useEffect, useState } from "react";
import Button from "./Button";
import { DateTime } from "luxon";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import SubmissionForm from "./SubmissionForm";
import axios from "axios";

function AssignmentDetail() {
  const [showSubmissionForm, setSubmissionForm] = useState(false);
  const data = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const token = axios.get(`https://api.codeyogi.io/assignments/${data.id}`, {
      withCredentials: true,
    });

    token.then((response) => {
      setDetails(response.data);
    });
  }, []);

  return (
    <div className="bg-white h-fit flex flex-col px-8 py-6 w-full mt-14 mx-10 rounded-md">
      <h1 className="font-bold text-xl px-2 py-4">Assignment Details</h1>
      <div className="flex w-full py-3">
        <h1 className="w-1/3 text-gray-500">Title</h1>
        <MDEditor.Markdown source={details.title} />
      </div>
      <div className="flex w-full py-3">
        <h1 className="w-1/3 text-gray-500">due date</h1>
        <h1>
          {DateTime.fromISO(details.due_date).toLocaleString(DateTime.DATE_MED)}
        </h1>
      </div>
      <div className="flex w-full py-3">
        <h1 className="w-1/3 text-gray-500">description</h1>
        <MDEditor.Markdown source={details.description} />
      </div>
      <div className="flex">
        <div className="flex items-center my-3 w-1/2 space-x-1">
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
          <Button
            onClick={() => setSubmissionForm(true)}
            className="text-green-500 font-bold"
          >
            submit
          </Button>
        </div>
        <div className="flex items-center my-3 w-1/2 space-x-1">
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
            // href={details.submissions[0].submission_link}
            className="text-indigo-500 underline font-bold"
          >
            See your submission
          </a>
        </div>
      </div>
      {showSubmissionForm && (
        <SubmissionForm ID={data.id} cancel={() => setSubmissionForm(false)} />
      )}
    </div>
  );
}
export default AssignmentDetail;
