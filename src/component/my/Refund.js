import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './css/Refund.less'

class AfterSales extends Component {
  render() {
    return(
      <div className = 'refundContentBox'>
        <div className = 'refundProduct'>
          <div className = 'ProductLeft'>
            <img src = 'http://dummyimage.com/200x200'/>
          </div>
          <div className = 'ProductRight'>
            <div className= 'ProductRightText' >美的（Midea）家用直饮净水器 双出水模式400G无桶大流量纯水机</div>
            <div className= 'ProductRightInfo'>浅棕色 美的净水器A款 <span>x1</span></div>
          </div>
        </div>
        <div className = 'whyRefundBox'>
            <div className = 'whyRefund'>退款原因：<span>七天无理由退款</span></div>
            <div className = 'whyRefundRight'>></div>
        </div>
        <div className = 'InfoRefundBox'>
          <h5>上传凭证(最多上传三张)</h5>
          <textarea 
            placeholder="请输入退款原因~" 
            class="textarea" 
            style={{height: "2rem",width:'100%'}}>
          </textarea>
          <div className = 'imgUpdata'>
            <div className = 'imgInfo'>
              <img src = 'http://dummyimage.com/150x150' />
              <img src = '/static/images/删除图片.png' />
            </div>
            <div className = 'imgInfo'>
              <img src = 'http://dummyimage.com/150x150' />
              <img src = '/static/images/删除图片.png' />
            </div>
            <div><img  className = 'camera' src = '/static/images/相机.png' /></div>
          </div>
        </div>
        <div className = 'submitBtn'><Link to = 'refundDetail'>提交申请</Link></div>
      </div>
    )
  }
}

export default connect()(AfterSales)
