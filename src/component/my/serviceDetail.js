import React, {Component} from 'react'
import './serviceDetail.less'
import Service from './Service'

class ServiceDetail extends Component {
  render(){
    return(
      <div className = 'serviceDetail'>
        <div className = 'refundDetailHeader'>
          <div className = 'leftBox'>
            <span>待分配服务师傅<div>修改工单</div></span>
            <span>服务工单待分配，在分配前可修改工单内容</span>
          </div>
          <div className = 'RightBox'>
            <img src = '/static/images/安装工.png'/>
          </div>
        </div>
        <div><Service afterSell = {true} /></div>
        <div className = 'serviceDetailMain'>
          <div><span>服务工单编号：</span><span>26665845123432545</span></div>
          <div><span>工单型号：</span><span>新购安装</span></div>
          <div className = 'onlyYou'><span>预约服务时间：</span><span>2018-12-25  16:30</span></div>
          <div><span>联系人：</span><span>小姑凉</span></div>
          <div><span>联系电话：</span><span>1586932541</span></div>
          <div><span>服务地址：</span><span>广东省广州市番禺区汉溪长隆235 号天湖时代E8栋321</span></div>
          <div><span>提交时间：</span><span>2018-08-05  18:20</span></div>
        </div>
      </div>
    )
  }
}

export default ServiceDetail