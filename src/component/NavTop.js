import React, {Component} from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import './NavTop.less'


class NavTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:[
        {http:'/seach',title:'搜索'},
        {http:'/',title:'商城'},
        {http:'/shopcart',title:'购物车'},
        {http:'/messagelist',title:'消息列表'},
        {http:'/messagedetail',title:'消息详情'},
        {http:'/productdetail',title:'商品详情'},
        {http:'/pay',title:'确认订单'},
        {http:'/paySuccess',title:'支付成功'},
        {http:'/invoice',title:'开具发票'},
        {http:'/orderDetails',title:'订单详情'},
        {http:'/confirmGoods',title:'确认收货'},
        {http:'/evaluation',title:'评价'},
        {http:'/comment',title:'用户评价'},
        {http:'/my',title:'我的'},
        {http:'/classify',title:'分类'},
        {http:'/my/order',title:'我的订单'},
        {http:'/my/address',title:'收货地址'},
        {http:'/my/mypoints',title:'积分管理'},
        {http:'/my/refund',title:'申请退款'},
        {http:'/my/refundDetail',title:'退款详情'},
        {http:'/classifypage',title:'分类列表'},
        {http:'/service',title:'产品售后'},
        {http:'/aftersell',title:'售后服务'},
        {http:'/serviceDetail',title:'售后服务'},
      ]
    }
  }
  
  render() {
    let {pathname} = this.props.location
    let content = this.state.title.find(item=>item.http === pathname)
    content = content.title
    // var title
    // switch(pathname){ 
    //   case '/seach':
    //   title = '搜索'
    //   break
    //   case '/messagelist':
    //   title = '消息列表'
    //   break
    //   case '/productdetail':
    //   title = '商品详情'
    //   break
    //   case '/shopcart':
    //   title = '购物车'
    //   break
    //   case '/my':
    //   title = '我的'
    //   break
    //   case '/classify':
    //   title = '分类'
    //   break
    //   case '/my/order':
    //   title = '我的订单'
    //   break
    //   case '/my/refund':
    //   title = '申请退款'
    //   break
    //   case '/classify':
    //   title = '分类'
    //   break
    //   case '/classify':
    //   title = '分类'
    //   break
    //   case '/classify':
    //   title = '分类'
    //   break
    //   default:
    //   break
    // }
    return(
      <header className = 'NavHeaderBox'>
        <h3>{content}</h3>
      </header>
    )
  }
}

export default withRouter(connect()(NavTop))
