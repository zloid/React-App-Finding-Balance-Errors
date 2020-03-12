import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataFromTextareaOne: ['tes1'],
  dataFromTextareaTwo: ['tes2'],
}

const leftTextareaSlice = createSlice({
  name: 'leftTextarea',
  initialState,
  reducers: {
    //get 'data1'; 'data2' from textareas ~> [data1]; [data2];
    /* getDataFromTextarea(state, action) {
      const { stateTextareaOne, stateTextareaTwo } = action.payload
      const arrOne = doGoodArray(stateTextareaOne)
      const arrTwo = doGoodArray(stateTextareaTwo)
      state.dataFromTextareaOne.push(...arrOne)
      state.dataFromTextareaTwo.push(...arrTwo)
    }, */
    getDataFromTextarea: {
      //new payoad after prepare()
      reducer(state, action) {
        const { stateTextareaOne, stateTextareaTwo } = action.payload
        state.dataFromTextareaOne.push(...stateTextareaOne)
        state.dataFromTextareaTwo.push(...stateTextareaTwo)
      },
      //action.payload => next action.payload (transform action.payload after dispatch action, before pass to reducer getDataFromTextarea)
      //get 'data1'; 'data2' from payload ~> out [data1]; [data2];
      prepare({ stateTextareaOne, stateTextareaTwo }) {
        return {
          payload: {
            stateTextareaOne: doGoodArray(stateTextareaOne),
            stateTextareaTwo: doGoodArray(stateTextareaTwo),
          },
        }
      },
    },
  },
})

//in: 'foo\n\n\n\nbar\n777'; out: [foo, bar, 777];
//in: '$$$'; out [];
function doGoodArray(stringFromTextarea) {
  //pass only number & string data
  let mid = stringFromTextarea.split('\n').filter(e => /\w/.test(e) === true)
  return mid.map(e => e.trim())
}

export const { getDataFromTextarea } = leftTextareaSlice.actions

export default leftTextareaSlice.reducer
