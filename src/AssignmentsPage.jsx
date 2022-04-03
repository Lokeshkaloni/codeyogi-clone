import React from 'react';
import AssignmentDetail from './AssignmentDetail';
function AssignmentsPage() {
	return (
		<div className= "p-4 grow">
			<h1 className= "font-bold p-4 text-2xl">Assignments</h1>
			<div className= "space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2">
				<AssignmentDetail num= "1" title= "deploy codeyogi clone app on netlify" date= "(01-03-2022)" />
				<AssignmentDetail num= "2" title= "create your first full responsive webpage" date= "(15-02-2022)" />
				<AssignmentDetail num= "3" title= "create team member card using tailwindCSS" date= "(20-02-2022)" />
			</div>
		</div>
	);
}
export default AssignmentsPage;
