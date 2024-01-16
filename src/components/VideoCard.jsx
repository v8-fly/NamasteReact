import React from "react"

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet
  const { viewCount } = statistics

  return (
    <div className="w-72 shadow-lg  cursor-pointer" data-testid={title}>
      <img src={thumbnails.high.url} alt="video" className="rounded-md" />
      <ul>
        <li className="font-semibold">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  )
}

const withHigherOrderVideoCard = (Component) => (props) => {
  if (props.themeDark) {
    return (
      <div className="bg-slate-500">
        <Component {...props} />
      </div>
    )
  }
  return <Component {...props} />
}

const EnhancedVideoCard = withHigherOrderVideoCard(VideoCard)

export default EnhancedVideoCard
