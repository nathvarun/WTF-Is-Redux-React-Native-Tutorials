import { createStore, applyMiddleware } from 'redux'
import quoteReducer from './reducers/quotesReducer'
import thunk from 'redux-thunk'

const store = createStore(quoteReducer, applyMiddleware(thunk))

export default store