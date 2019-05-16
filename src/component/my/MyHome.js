import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import '../../static/css/My.less'
import MyBottomBox from './myBottomBox'


class MyHome extends Component {
  render() {
    let {mydata,myorder} = this.props
    return(
    <div>
      <div className = 'myPresonal'>
      <div className = 'myPresonalLeft'>
        <img src = '/static/images/安装工.png' />
        <div className = 'Lefttext'>
          <p>采蘑菇的小姑娘</p>
          <p>3200积分</p>
        </div>
      </div>
      <div className = 'myPresonalRight'>
      <Link to = '/messagelist'><img src = '/static/images/消息.png' /></Link>
      </div>
    </div>
    <div className = 'myOrder'>
      <div className = ' myOrderTop'>
        <span>我的订单</span>
        <span><Link to = '/my/order'>查看全部 ></Link></span>
      </div>
      <MyBottomBox item = {myorder}/>
    </div>
    <div className = 'BottomBox'><MyBottomBox item = {mydata} /> </div>       
  </div>
    )
  }
}

export default connect(state=>({...state.my}))(MyHome)
