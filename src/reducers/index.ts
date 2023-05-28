import { combineReducers } from 'redux'
import merchant from './merchant'

console.log({merchant})

const rootReducer = combineReducers({
  merchant
})

export default rootReducer