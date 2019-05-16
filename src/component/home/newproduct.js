import React, {Component} from 'react'
import { connect } from 'react-redux'
import './newproduct.less'
// 限时抢购组件
class NewList extends Component {
  render() {
    let {newlist} =  this.props
    return(<>
      {newlist.map((item,index) => {
          return (
            <div className = 'newList' key = {index}>
            <div className = 'newItem' >
              <a href = 'javascript:;'><img src = {item.img} /></a>
              <span>{item.text}</span>
            </div>
          </div>  
          )
        })
      }
    </>)
  }
}

export default connect(state => ({...state.home}))(NewList)
