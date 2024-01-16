import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if (!isMenuOpen) {
    return null
  }

  return (
    <div className="p-5 shadow-lg w-52">
      <h1 className="font-bold">Subscriptons</h1>
      <ul className="cursor-pointer p-2">
        <Link to={"/"}>
          <li className="hover:bg-slate-500">Home</li>
        </Link>
        <Link to={"/challenges"}>
          <li className="hover:bg-slate-500">React Challenges</li>
        </Link>
        <li className="hover:bg-slate-500">Shorts</li>
        <li className="hover:bg-slate-500">Subscription</li>
        <li className="hover:bg-slate-500">Library</li>
      </ul>
      <div className="border-t-2 my-1"></div>
      <h1 className="font-bold">Watch Later</h1>
      <ul className="cursor-pointer p-2">
        <li className="hover:bg-slate-500">Liked Videos</li>
        <li className="hover:bg-slate-500">Subscriptions</li>
        <li className="hover:bg-slate-500">Explore</li>
      </ul>
    </div>
  )
}

export default Sidebar
