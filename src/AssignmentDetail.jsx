import React from 'react'
import Card from './Card'

function AssignmentDetail(props){
  return(
    <Card>
    <div className= "px-6 py-2 font-bold mt-4 flex flex-col">
				<h1> #{props.num}  {props.title}  {props.date}</h1>
				<span className="text-red-600">due date : wed, march 22 2022</span>
        <button className= "font-bold text-green-700 self-center">submit</button>
		</div>
    </Card>
  )
}
export default AssignmentDetail;