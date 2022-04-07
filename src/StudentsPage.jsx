import React from "react"
import StudentDetail from "./StudentDetail";

function StudentsPage(){

    return(
        
          <div className= "p-4 grow">
				<StudentDetail></StudentDetail>
                <StudentDetail></StudentDetail>
                <StudentDetail></StudentDetail>
          </div>
    
    )
}
export default StudentsPage;