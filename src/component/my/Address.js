import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'antd'
import './css/Address.less'

class Address extends Component {
  render() {
    return(
      <div className = "AddressContentBox">
        <div className = 'AddressContentImg'></div>
        <div className = 'AddressContentItem' >
          <div className = 'PersonInfo'>
            <span>采菇凉的小蘑菇  18902124575</span>
            <span><img src = '\static\images\editAddress.png' /></span>
          </div>
        <div className = 'AddressBottom'>
          <span className = 'ContentBoxLeft'>默认</span>
          <div className = 'ContentBoxRight'>
            海南省海口市美兰区北四环中路283号太平洋广场A3座8楼8003室巴巴啦
          </div>
        </div>          
        </div>
        <div className = 'AddressContentItem' >
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
        </div>
        <div className = 'AddressContentItem' >
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
        </div>
        <div className = 'AddressBtn'><Button type="primary" block>新增地址</Button></div>
      </div>
    )
  }
}

export default connect()(Address)
