import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataFromTextareaOne: ['tes1'],
  dataFromTextareaTwo: ['tes2'],
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    getDataFromTextarea(state, action) {
      const { stateTextareaOne, stateTextareaTwo } = action.payload
      //in: 'foo\n\n\n\nbar\n777'; out: [foo, bar, 777];
      const doGoodArray = stringFromTextarea => {
        //pass only number & string data
        let mid = stringFromTextarea
          .split('\n')
          .filter(e => /\w/.test(e) === true)
        return mid.map(e => e.trim())
      }
      const arrOne = doGoodArray(stateTextareaOne)
      const arrTwo = doGoodArray(stateTextareaTwo)
      state.dataFromTextareaOne.push(...arrOne)
      state.dataFromTextareaTwo.push(...arrTwo)
    },
  },
})

export const { getDataFromTextarea } = testSlice.actions

export default testSlice.reducer
