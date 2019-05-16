import React, {Component} from 'react'
import './orderDetails.less'
import { Modal } from 'antd'
import Shopcart from '../../routes/Shopcart'


class OrderDetails extends Component {

  handleSure = () => {
    this.props.history.push('/confirmGoods')              
  }
  render() {
    console.log(this.props)
    return(
      <div className = 'OrderDetails'>
        {/* 头部背景色 */}
        <div className = 'refundDetailHeader'>
          <div className = 'leftBox'>
            <span>交易成功</span>
            <span>已经成功确认收货~</span>
          </div>
          <div className = 'RightBox'>
            <img src = '/static/images/交易类的.png'/>
          </div>
        </div>
        {/* 交易成功的收货地址 */}
        <div className = 'address'>
          <div className = 'hasaddress'>
            <div className = 'receiver'>
              <span>小鸡壳</span>
              <span>1385642454</span>
            </div>
            <div className = 'detail_address'>
              广州市番禺区大夫山北段362号钟村镇点球电子科 技集团10栋1002
            </div>
          </div>
        </div>
        {/* 订单编号 */}
        <div className = 'SerialNumber'><span>订单编号：</span><span>230102566</span></div>
        {/* 订单产品详情 */}
        <div>
          <Shopcart pay = {'none'} order = {'none'}/>
        </div>
        {/* 商品订单合计 */}
        <div className = 'bottomBox'>
          <div className = 'Acombined'>
            <span>共3件商品 </span>
            <span className = 'two'>实付：￥9999.999</span>
          </div>
          <div className = 'threeBtn'>
            <span>评价</span>
            <span>查看物流</span>
            <span onClick = {this.handleSure}>确认收货</span>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetails