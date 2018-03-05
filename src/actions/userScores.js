import * as actionTypes from './actionTypes'
// import checkResponseStatus from '../tools/checkResponseStatus'


const fetchUserScoresRequested = () => {
  return { type: actionTypes.FETCH_USER_SCORES_REQU }
}

const fetchUserScoresSuccess = (result) => {
  return { type: actionTypes.FETCH_USER_SCORES_SUCC, payload: result}
}

const fetchUserScoresFail = (error) => {
  return { type: actionTypes.FETCH_USER_SCORES_FAIL, payload: {error}}
}

export function fetchUserScores () {
  // const url = `https://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/scores`
  // return window.fetch(url)
  //   .then(checkResponseStatus)
  //   .then(response => response.json())
  //   .then(result => {
  //     dispatch(fetchUserScoresSuccess(result))
  //   })
  //   .catch(err => {
  //     dispatch(fetchUserScoresFail(err.message))
  //   })
  return (dispatch, getState) => {
    dispatch(fetchUserScoresRequested())
    try {
      const result = [ {user: 1, score: 1}, { user: 2, score: 2}, { user: 3, score: 3} ]
      dispatch(fetchUserScoresSuccess(result))
      return result
    }
    catch (err) {
      dispatch(fetchUserScoresFail(err.message))
    }
  }
}
