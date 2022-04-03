import React from 'react';
import LectureDetail from './LectureDetail';

function LecturesPage(props) {
	return (
     <div className= "p-4 grow"> 
          <h1 className= "font-bold p-4 text-2xl">Lectures</h1>
		  <div className= "space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2">
			   <LectureDetail num= "1" date= "(01/03/22)" href={"https://google.com"} ><ul>
                    <li>Basic HTML CSS</li>
                </ul></LectureDetail>
			   <LectureDetail num= "2" date= "(02/03/22)" href={"https://google.com"}><ul>
               <li>flex-grow, flex-shrink,</li>
               <li>CSS specificity</li>
               <li>utility classes</li>
           </ul></LectureDetail>
			   <LectureDetail num= "3" date= "(03/03/22)" href={"https://google.com"} ><ul>
               <li>introduction to tailwindCSS</li>
               <li>tailwind playground</li>
           </ul></LectureDetail>
		  </div>
     </div>
	);
}
export default LecturesPage;
