import React, {Component} from 'react'
import { connect } from 'react-redux'
import './refundDetail.less'

class RefundDetail extends Component {
  render() {
    return(
      <div className = 'refundDetailBox' >
        <div className = 'refundDetailHeader'>
          <div className = 'leftBox'>
            <span>卖家同意退款申请</span>
            <span>卖家已经同意，请尽快退货剩余6天</span>
          </div>
          <div className = 'RightBox'>
            <img src = '/static/images/物流类的.png'/>
          </div>
        </div>
        <div className = 'chanpinInfo'>
          <div className = 'refundProduct'>
            <div className = 'ProductLeft'>
              <img src = 'http://dummyimage.com/200x200'/>
            </div>
            <div className = 'ProductRight'>
              <div className= 'ProductRightText' >美的（Midea）家用直饮净水器 双出水模式400G无桶大流量纯水机</div>
              <div className= 'ProductRightInfo'>浅棕色 美的净水器A款 <span>x1</span></div>
            </div>
          </div>
        </div>
        <div className = 'whyRefundInfo'>
          <div className = 'item'><div>退款原因：</div><span>七天无理由退款</span></div>
          <div className = 'item'><div>退款金额：</div><span className = 'price'>￥2000.00</span></div>
          <div className = 'item'>
            <div>退款原因：</div>
            <span>尺寸不对，和卖家描述的不相符，有很大 差异，不是很好，差评</span>
          </div>
          <div className = 'item'>
            <div>图片凭证：</div>
            <span>
              <img src="http://dummyimage.com/150x150"/>
              <img src="http://dummyimage.com/150x150"/>
            </span>
          </div>
        </div>
        <div className = 'whyRefundInfo'>
          <div className = 'item'><span>退款信息</span></div>
          <div className = 'item'><div>收件人：</div><span>小蘑菇</span></div>
          <div className = 'item'><div>联系电话：</div><span>158xxxx2262</span></div>
          <div className = 'item'>
            <div>联系地址：</div>
            <span>广东省 广州市 番禺区 汉溪大道东 290号汉溪大道东 290 号</span>
          </div>
        </div>
        <div className = 'BtnSubmit'>
          填写物流单号
        </div>
      </div>
    )
  }
}

export default connect()(RefundDetail)
