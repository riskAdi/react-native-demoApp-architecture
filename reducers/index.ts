
import users from './users'
import register from './register'
import { combineReducers } from 'redux'

export default combineReducers({
    auth:users,
    register:register
  })