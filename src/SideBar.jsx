import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
	return (
		<div className="bg-gray-800 w-60 p-4 h-screen sticky top-0 flex flex-col items-start space-y-2">
			<h1 className="text-white font-bold text-3xl">CODEYOGI</h1>
				<Link className="text-white hover:bg-gray-700 rounded-md mt-2 w-full px-2" to="/Assignments">
					Assignments
				</Link>
				<Link className="text-white hover:bg-gray-700 rounded-md mt-2 w-full px-2" to="/Lectures">
					Lectures
				</Link>
        <Link className="text-white hover:bg-gray-700 rounded-md mt-2 w-full px-2" to="/Quiz">
					Quiz
				</Link>
				<Link className="text-white hover:bg-gray-700 rounded-md mt-2 w-full px-2" to="/Students">
					Students
				</Link>
                <span className= "grow"></span>
                <Link className="text-white hover:bg-gray-700 rounded-md mt-2 w-full px-2" to="/Profile">
					Profile
				</Link>
		</div>
	);
}
export default SideBar;
