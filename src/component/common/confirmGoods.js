import React, { Component } from 'react'
import './confirmGoods.less'

class ConfirmGoods extends Component {
  render() {
    return(
      <div className = 'ConfirmGoods'>
        <div className='headerBackground'>
          <div className = 'payText'>
            <div><img src = '/static/images/购物车选中.png'/></div>
            <div>确认收货成功</div>
            <div className = 'paymain'>
              <div className = 'oooo'>返回首页</div>
              <div className = 'wwww' onClick = {()=> {
                this.props.history.push('/evaluation')
              }}>立即评价</div>
            </div>
          </div>
        </div>
        <div className = 'footertext'>
          <div className = 'titleBox'>积分奖励</div>
          <div>本次交易奖励300积分</div>
        </div>
      </div>
    )
  }
}

export default ConfirmGoods