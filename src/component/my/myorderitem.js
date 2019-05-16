import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/myorderitem.less'

class MyorderItem extends Component {
  render() {
    let {orderNo,img,price,status} = this.props.item
    let color = {color:''}
    if(status === '交易成功'){
      color = {color:'#32BF88'}
    }
    return(
      <div className = 'activeContent'>
      {/* 上 */}
        <div className = 'activeTopBox'>{orderNo}<img src = '\static\images\删除.png' /> </div>
      {/* 中 */}
        <div>
          <div className = 'activeImgBoxS'>
            <div className = 'activeImgBox'><img src = {img} /></div>
            <div className = 'activeImgBox'><img src = {img} /></div>
            <div className = 'activeImgBox'><img src = {img} /></div>
          <div className = 'price'>
            <div> {price} </div>
            <div className = 'status'  style = {color}> {status} </div>
          </div>
          </div>
        </div>
      {/* 下 */}
        <div className = 'activeBtnBox'>
          {status==='待付款'?<span>立即付款</span>:
          (status==='已取消'?<span>再次购买</span>:
          <><span><Link to = '/my/refund'>申请退款</Link></span><span>查看物流</span><span>再次购买</span></>)}
          
        </div>
      </div>
    )
  }
}


export default MyorderItem