先写action 再写reducer reducer要用到action里的type和data 
安装redux和react-redux
connect从react-redux花括号导入

constant.js中
export const INCREMENT = 'increment'

action中：
export const createIncreaseAction = (data) => ({ type: INCREMENT, data: data })
export const createDecreaseAction = (data) => ({ type: DECREMENT, data: data })

reducers中：     用来初始化状态和加工
import { INCREMENT, DECREMENT } from '../constant';
const initState = 0;
export default function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}

store.js中
const allReducer = combineReducers(
  {
    he: CountReducer,
    rens: PersonReducer
  }
)

组件中
export default connect(
  state => ({       //state箭头函数
    count: state.he,  //状态  he为store.js中allReducer总状态里的he
    personNumber: state.rens
  }),
  {
    jia: createIncreaseAction,  //映射状态的方法 createIncreaseAction为actions里定义的
    jian: createDecreaseAction
  }
)(Count)    //第二个括号里为UI组件名