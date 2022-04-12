import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function MainLayout(){
  return(
    <div className= "flex">
			<div>
				<SideBar />
			</div>
			<div className= "grow p-2 flex bg-gray-100">
        <Outlet/>
			</div>
		</div>
  )
}
export default MainLayout;