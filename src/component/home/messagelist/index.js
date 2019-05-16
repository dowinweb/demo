import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.less'
import List from './list/list'
// 消息列表组件
class MessageList extends Component {
  render() {
    let {messagelistdata} = this.props
    return(
      <div className = 'messageListBox' >
        {
          // 给消息列表绑定数据
          messagelistdata.map((item,index) => {
            return <Link to = {`/messagedetail?${index}`} 
            key = {index}><List item = {item} /></Link>
          })
        }        
      </div>
    )
  }
}

export default connect(state=>({...state.home}))(MessageList)
