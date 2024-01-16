import { render } from "@testing-library/react"
import { http, HttpResponse } from "msw"
import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const handlers = [
  http.get("*/react-query", () => {
    console.log("interseptor")
    return {}
  }),
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  })

export function renderWithClient(ui) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  return ({ children }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}
