import {
  FETCH_USER_SCORES_REQU,
  FETCH_USER_SCORES_SUCC,
  FETCH_USER_SCORES_FAIL
} from '../actions/actionTypes'

export function userScores (state = {}, action) {
  switch (action.type) {
    case FETCH_USER_SCORES_REQU:
      return { ...state, error: null, isFetching: true }

    case FETCH_USER_SCORES_SUCC:
      return { ...state, error: null, isFetching: false, users: action.payload }

    case FETCH_USER_SCORES_FAIL:
      return { ...state, error: action.payload.error }

    default:
      return state
  }
}