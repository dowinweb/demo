import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './componentitem.less'
// 上图下文组件
class ComponentItem extends Component {
  render() {
    if(!this.props.item) return''
    let {img, title, text, price} = this.props.item
    return(
      <div className = "ComponentItem">
        <Link to = '/productdetail'>
          <img src = {img} ></img>
          {this.props.flag?null:<span>{title}</span>}
          <div> {text} </div>
          <div className = 'ComponentPrice'> {price}
          {this.props.mypoint?` +${price}积分`:''} </div>
          {this.props.mypoint?
            <div className = 'bottomText'>
              <div>￥898.00</div>
              <div>剩余：254</div>
            </div>
            :''
          }
        </Link>
      </div>
    )
  }
}

export default connect()(ComponentItem)
