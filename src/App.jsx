import { lazy, Suspense } from "react"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from "../utils/store"
import Body from "./components/Body"
import Head from "./components/Head"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import { useRepoData } from "./useRepoData"
import ReactQueryApp from "./ReactQueryApp"

// import FormChallenge from "./components/FormChallenge"

// Lazy is for dynamic import
const FormChallenge = lazy(() => import("./components/FormChallenge"))

const Shimmer = () => {
  return <h1>This is a Shimmer</h1>
}

const TestQuery = () => {
  return <>TestQuery</>
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/query",
        element: <ReactQueryApp />,
      },

      {
        path: "/challenges",
        element: (
          <Suspense fallback={<Shimmer />}>
            <FormChallenge />
          </Suspense>
        ),
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>

        {/*
        Components we will build
        
        Head
        Body
          Sidebar
            MenuItems
          MainContainer
            ButtonsList
            VideoContainer
              VideoCard
        
        */}
      </div>
    </Provider>
  )
}

export default App
