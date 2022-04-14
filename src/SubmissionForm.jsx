import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";

function SubmissionForm(props) {
  const [submissionLink, setSubmissionLink] = useState("");

  const submitAssignment = () => {
    axios.put(
      `https://api.codeyogi.io/${props.ID}/submit`,
      { submissionLink },
      { withCredentials: true }
    );
  };

  return (
    <div className="px-3 py-5 bg-indigo-200 flex flex-col space-y-2 rounded-md fixed top-20 left-20 right-20">
      <div className="flex justify-between items-center border border-black py-10 px-8">
        <h1 className="py-4 px-5 w-1/3 rounded-md text-gray-700">
          Submission Link
        </h1>
        <input
          value={submissionLink}
          onChange={(event) => {
            setSubmissionLink(event.target.value);
          }}
          type="text"
          placeholder="Submission Link"
          className="py-4 px-5 w-1/3 rounded-md border border-indigo-700 bg-gray-100"
        />
      </div>
      <div className="">
        <Button onClick={() => submitAssignment()}>save</Button>
      </div>
    </div>
  );
}
export default SubmissionForm;
