import React, { Component } from 'react'
import './paySuccess.less'

class PaySuccess extends Component {
  render() {
    return(
      <div className = 'PaySuccessMoney'>
        <div className='headerBackground'>
          <img src = '/static/images/paySuccessbackground.png'/>
          <div className = 'payText'>
            <div><img src = '/static/images/paySuccess.png'/></div>
            <div>支付成功</div>
            <div>￥<span>9999.999</span></div>
          </div>
        </div>
        <div className = 'paymain'>
          <div onClick = {()=>this.props.history.push('/')}>返回首页</div>
          <div onClick = {()=>this.props.history.push('/orderDetails')}>查看订单</div>
        </div>
        <div className = 'footertext'>
          <div className = 'titleBox'>您购买的商品可以享受上门安装服务</div>
          <div>如果您现在暂时无法确定 安装时间，</div>
          <div>可稍后在订单列表中找回此订单申请安装</div>
          <div className = 'BtnSub'>申请安装服务</div>
        </div>
      </div>
    )
  }
}

export default PaySuccess