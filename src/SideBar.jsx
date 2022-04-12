import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
	return (
		<div className="bg-gray-800 w-60 p-4 h-screen sticky top-0 flex flex-col items-start space-y-2">
			<h1 className="text-white font-bold text-3xl">CODEYOGI</h1>
			<div className='flex items-center hover:bg-gray-700 rounded-md mt-2 w-full px-2 space-x-2'>
			<svg className='h-7 w-7 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mr-3 flex-shrink-0 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>
				<Link className="text-white " to="/Assignments">
					Assignments
				</Link>
				</div>
				<div className='flex items-center hover:bg-gray-700 rounded-md mt-2 w-full px-2 space-x-2'>
				<svg className='h-7 w-7 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" class="mr-3 flex-shrink-0 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M120.998 40.998v37.943C136.22 89.471 146 109.278 146 131.001c0 13.71-3.901 26.65-10.598 36.985 3.465 1.35 7.106 2.85 10.15 4.172l122.352-22.783 5.918 54.842-111.748 23.219c-.862 16.261-2.45 32.262-5.289 51.566h336.217V40.998zM96 88.998c-16.595 0-32.002 17.747-32.002 42.004 0 24.257 15.407 42.002 32.002 42.002 16.595 0 32.002-17.745 32.002-42.002S112.595 88.998 96 88.998zm156.096 81.629l-108.592 20.22c-14.24-5.602-4.956-3.035-21.469-8.517-7.476 5.469-16.33 8.672-26.035 8.672-8.6 0-16.53-2.523-23.428-6.9-8.59 3.564-17.655 8.09-25.736 12.654-12.992 7.338-23.722 13.211-27.838 16.033v130.213h20.004V232h17.996v263.002h30.004V326h17.996v169.002h26.004v-171.84l.154-.824c9.514-50.64 12.588-77.384 13.461-109.656l109.56-22.766zm-98.153 126.375c-.952 5.682-1.991 11.64-3.146 17.996H478v-17.996zM208 344.998c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm112 0c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm112 0c-16.595 0-32.002 17.747-32.002 42.004 0 18.198 8.67 32.73 20.01 38.855 3.599-1.662 7.482-2.706 11.68-2.851 4.633-.16 8.98.767 13.052 2.42 10.968-6.352 19.262-20.63 19.262-38.424 0-24.257-15.407-42.004-32.002-42.004zm-223.688 95.996c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.053-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.052-8.34zm112 0c-3.844.133-8.907 2.93-14.3 8.785-5.394 5.855-10.696 14.25-15.125 22.76-4.226 8.12-7.609 16.16-10.06 22.463h85.339c-3.04-6.436-7.138-14.549-12.133-22.711-5.298-8.658-11.511-17.138-17.668-22.957-6.157-5.819-11.8-8.487-16.052-8.34z"></path></svg>
				<Link className="text-white " to="/Lectures">
					Lectures
				</Link>
				</div>
				<div className='flex items-center hover:bg-gray-700 rounded-md mt-2 w-full px-2 space-x-2'>
				<svg className='h-7 w-7 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mr-3 flex-shrink-0 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.6.58 1.73.01 2.57-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66zm-.56 3.79c0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04 0 .58-.44 1.05-1.04 1.05-.58 0-1.05-.47-1.05-1.05z"></path></svg>
		<Link className="text-white " to="/Quiz">
					Quiz
				</Link>
				</div>
				<div className='flex items-center hover:bg-gray-700 rounded-md mt-2 w-full px-2 space-x-2'>
				<Link className="text-white " to="/Students">
					Students
				</Link>
				</div>
                <span className= "grow"></span>
                <div className='flex items-center hover:bg-gray-700 rounded-md mt-2 w-full px-2 space-x-2'>
				<svg className='h-7 w-7 text-white' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mr-3 flex-shrink-0 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" fill="currentColor"></path></svg>
					<Link className="text-white" to="/Profile">
					Profile
				</Link>
				</div>
				<div className='flex items-center hover:bg-gray-700 rounded-md mt-2 w-full px-2 space-x-2'>
				<svg className='h-7 w-7 text-white' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="mr-3 flex-shrink-0 h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
				<Link className="text-white " to="/Logout">
					Logout
				</Link>
				</div>
		</div>
	);
}
export default SideBar;
