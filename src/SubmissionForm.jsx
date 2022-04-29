import axios from "axios";
import React, { useContext } from "react";
import Button from "./Button";
import { string } from "yup";
import { useForm } from "./Myhooks";
import AlertContext from "./AlertContext";

function SubmissionForm(props) {
  const { alert, setAlert, removeAlert } = useContext(AlertContext);
  const submitAssignment = () => {
    axios.put(
      `https://api.codeyogi.io/assignment/${props.ID}/submit`,
      { submissionLink: formData.submissionLink },
      { withCredentials: true }
    );
    setAlert({
      message: "Submission Successful",
      type: "success",
    });
    props.cancel();
    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  const { formData, handleChange, onFormSubmit } = useForm(
    {
      submissionLink: "",
    },
    submitAssignment
  );

  const urlValidator = string().url();
  const validUrl = urlValidator.isValidSync(formData.submissionLink);
  const urlError = validUrl
    ? ""
    : "url is not correct,  please enter valid url !";

  return (
    <form onSubmit={validUrl && onFormSubmit}>
      <div className="px-3 py-5 bg-indigo-200 flex flex-col space-y-2 rounded-md fixed top-20 left-20 right-20">
        <div className="flex justify-between items-center border border-black py-10 px-8">
          <h1 className="py-4 px-5 w-1/3 rounded-md text-gray-700">
            Submission Link
          </h1>
          <div className="flex flex-col space-y-1 w-1/3 justify-center">
            <input
              value={formData.submissionLink}
              onChange={handleChange}
              name="submissionLink"
              type="text"
              placeholder="Submission Link"
              className="py-4 px-5 w-full rounded-md border border-indigo-700 bg-gray-100"
            />
            <div className="h-5 w-full">
              {!validUrl && (
                <span className="text-red-500 font-bold">{urlError}</span>
              )}
            </div>
          </div>
        </div>
        <div>{validUrl && <Button>save</Button>}</div>
      </div>
    </form>
  );
}
export default SubmissionForm;
