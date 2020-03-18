import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import AppRTK from 'components/AppRTK'
import rootReducer from './reducers'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore({
  reducer: rootReducer,
})

render(
  <Provider store={store}>
    <AppRTK />
  </Provider>,
  document.getElementById('root')
)

//<Badge pill (.|\n)*?</Badge> - correct regexp for dell all badges pill
// <Badge pill (.|\n)*?<\/ Badge> - regexp for dell all badges
