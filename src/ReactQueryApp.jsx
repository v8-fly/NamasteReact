import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRepoData } from "./useRepoData"

const Component2 = () => {
  const [show, setShow] = useState(false)
  const { data } = useRepoData()
  console.log("COmponent-2", data)
  return (
    <>
      <button
        onClick={() => {
          setShow((old) => !old)
        }}
      >
        Show Comp 3
      </button>
      {show && <Component3 />}
    </>
  )
}

const Component3 = () => {
  const { data } = useRepoData()
  console.log("star", data)
}

function ReactQueryApp() {
  const { isLoading, error, data, isFetching } = useRepoData()

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <div>{isFetching ? "Updating..." : ""}</div>
      <Component2 />
    </div>
  )
}

export default ReactQueryApp
