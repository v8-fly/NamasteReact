import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // console.log("cacheResults", ...state, ...action)
      state = Object.assign(state, action.payload)
    },
  },
})

export const { cacheResults } = searchSlice.actions

export default searchSlice.reducer

/**
 * {
 *  i :     ["iphone"]
 *  ip :    ["iphone" , "iphone-Pro"]
 *  ipho :  ["iphone" , "iphone-Pro" , "iphone-Pro-max"]
 * }
 */
