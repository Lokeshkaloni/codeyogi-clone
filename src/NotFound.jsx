import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(){
    return(
        <div className= "w-full h-screen bg-black flex flex-col items-center justify-center">
<h1 className= "text-white font-bold text-3xl">This Page Dosen't Exist</h1>
<Link className= "text-indigo-900 font-bold" to= '/Lectures'>go back to Lectures</Link>
        </div>
    )
}
export default NotFound;