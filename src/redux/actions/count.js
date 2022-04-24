import { INCREMENT, DECREMENT } from '../constant'

//该组件生成action对象 接收data参数  返回type（值为zreducers中type类型）和data
export const createIncreaseAction = (data) => ({ type: INCREMENT, data: data })
export const createDecreaseAction = (data) => ({ type: DECREMENT, data: data })
