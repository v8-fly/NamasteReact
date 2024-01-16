import { sum } from "../sum"

test("should calculate sum of 2 positive numbers", () => {
  expect(sum(1, 2)).toBe(3)
})
