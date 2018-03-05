import { combineReducers } from 'redux'

import { userScores } from './userScores'

const appReducer = combineReducers({
  userScores
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer