import React, { Component } from 'react'
import { connect } from 'react-redux';
import { nanoid } from 'nanoid'
import { createPersonAction } from '../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    // 注意此处从value中取出
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age }
    // console.log(name, age);
    this.props.jiaYiRen(personObj)
    this.nameNode.value = "";
    this.ageNode.value = ""
  }
  render() {
    return (
      <div>
        <h2>上方组件的和为{this.props.count}</h2>
        <input type="text" placeholder="请输入姓名" ref={c => this.nameNode = c} />&nbsp;
        <input type="text" placeholder="请输入年龄" ref={c => this.ageNode = c} />&nbsp;
        <button onClick={this.addPerson}>添加</button>&nbsp;
        <ul>
          {
            this.props.yiDuiRen.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    yiDuiRen: state.rens,
    count: state.he  //共享count状态
  }),
  { jiaYiRen: createPersonAction }
)(Person)


