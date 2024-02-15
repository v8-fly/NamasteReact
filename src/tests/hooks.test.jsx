import { rest } from "msw"
import * as React from "react"
import { renderHook, waitFor } from "@testing-library/react"
import { server } from "../setupTests"
import { createWrapper } from "./utils"
import { useRepoData } from "../useRepoData"
import * as axios from "axios"

jest.mock("axios")

axios.get.mockImplementation(() => {
  console.log("mockImplementation")
  return Promise.resolve({
    status: 200,
    data: {
      name: "mocked-react-query",
    },
  })
})

describe("query hook", () => {
  test("successful query hook", async () => {
    const { result } = renderHook(() => useRepoData(), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    console.log("TESTING", result.current.data)

    expect(result.current.data?.name).toBe("mocked-react-query")
  })

  // test("failure query hook", async () => {
  //   server.use(
  //     rest.get("*", (req, res, ctx) => {
  //       return res(ctx.status(500))
  //     })
  //   )

  //   const { result } = renderHook(() => useRepoData(), {
  //     wrapper: createWrapper(),
  //   })

  //   await waitFor(() => expect(result.current.isError).toBe(true))

  //   expect(result.current.error).toBeDefined()
  // })
})
