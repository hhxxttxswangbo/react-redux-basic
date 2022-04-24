import { createStore, combineReducers } from 'redux';
import CountReducer from './reducers/count';
import PersonReducer from './reducers/person'

//汇总reducers
const allReducer = combineReducers(
  {
    he: CountReducer,
    rens: PersonReducer
  }
)
export default createStore(allReducer)