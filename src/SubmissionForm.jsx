import React from "react"
import Button from "./Button";

function SubmissionForm(props){
    return(
        <div className="px-3 py-5 bg-gray-400 flex flex-col space-y-2 rounded-md fixed top-20 left-20 right-20">
        <div className="flex justify-between items-center border border-black py-10 px-8">
            <h1 className="py-4 px-5 w-1/3 rounded-md text-gray-700">Submission Link</h1>
<input value={props.value} onChange={props.onChange} type="text" placeholder="Submission Link" className="py-4 px-5 w-1/3 rounded-md border border-indigo-700 bg-gray-100" /> 
        </div>
            <div className="">
                <Button onClick={props.onClick}>save</Button>
            </div>
        </div>
    )
}
export default SubmissionForm;