import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import MyHome from '../component/my/MyHome'
import MyOrder from '../component/my/myorder'
import Refund from '../component/my/Refund'
import RefundDetail from '../component/my/refundDetail'
import Address from '../component/my/Address'
import MyPoints from '../component/my/mypoints'
import '../static/css/My.less'



class My extends Component {
  render() {
    return(
      <div className = 'myPersonalCenter'>
        <Switch>
          <Route path='/my' exact component={MyHome} />
          <Route path ='/my/order' exact component = {MyOrder} />
          <Route path ='/my/refund' exact component = {Refund} />
          <Route path ='/my/refundDetail' exact component = {RefundDetail} />
          <Route path ='/my/address' exact component = {Address} />
          <Route path ='/my/mypoints' exact component = {MyPoints} />
        </Switch>
       </div>
    )
  }
}

export default My
