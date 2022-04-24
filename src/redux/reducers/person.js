import { ADD_PERSON } from '../constant'
const initState = [{ id: "001", name: "zhangsan", age: 17 }]  //为数组，数组里是一个个对象
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}