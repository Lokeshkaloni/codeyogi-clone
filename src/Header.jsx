import React from "react"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className= "bg-gray-800 h-16 rounded-md flex w-full items-center justify-between">
            <h1 className= "text-white ml-6 p-2">CODEYOGI | Welcome , Lokesh</h1>

            <div className= "space-x-2">
                <button className= "border px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-300">logout</button>
            <Link className="text-white p-2 border hover:bg-gray-600 rounded-md mr-2" to="/Lectures">
					go back to Lectures
				</Link>
                </div>
        </div>
    )
}
export default Header;