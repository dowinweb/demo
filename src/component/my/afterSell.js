import React, { Component } from 'react'
import './css/afterSell.less'
import Service from './Service'

class AfterSell extends Component {
  render() {
    return(
      <div className = 'afterSellBox'>
        <Service afterSell = {true} />
        <div className = 'afterSellBoxMain'>
          <div className="title">服务信息</div>
          <div className = 'serviceEach'>
            <div>服务类型</div>
            <div>新购买安装</div>
          </div>
          <div className = 'serviceEach'>
            <div>服务时间</div>
            <div>2018/08/10  18:30</div>
          </div>
          <div className = 'serviceEach'>
            <div>备注信息</div>
            <textarea placeholder = '请输入备注信息~'/>
          </div>
        </div>
        <div className = 'ServiceAddress' >
          <div className = 'Address'>服务地址</div>
          <div className = 'PersonInfo'>
            <span>采菇凉的小蘑菇  18902124575</span>
            <span><img src = '\static\images\editAddress.png' /></span>
          </div>
        <div className = 'AddressBottom'>
          {/* <span className = 'ContentBoxLeft'>默认</span> */}
          <div className = 'ContentBoxRight'>
            海南省海口市美兰区北四环中路283号太平洋广场A3座8楼8003室巴巴啦
          </div>
        </div>
        <div className = 'SubmitBtn' onClick = {()=>{
          this.props.history.push('/serviceDetail')
        }}>提交申请</div>          
        </div>
      </div>
    )
  }
}

export default AfterSell