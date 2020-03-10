import { combineReducers } from 'redux'
import leftTextareaReducer from 'features/processDataFromTextareas/leftTextareaSlice'
import moduleName from 'features/test/testSlice'

export default combineReducers({
    leftTextareaReducer,
    moduleName
})



