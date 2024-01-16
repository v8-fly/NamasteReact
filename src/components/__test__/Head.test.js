import { render, fireEvent, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import Head from "../Head"
import { Provider } from "react-redux"
import store from "../../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { SEARCH_API_MOCK_DATA } from "../../mocks/searchApi"

jest.useFakeTimers()
jest.spyOn(global, "setTimeout")
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(SEARCH_API_MOCK_DATA),
  })
})

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(SEARCH_API_MOCK_DATA),
//   })
// })

// beforeEach(() => {
//   fetch.mockClear()
// })

test("Logo should load on rendering Header", async () => {
  // load Header
  const head = render(
    <StaticRouter>
      <Provider store={store}>
        <Head />
      </Provider>
    </StaticRouter>
  )
  const logo = head.getByTestId("logo")
  fireEvent.click(screen.getByTestId("logo"))
  expect(logo.src).toBe("http://localhost/dummy.png")
  const input = head.getByRole("textbox")
  expect(input).toBeInTheDocument()
  await waitFor(() =>
    fireEvent.change(input, {
      target: {
        value: "Sandeep Maheshwari",
      },
    })
  )
  fireEvent.focus(input)
  // jest.advanceTimersByTime(400)
  // fireEvent.focus(input)
  // jest.runAllTimers()
  await waitFor(() => expect(head.getByTestId("suggestions-div")))
  // screen.debug()
  // screen.debug()
  // check if logo is loaded
})
