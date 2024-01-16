import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import VideoContainer from "../VideoContainer"
import { Provider } from "react-redux"
import store from "../../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { VideoData } from "../../mocks/dummyVideoData"

// const getVideos = async () => {
//     const data = await fetch(YOUTUBE_API)
//     const json = await data.json()
//     setVideos(json?.items)
//   }

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(VideoData),
  })
})

test("should load VideoContainer on rendering VideoContainer", () => {
  // load Header
  const VideoContainerComponent = render(
    <StaticRouter>
      <Provider store={store}>
        <VideoContainer />
      </Provider>
    </StaticRouter>
  )
  const Loading = VideoContainerComponent.getByTestId("laoding")
  expect(Loading).toBeInTheDocument()
})

test("should VideoContainer on rendering VideoContainer", () => {
  // load Header
  const VideoContainerComponent = render(
    <StaticRouter>
      <Provider store={store}>
        <VideoContainer />
      </Provider>
    </StaticRouter>
  )
  const Loading = VideoContainerComponent.getByTestId("laoding")
  expect(Loading).toBeInTheDocument()
})

test("should Render actual data of Youtube APi", async () => {
  // load Header
  const VideoContainerComponent = render(
    <StaticRouter>
      <Provider store={store}>
        <VideoContainer />
      </Provider>
    </StaticRouter>
  )
  await waitFor(() =>
    expect(VideoContainerComponent.getByTestId("video-card-div"))
  )
  const videoCard = screen.getByTestId(
    "MY FIRST DAY ON POLICE DUTY | CONTRABAND POLICE GAMEPLAY #1"
  )
  expect(videoCard).toBeInTheDocument()
})
