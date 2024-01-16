import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeMenu } from "../../utils/appSlice"
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat"

const WatchPage = () => {
  let [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [dispatch])
  return (
    <div className="flex w-full">
      <div className="px-5">
        <iframe
          width="950"
          height="510"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  )
}

export default WatchPage
