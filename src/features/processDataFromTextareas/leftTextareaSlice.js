import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataFromTextareaOne: [1],
  dataFromTextareaTwo: [2],
  demoDataOne: ['5', '11', '1', '2', '2', '4', '4', '8.5', '9'],
  demoDataTwo: ['1', '2', '2', '3', '4', '8,5', '8.5'],
  deleteAllFlag: false,
}

const leftTextareaSlice = createSlice({
  name: 'leftTextarea',
  initialState,
  reducers: {
    getDataFromTextarea: {
      //new payoad after prepare()
      reducer(state, action) {
        const { stateTextareaOne, stateTextareaTwo } = action.payload
        state.dataFromTextareaOne = stateTextareaOne
        state.dataFromTextareaTwo = stateTextareaTwo
      },
      //in: action.payload; out: next action.payload (transform action.payload after dispatch action, before pass to reducer getDataFromTextarea)
      //in: 'data1'; 'data2' from payload ~> out: [data1]; [data2];
      prepare({ stateTextareaOne, stateTextareaTwo }) {
        return {
          payload: {
            stateTextareaOne: doGoodArray(stateTextareaOne),
            stateTextareaTwo: doGoodArray(stateTextareaTwo),
          },
        }
      },
    },
    deleteAllFlagChange(state) {
      state.deleteAllFlag = true      
    },
    deleteAllFlagFalse(state) {
      state.deleteAllFlag = false      
    },
  },
})
//in: 'foo\n\n\n\nbar\n777'; ~> out: [foo, bar, 777];
//in: '$$$'; ~> out [];
function doGoodArray(stringFromTextarea) {
  //pass only number & string characters
  let mid = stringFromTextarea.split('\n').filter(e => /\w/.test(e) === true)
  return mid.map(e => e.trim())
}

export const {
  getDataFromTextarea,
  deleteAllFlagChange,
  deleteAllFlagFalse,
} = leftTextareaSlice.actions

export default leftTextareaSlice.reducer
