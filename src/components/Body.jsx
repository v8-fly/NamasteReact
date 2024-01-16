import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Outlet />
      {/* <MainContainer></MainContainer> */}
      {/* <WatchPage></WatchPage> */}
    </div>
  )
}

export default Body
