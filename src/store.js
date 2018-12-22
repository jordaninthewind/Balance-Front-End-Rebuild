import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [
  applyMiddleware(thunkMiddleware),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []),
]

const store = createStore(
  rootReducer,
  compose(...middleware),
)

export default store
