import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Badge } from 'antd';
import {Link} from 'react-router-dom'
import './css/myBottomBox.less'

// 商品 租赁 耗材 订单 组件
class MyBottomBox extends Component {
  render() {
    let {item} = this.props
    return(
        <div className = 'myBottomBox'>
          {item.map((item,index)=> {
            return (
              <Link to = {item.hash||'/my'} key = {index}>
                <Badge count={item.status}>
                  <img src = {item.img}  className="head-example"  />
                  <p >{item.text}</p>
                </Badge>
              </Link>)
          })}
        </div>
    )
  }
}

export default connect()(MyBottomBox)

