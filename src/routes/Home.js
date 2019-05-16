import React, {Component} from 'react'
import { connect } from 'react-redux'
import '../static/css/Home.less'
import {Link} from 'react-router-dom'

import ComponentItem from '../component/home/componentitem'
import ComponentLeft from '../component/home/commonleft'
import NewList from '../component/home/newproduct'

class Home extends Component {

  handelFocus = () => {
    this.props.history.push('/seach')
  }

  render() {
    let {bigcustom} = this.props
    return(
      <div className = 'HomeBox' >
        {/* 搜索区域 */}
        <div className = 'HomeSeachBox'>
          <div className = 'seachInput'>
            <input type="text" placeholder = '请输入搜索内容' onFocus = {this.handelFocus}/>
            <i><img src = '/static/images/搜素.png'></img></i>
            <Link to = '/messagelist'><img src = '/static/images/消息.png' width = '30px' /></Link>
          </div>
        </div>
        {/* 限时抢购区域 */}
        <div className = 'NavListBox'>
         <div className = 'newitem'>
            <NewList/>
         </div>
        </div>
        {/* 新品推介区域 */}
        <div className = 'NewProduct'>
          <h3><span>—</span> 新品推介 <span>—</span></h3>
          <div className = 'NewProductLeft'><img src = '/static/images/353403.png' /></div>
          <div className = 'NewProductRight'>
            <span><img src = '/static/images/357200.png' /></span>
            <span><img src = '/static/images/357200.png'/></span>
          </div>
        </div>
        {/* 热卖促销展示 */}
        <div className = 'HotSale'><ComponentLeft/></div>
        {/* 展示区域 */}
        <div className = 'BigCustomers'>
          <h3><span>—</span> 大客户专区 <span>—</span></h3>
          {bigcustom.map((item,index)=> {
              return (
                <div className = 'BigComponent' key = {index} >
                  <ComponentItem item = {item} index = {index}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(state =>({...state.home}))(Home)
