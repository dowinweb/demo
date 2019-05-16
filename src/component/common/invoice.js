import React, {Component} from 'react'
import {Checkbox} from 'antd'
import './invoice.less'

class Invoice extends Component {
  render() {
    return(
      <div className = 'invoice'>
        <div className = 'header'>
          <div className = 'shang'>请选择发票类型</div>
          <div className = 'xia'>
            <div><Checkbox/>&nbsp;&nbsp;电子发票</div>
            <div><Checkbox/>&nbsp;&nbsp;纸质发票</div>
            <div><Checkbox/>&nbsp;&nbsp;不开发票</div>
          </div>
        </div>
        <div className = 'header'>
          <div className = 'shang'>发票信息</div>
          <div className = 'xia'>
            <div><Checkbox/>&nbsp;&nbsp;个人</div>
            <div><Checkbox/>&nbsp;&nbsp;公司</div>
          </div>
        </div>
        <div className = 'invoicebottom'>
          <div><span>姓名</span><input placeholder = '请输入姓名'/></div>
          <div><span>发票抬头</span><input placeholder = '个人(必填)'/></div>
          <div><span>电子邮箱</span><input placeholder = '请输入电子邮箱(必填)'/></div>
          <div  className = 'mykong'></div>
        </div>
        <div className = 'Btndetermine'>
          <div className = 'determine'>确定</div>
          <div className = 'determineText'>
            <span>电子发票与纸质发票具备同等法律效力，可作为用户</span>
            <span>维权、报修的有效凭据；</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoice