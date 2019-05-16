import * as TYPES from '../actionTypes'



let initData = {
  mydata:[
    {text:'售后服务',img:'/static/images/售后服务.png',status:0,hash:'/service'},
    {text:'积分管理',img:'/static/images/积分管理.png',status:2,hash:'/my/mypoints'},
    {text:'收货地址',img:'/static/images/收货地址.png',status:0,hash:'/my/address'}
  ],
  myorder:[
    {text:'商品订单',img:'/static/images/商品订单.png',status:0},
    {text:'租赁订单',img:'/static/images/租赁订单.png',status:3},
    {text:'耗材订单',img:'/static/images/耗材订单.png',status:8},
  ],
  allOrder:[
    {key:'all',orderNo:'订单编号：230102566',img:'http://dummyimage.com/145x145',price:'￥1988',status:'待付款'},
    {key:'all',orderNo:'订单编号：230109999',img:'http://dummyimage.com/145x145',price:'￥988',status:'已取消'},
    {key:'all',orderNo:'订单编号：357202566',img:'http://dummyimage.com/145x145',price:'￥888',status:'交易成功'},
  ],
  actionStatus :[]
}
export default function my(state = initData,action) {
  state = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case TYPES.QUERYFILTERITEM:
      let item = state.allOrder.filter(item=>item.key === action.key)
      state.actionStatus = item
    default:
      break
  }
  return state
}