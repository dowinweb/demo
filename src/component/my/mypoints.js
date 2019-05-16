import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Icon} from 'antd'
import './css/mypoints.less'

import ComponentItem from '../home/componentitem'

class MyPoints extends Component {
  render() {
    let {bigcustom} = this.props
    return(
      <div className = 'mypointsComBox'>
        <div className = 'mypointsTitle'>
          <img src = '\static\images\积分背景.png' />
          <div className = 'pointsIcon'>
            <div className = 'Icon'><img src = '\static\images\积分图标.png'/></div>
            <div className = 'text'><span>2546</span>会员积分</div>
          </div>
        </div>
        <div className = 'mypointsTab'>
          <div className = 'left'>积分明细</div>
          <div className = 'right'>兑换明细</div>
        </div>
        <div className = 'Hotsuper'>
          <div className = 'Hotleft'>热门兑换</div>
          <div className = 'Hotrigh'><Icon type="right" /></div>
        </div>
        <div className = 'ContentBox'>
          {
            bigcustom.map((item,index)=> {
              return(
                <div key = {index} className = 'BigComponent'>
                  <ComponentItem 
                    item = {item} 
                    mypoint = {true}
                    flag = {true}/>
                </div>
              )
            })
          }          
        </div>
      </div>
    )
  }
}

export default connect(state=>({...state.home}))(MyPoints)
