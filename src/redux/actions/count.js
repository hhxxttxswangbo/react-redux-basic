import { INCREMENT, DECREMENT } from '../constant'

//该组件生成action对象 接收data参数  返回type（值为zreducers中type类型）和data
export const createIncreaseAction = (data) => ({ type: INCREMENT, data: data })
export const createDecreaseAction = (data) => ({ type: DECREMENT, data: data })

//异步action action的值为函数  接收两个参数
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncreaseAction(data))
    }, time)
  }
}
