import React, {Component} from 'react'
import { connect } from 'react-redux'
import './list.less'

// 单个消息组件
class List extends Component {
  render() {
    let {data,title,text} = this.props.item
    return(
      <div className = 'listItemBox'>
        <div className = 'listItemBoxTop'>{data}</div>
        <div className = 'listItemBoxBottom'>
          <ul className = 'listItemBottomLeft'>
            <li> {title} </li>
            <li><img src = {'/static/images/消息小红点.png'} /> {text} </li>
          </ul>
          <div  className = 'listItemBottomRight'>></div>
        </div>
      </div>
    )
  }
}

export default connect()(List)
