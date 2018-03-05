import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import handleTransitions from 'redux-history-transitions'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'

import rootReducer from '../reducers/index'

const history = createHistory()
const enhancer = handleTransitions(history)

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
const createStoreWithMiddleWare = middleware(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleWare(rootReducer, initialState, enhancer)
}