import { createStore, combineReducers, applyMiddleware } from 'redux';
import CountReducer from './reducers/count';
import PersonReducer from './reducers/person'

//从redux-thunk引入thunk，用于支持异步action  同时要从react中引入applyMiddleware
import thunk from "redux-thunk"

//汇总reducers
const allReducer = combineReducers(
  {
    he: CountReducer,
    rens: PersonReducer
  }
)
export default createStore(allReducer, applyMiddleware(thunk))