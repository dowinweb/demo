import React, {Component} from 'react'
import { connect } from 'react-redux'
import './css/myorder.less'
import action from '../../store/action/index'
import MyorderItem from './myorderitem'
import { Menu } from 'antd'


class MyOrder extends Component {
  state = {
    current: 'all',
  }

  componentWillMount(){
    // 第一次默认筛选全部
    this.props.queryFilterItem(this.state.current)
  }

  handleClick = (e) => {
    console.log(e.key,)
    this.setState({
      current: e.key,
    });
    // 传入当前点击项的key值进行筛选数据
    this.props.queryFilterItem(e.key)    
  }
  render() {
    let {actionStatus} = this.props
    return(
      <div>
    <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode="horizontal"
      className = 'NavBoxFlex'
    >
      <Menu.Item key="all">
        全部
      </Menu.Item>
      <Menu.Item key="app">
        待付款
      </Menu.Item>
      <Menu.Item key="p"> 
        待发货
      </Menu.Item>
      <Menu.Item key="pp">
        待收货
      </Menu.Item>
      <Menu.Item key="pqpp">
        待评价
      </Menu.Item>
    </Menu>
      {/* 显示列表 */}
      {actionStatus.map((item,index)=> {
          return(
            <div key = {index}>{item?<MyorderItem item = {item} />:''}</div>
          )
        })
      }     
    </div>
    )
  }
}

export default connect(state=>({...state.my}),action.my)(MyOrder)
