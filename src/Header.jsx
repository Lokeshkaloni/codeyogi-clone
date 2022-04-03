import React from "react"
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className= "bg-gray-800 h-16 rounded-md flex w-full items-center justify-between">
            <h1 className= "text-white ml-6 p-2">CODEYOGI | Welcome , Lokesh</h1>
            <Link className="text-white p-2 border hover:bg-gray-600 rounded-md mr-2" to="/Lectures">
					go back to Lectures
				</Link>
        </div>
    )
}
export default Header;