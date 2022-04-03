import React from 'react';
import Card from './Card';
function LectureDetail(props) {
	return (
		<Card>
			<div className= "px-6 py-2 mt-4 font-bold">
				<h1> lecture #{props.num}  {props.date}</h1>
				<span className="text-gray-700">duration "03.05.00"</span>
                {props.children}
			</div>
            <a  className= "text-gray-900 flex justify-center" href={props.href}> watch/Download recording</a>
		</Card>
	);
}
export default LectureDetail;
