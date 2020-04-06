import React from 'react'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
///////////
import { configureStore } from '@reduxjs/toolkit'
import Delllll from './index'
//own
import rootReducer from 'reducers'
// import { initialState, reducer } from './reducer.js'
// import { initialState } from 'features/processDataFromTextareas/leftTextareaSlice'
 
function renderWithRedux(
  ui,
  {
    store = configureStore({
      reducer: rootReducer,
    }),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}


it('some test', () => {
  const { getByText } = renderWithRedux(<Delllll />)
//   const someText = getByText('hello_w')
//   const blahText = getByText('blah')
  const numbrs = getByText('3.555')
//   expect(someText.textContent).toEqual('hello_w')
//   expect(blahText.textContent).toEqual('blah')
  expect(numbrs.textContent).toEqual('3.555')
})
