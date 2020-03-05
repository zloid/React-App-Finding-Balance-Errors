import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// import App from 'components/App'
import App from 'components/AppRTK'

// import './index.css'

const store = configureStore({
  reducer: state => ({ initialStateMy: 'hello' }),
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
