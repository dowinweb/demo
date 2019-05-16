import React, { Component } from 'react'
import {Rate} from 'antd'
import './evaluation.less'

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:false
    }
  }
  
  hanleActive = () => {
    this.setState({
      flag:!this.state.flag
    })
  }
  render() {
    let {flag} = this.state
    return(
      <div className = 'evaluationBox'>
        <div className = 'headerTitle'>
          <div className = 'hraderimg'>
            <img src="http://dummyimage.com/100x100"/>
          </div>
          <div className = 'Context'>
            <span>商品描述</span>
            <Rate style = {{fontSize:'.3rem',width:'.9rem',display:'inline'}} />
          </div>
        </div>
        <div className = 'textAreay'>
          <textarea 
            placeholder = '分享你的购物心得~'
            className = 'text'/>
        </div>
        <div className = 'InfoRefundBox'>
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
        <div className = 'BottomBtnSub'>
          <div className = 'Left' onClick = {this.hanleActive}>
            <img src = {flag?'static/images/匿名 选中.png':'static/images/购物车选中.png'}/>匿名
          </div>
          <div className = 'Sub'>发布</div>
        </div>
      </div>
    )
  }
}

export default Evaluation