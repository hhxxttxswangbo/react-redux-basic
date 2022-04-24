import React, { Component } from 'react'
//从react-redux中导出connect(加花括号)，用来连接容器组件和UI组件
import { connect } from 'react-redux'
//引入action 不是默认导出用大括号
import { createIncreaseAction, createDecreaseAction } from '../redux/actions/count'

//UI组件
class Count extends Component {
  increaseButton = () => {
    const { value } = this.selectNumber
    this.props.jia(value * 1)
  }
  decreaseButton = () => {
    const { value } = this.selectNumber
    this.props.jian(value * 1)
  }

  render() {
    return (
      <div>
        <h2>
          {/* 子接收父亲传值props */}
          当前求和为：{this.props.count}
        </h2>
        {/* 取出数组的长度 */}
        <h2>下方组件人数为{this.props.personArr.length}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>&nbsp;
        <button onClick={this.increaseButton}>点我加</button>&nbsp;
        <button onClick={this.decreaseButton}>点我减</button>&nbsp;
      </div>
    )
  }
}

//默认导出
export default connect(
  state => ({       //state箭头函数
    count: state.he,  //状态  he为store.js中allReducer总状态里的he
    personArr: state.rens  //共享person状态
  }),
  {
    jia: createIncreaseAction,  //映射状态的方法  createIncreaseAction为actions里定义的createIncreaseAction
    jian: createDecreaseAction
  }
)(Count)


