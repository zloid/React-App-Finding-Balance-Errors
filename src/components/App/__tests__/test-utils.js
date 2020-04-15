// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState as reducerInitialState, reducer } from './reducer'
/* 
function render(
  ui,
  {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
} */
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from 'reducers'
function render(
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

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }