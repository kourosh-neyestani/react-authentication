import { combineReducers } from 'redux'
import { registrationReducer } from './registration'

const reducers = combineReducers({
    registration: registrationReducer
})

export default reducers