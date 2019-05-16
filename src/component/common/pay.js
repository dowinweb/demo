import React, { Component } from 'react'
import {Icon, Checkbox } from 'antd'
import Shopcart from '../../routes/Shopcart'
import './pay.less'

class Pay extends Component {
  
  // 滚动条位置设置
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  handleHistory = () => {
    this.props.history.push('/invoice')
  }

  render () {
    return(
      <div className = 'Paywrapper'>
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
          <div className = 'border'></div>
          <i className = 'iiiiii'>></i>
        </div>
        <div className = 'payContent'>
          <div className = 'one'><span>商品合计</span><span>￥119.00</span></div>
          <div className = 'one'><span>运费</span><span>￥0.00</span></div>
          <div><span>配送</span><span>韵达快递</span></div>
          <div>
            <span>发货地</span><span>广州中山</span>
          </div>
          <div className = 'two'>
            <span><Checkbox/><span>积分抵扣-1500</span><span className = 'Yescolor'>(目前积分35260)</span></span>            
            <span><Icon type="right" /></span>
          </div>
          <div className = 'three' onClick = {this.handleHistory}>
            <span>发票开具</span>
            <span>广州芯智云有限公司<Icon type="right" /></span>
          </div>
        </div>
        {/* 导入购物车组件 */}
        <div>
          <Shopcart pay = {'none'}/>
        </div>
      </div>
    )
  }
}

export default Pay