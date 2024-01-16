import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { YOUTUBE_API } from "../../utils/constants"
import VideoCard from "./VideoCard"

const VideoContainer = () => {
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    setVideos(json?.items)
  }

  if (!videos) {
    return <p data-testid="laoding">LOADING ....</p>
  }
  return (
    <div className="p-4 flex flex-wrap gap-7" data-testid="video-card-div">
      {videos.map((data) => (
        <Link to={`/watch?v=${data.id}`} key={data.id}>
          <VideoCard info={data} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
