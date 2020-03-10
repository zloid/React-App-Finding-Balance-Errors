import { createSlice } from '@reduxjs/toolkit'

const initialState = [{dataFromTextareaOne: []}, {dataFromTextareaTwo: []}]

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    testAction(state, action) {
      state.push(action.payload)
    },
  },
})

export const { testAction } = testSlice.actions

export default testSlice.reducer

/* import { createSlice } from '@reduxjs/toolkit'

const leftTextareaSlice = createSlice({
  name: 'firstTwoTextareaLeftside',
  initialState: ['test'],
  reducers: {
    ttt(state) {
      state.push('demo')
     
    },
  },
})

export const { ttt } = leftTextareaSlice.actions


export default leftTextareaSlice.reducer
 */