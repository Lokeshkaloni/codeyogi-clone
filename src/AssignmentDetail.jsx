import { React , useEffect, useState }from 'react'
import Button from './Button';
import {DateTime} from 'luxon'
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';
import SubmissionForm from './SubmissionForm';

function AssignmentDetail(){
  const data= useParams();
const[details,setDetails]=useState([])
const[showSubmissionForm,setSubmisionForm]= useState(false);

  useEffect( () => {
		const token= axios.get(`https://api.codeyogi.io/assignments/${data.id}`, {withCredentials: true})
		
		token.then((response) => {
			setDetails(response.data)
		});
	}, []);

  return(
    <div className= "bg-white h-fit flex flex-col px-8 py-6 w-full mt-14 mx-10 rounded-md">
        <h1 className='font-bold text-xl px-2 py-4'>Assignment Details</h1>
				<div className='flex w-full py-3'>
          <h1 className='w-1/3 text-gray-500'>Title</h1>
        <MDEditor.Markdown source={details.title}/>
        </div>
				<div className='flex w-full py-3'>
          <h1 className='w-1/3 text-gray-500'>due date</h1>
        <h1>{DateTime.fromISO(details.due_date).toLocaleString(DateTime.DATE_MED)}</h1>
        </div>
        <div className='flex w-full py-3'>
          <h1 className='w-1/3 text-gray-500'>description</h1>
        <MDEditor.Markdown source={details.description}/>
        </div>
        <div className='w-full px-2 py-3'>
        <Button onClick={() =>setSubmisionForm(true)}>submit</Button>
        </div>
        {showSubmissionForm && <SubmissionForm value={submissionLink} onChange={(event)=>{setSubmissionLink(event.target.value)}} onClick= {() =>setSubmisionForm(false)}  />}
		</div>
  )
}
export default AssignmentDetail;