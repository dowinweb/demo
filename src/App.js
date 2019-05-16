import React, {Component} from 'react';
// import { connect } from 'react-redux'
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';
import {Route, Switch,Redirect} from 'react-router-dom'
import  './App.less'
import Home from './routes/Home';
import Classify from './routes/Classify';
import Shopcart from './routes/Shopcart';
// import MyOrder from './routes/my/myorder'
// 我的页面
import My from './routes/My';
// 搜索页面
import SearchInput from './component/home/searchinput'
// 消息列表
import MessageList from './component/home/messagelist/index'
// 消息详情
import MessageDetail from './component/home/messagelist/messageDetail'
// 商品详情
import ProductDetail from './component/common/productDetail'
import Pay from './component/common/pay'
import PaySuccess from './component/common/paySuccess'
// 发票
import Invoice from './component/common/invoice'
import OrderDetails from './component/common/orderDetails'
// 确认收货
import ConfirmGoods from './component/common/confirmGoods'
// 评价
import Evaluation from './component/common/evaluation'

// 评价页面
import Comment from './component/common/Comment'
// 售后服务
import Servce from './component/my/Service'
import AfterSell from './component/my/afterSell'
import ServiceDetail from './component/my/serviceDetail'
// 搜索商品页面
import ClassifyPage from './component/classifylist/classifypage'


class App extends Component {
  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <NavTop/>
  
        {/* 主体部分 */}
        <main className = 'container'>
          <Switch>
            {/* <Route path = '/home' component = {Home} /> */}
            <Route path = '/seach' component = {SearchInput} />
            <Route path = '/messagelist' component = {MessageList} />
            <Route path = '/messagedetail' component = {MessageDetail} />
            <Route path = '/productdetail' component = {ProductDetail} />
            <Route path = '/pay' component = {Pay} />
            <Route path = '/paySuccess' component = {PaySuccess} />
            <Route path = '/invoice' component = {Invoice} />
            <Route path = '/orderDetails' component = {OrderDetails} />
            <Route path = '/confirmGoods' component = {ConfirmGoods} />
            <Route path = '/evaluation' component = {Evaluation} />
            <Route path = '/comment' component = {Comment} />
            <Route path = '/service' component = {Servce} />
            <Route path = '/aftersell' component = {AfterSell} />
            <Route path = '/serviceDetail' component = {ServiceDetail} />
            <Route path = '/classify' component = {Classify} />
            <Route path = '/classifypage' component = {ClassifyPage} />
            <Route path = '/shopcart' component = {Shopcart} />
            <Route path = '/my' component = {My} />
            <Route exact path = '/' component = {Home} />
            <Redirect to="/" />
          </Switch>        
        </main>
        
        {/* 底部导航 */}
        <NavBottom/>
      </div>
    )
  }
}

export default App
