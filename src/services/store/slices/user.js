import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
    },
    setToken: (state, action) => {
      state.token = action.payload.token
    },
    setAll: (state, action) => {
      console.log({ state, action })
      state.user = action.payload.user
      state.token = action.payload.token
    }
  }
})

export const { setUser, setToken, setAll } = userSlice.actions

export default userSlice.reducer
