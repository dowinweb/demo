import React, {Component} from 'react'
import { connect } from 'react-redux'
import action from '../../../store/action/index'
import './messageDetail.less'

class MessageDetail extends Component {
  render() {
    let {location,messagelistdata} = this.props
    let id =  parseFloat(location.search.substring(1))
    let item =  messagelistdata.find(item=>item.id === id)
    let {data,title,text} = item
    return(
      <div className = 'messageDetailBox'>
        <div className = 'listItemBoxTop'>{data}</div>
        <div className = 'listItemBoxBottom'>
          <ul className = 'listItemBottomLeft'>
            <li><img src = {'/static/images/消息小红点.png'} /> {title} </li>
            <li> {text} </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state=>({...state.home}),action.home)(MessageDetail)
