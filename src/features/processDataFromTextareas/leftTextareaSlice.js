import { createSlice } from '@reduxjs/toolkit'

const initialState = { dataFromTextareaOne: [], dataFromTextareaTwo: [] }

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    getDataFromTextarea(state, action) {
      const { stateTextareaOne, stateTextareaTwo } = action.payload
      state.dataFromTextareaOne.push(stateTextareaOne)
      state.dataFromTextareaTwo.push(stateTextareaTwo)
    },
  },
})

export const { getDataFromTextarea } = testSlice.actions

export default testSlice.reducer
