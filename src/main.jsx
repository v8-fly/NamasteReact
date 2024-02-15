import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import ReactQueryApp from "./ReactQueryApp"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryApp /> */}
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
