import { createSlice } from '@reduxjs/toolkit'

const app = createSlice({
  name: 'app',
  initialState: {
    status: 200,
    loading: 0
  }
})

const appReducer = app.reducer
export default appReducer
